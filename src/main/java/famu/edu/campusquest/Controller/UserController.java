package famu.edu.campusquest.Controller;

import famu.edu.campusquest.Model.User;
import com.google.api.client.util.Value;
import famu.edu.campusquest.Services.UserService;
import famu.edu.campusquest.Util.ErrorMessage;
import famu.edu.campusquest.Util.ResponseWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;
    @Value("${response.status}")
    private int statusCode;
    @Value("${response.name}")
    private String name;
    private Object payload;
    private ResponseWrapper response;
    private static final String CLASS_NAME = "UserService";
    public UserController(UserService userService) {
        this.userService = userService;
        payload = null;
    }

    @GetMapping("/")
    public ResponseEntity<Map<String,Object>> getUsers(){
        try {
            payload = userService.getUsers();
            statusCode = 200;
            name = "users";
        } catch (ExecutionException | InterruptedException e) {
            payload = new ErrorMessage("Cannot fetch users from database", CLASS_NAME,
                    e.getStackTrace().toString());
        }

        response = new ResponseWrapper(statusCode, name, payload);
        return response.getResponse();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Map<String,Object>> getUser(@PathVariable(name = "userId") String id){
        try {
            payload = userService.getUserById(id);
            statusCode = 200;
            name = "user";
        } catch (ExecutionException | InterruptedException e) {
            payload = new ErrorMessage("Cannot fetch user with id" + id + " from database", CLASS_NAME,
                    e.getStackTrace().toString());
        }

        response = new ResponseWrapper(statusCode, name, payload);
        return response.getResponse();
    }

    @PostMapping("/")
    public ResponseEntity<Map<String,Object>> createUser(@RequestBody User user){
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

    @PutMapping("/{userId}")
    public ResponseEntity<Map<String,Object>> updateUser(@PathVariable(name="userId") String id, @RequestBody Map<String, String> updateValues){


        try{

            userService.updateUser(id, updateValues);
            statusCode = 201;
            name = "message";
            payload = "Update successful for user with id " + id;

        } catch (Exception e) {
            payload = new ErrorMessage("Cannot update user with id " + id,CLASS_NAME, e.toString());
        }

        response = new ResponseWrapper(statusCode,name, payload);

        return response.getResponse();
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Map<String,Object>> removeUser(@PathVariable(name="userId") String id){

        try{
            userService.deleteUser(id);
            statusCode = 204;
            name = "message";
            payload = "Delete successful for user with id " + id;
        }catch (Exception e){
            payload = new ErrorMessage("Cannot delete user with id " + id, CLASS_NAME, e.toString());
        }
        response = new ResponseWrapper(statusCode,name, payload);

        return response.getResponse();
    }

}
