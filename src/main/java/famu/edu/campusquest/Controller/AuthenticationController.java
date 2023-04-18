package famu.edu.campusquest.Controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import famu.edu.campusquest.Security.FirebaseUserDetails;
import famu.edu.campusquest.Util.JwtUtil;
import famu.edu.campusquest.Util.LoginRequest;
import famu.edu.campusquest.Util.RegistrationRequest;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@SuppressWarnings("ALL")
@RestController
public class AuthenticationController {

    private final FirebaseAuth firebaseAuth;
    private final AuthenticationManager authenticationManager;

    private final Log logger = LogFactory.getLog(this.getClass());

    public AuthenticationController(FirebaseAuth firebaseAuth, AuthenticationManager authenticationManager) {
        this.firebaseAuth = firebaseAuth;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegistrationRequest registrationRequest) throws FirebaseAuthException {
        UserRecord.CreateRequest createRequest = new UserRecord.CreateRequest()
                .setEmail(registrationRequest.getEmail())
                .setPassword(registrationRequest.getPassword())
                .setDisplayName(registrationRequest.getDisplayName());
        UserRecord userRecord = null;
        try {
            userRecord = firebaseAuth.createUser(createRequest);
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e);
        }
        return "User created with UID: " + userRecord.getUid();
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) throws FirebaseAuthException {
        UserRecord userRecord = firebaseAuth.getUserByEmail(loginRequest.getEmail());
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userRecord.getUid(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = new FirebaseUserDetails(userRecord);
        String token = JwtUtil.generateToken(userDetails);
        logger.info(token);
        return token;
    }




    @GetMapping("/logout")
    public String logout() {
        SecurityContextHolder.getContext().setAuthentication(null);
        return "Logged out successfully";
    }
}
