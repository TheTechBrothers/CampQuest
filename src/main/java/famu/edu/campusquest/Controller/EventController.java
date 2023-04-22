package famu.edu.campusquest.Controller;

import com.google.api.client.util.Value;
import famu.edu.campusquest.Model.RestEvent;
import famu.edu.campusquest.Services.EventService;
import famu.edu.campusquest.Util.ErrorMessage;
import famu.edu.campusquest.Util.ResponseWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/event")
public class EventController {
    private final EventService eventService;
    @Value("${response.status}")
    private int statusCode;
    @Value("${response.name}")
    private String name;
    private Object payload;
    private ResponseWrapper response;
    private static final String CLASS_NAME = "UserService";
    public EventController(EventService eventService) {
        this.eventService = eventService;
        payload = null;
    }

    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> getAllEvents(){
        try {
            payload = eventService.getEvents();
            statusCode = 200;
            name = "events";

        } catch (ExecutionException | InterruptedException e) {
            payload = new ErrorMessage("Cannot fetch events from database", CLASS_NAME, e.toString());
        }
        response = new ResponseWrapper(statusCode, name, payload);

        return response.getResponse();

    }
    @GetMapping("/{eventId}")
    public ResponseEntity<Map<String, Object>> getEventById(@PathVariable(name="eventId") String id){
        try{
            payload = eventService.getEventById(id);
            statusCode = 200;
            name = "event";
        } catch (ExecutionException | InterruptedException e) {
            payload = new ErrorMessage("Cannot fetch event with id " + id + " from database.", CLASS_NAME, e.toString());
        }
        response = new ResponseWrapper(statusCode, name, payload);

        return response.getResponse();
    }

    @PostMapping("/")
    public ResponseEntity<Map<String,Object>> createEvent(@RequestBody RestEvent event){
        try{
            payload = eventService.createEvent(event);
            statusCode = 201;
            name = "eventId";
        } catch (ExecutionException | InterruptedException e) {
            payload = new ErrorMessage("Cannot create new event in database.", CLASS_NAME, e.toString());
        }

        response = new ResponseWrapper(statusCode,name, payload);

        return response.getResponse();
    }

    @PutMapping("/{eventId}")
    public ResponseEntity<Map<String,Object>> updateEvent(@PathVariable(name="eventId") String id, @RequestBody Map<String, String> updateValues){
        try{

            eventService.updateEvent(id, updateValues);
            statusCode = 201;
            name = "message";
            payload = "Update successful for event with id " + id;

        }catch (ParseException e){
            statusCode = 400;
            payload = new ErrorMessage("Cannot parse JSON",CLASS_NAME, e.toString());
        }
        catch (Exception e) {
            payload = new ErrorMessage("Cannot update event with id " + id,CLASS_NAME, e.toString());
        }

        response = new ResponseWrapper(statusCode,name, payload);

        return response.getResponse();
    }

    @DeleteMapping("/{eventId}")
    public ResponseEntity<Map<String,Object>> removeEvent(@PathVariable(name="eventId") String id){

        try{
            eventService.deleteEvent(id);
            statusCode = 204;
            name = "message";
            payload = "Delete successful for event with id " + id;
        }catch (Exception e){
            payload = new ErrorMessage("Cannot delete event with id " + id, CLASS_NAME, e.toString());
        }
        response = new ResponseWrapper(statusCode,name, payload);

        return response.getResponse();
    }

}
