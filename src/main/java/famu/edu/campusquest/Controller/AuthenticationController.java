package famu.edu.campusquest.Controller;



import com.google.api.client.util.Value;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import famu.edu.campusquest.Model.User;
import famu.edu.campusquest.Services.UserService;

import famu.edu.campusquest.Util.*;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import famu.edu.campusquest.Security.FirebaseUserDetails;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    private final FirebaseAuth firebaseAuth = FirebaseAuth.getInstance();
    private final AuthenticationManager authenticationManager;

    @Value("${response.status}")
    private int statusCode;
    @Value("${response.name}")
    private String name;
    private Object payload;
    private ResponseWrapper response;
    private static final String CLASS_NAME = "Authentication";


    private final Log logger = LogFactory.getLog(this.getClass());

    public AuthenticationController(AuthenticationManager authenticationManager) {

        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody User user) throws FirebaseAuthException {
        final UserService userService = new UserService();
        try{
            payload = userService.createUser(user);
            statusCode = 201;
            name = "userId";
        } catch (ExecutionException | InterruptedException e) {
            payload = new ErrorMessage("Cannot create new user in database.", CLASS_NAME, e.toString());
        }

        response = new ResponseWrapper(statusCode,name, payload);

        return response.getResponse();
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequest loginRequest) throws FirebaseAuthException {
        String token = "";
        HttpHeaders headers = new HttpHeaders();

        try {
            UserRecord userRecord = firebaseAuth.getUserByEmail(loginRequest.getEmail());
            //logger.info(userRecord.getUid());

            UserDetails userDetails = new FirebaseUserDetails(userRecord);
            //logger.info(userDetails);
            token = JwtUtil.generateToken(userDetails);
            logger.info(token);
            UserService service = new UserService();
            User user = service.getUserByUid(userRecord.getUid());
            payload = user;
            service.updateLastLogin(user.getUid() );

            statusCode = 200;
            name = "user";
            headers.add("X-Auth-Token", token);
            Instant now = Instant.now();
            Instant expiryDate = now.plus(1, ChronoUnit.HOURS);
            headers.add("Expires", String.valueOf(expiryDate.toEpochMilli()));

        } catch (InterruptedException | ExecutionException e) {

            payload = new ErrorMessage("Error signing in", CLASS_NAME, e.toString());
        }

        response = new ResponseWrapper(statusCode, name, payload, headers);

        return response.getResponse();
    }


    @GetMapping("/logout")
    public String logout() {
        SecurityContextHolder.getContext().setAuthentication(null);
        return "Logged out successfully";
    }
}