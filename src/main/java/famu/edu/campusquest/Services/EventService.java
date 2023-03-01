package famu.edu.campusquest.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import famu.edu.campusquest.Model.Event;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class EventService {
    private Firestore db = FirestoreClient.getFirestore();

    public ArrayList<Event>getEvents() throws ExecutionException, InterruptedException {
        Query query = db.collection("Event");
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        ArrayList<Event> events = (documents.size() > 0) ? new ArrayList<>() : null;

        for (QueryDocumentSnapshot doc : documents)
            events.add(doc.toObject(Event.class));

        return events;


    }

    public Event getEventById(String id) throws ExecutionException, InterruptedException {
        Event event = null;

        DocumentReference doc = db.collection("Event").document(id);
        ApiFuture<DocumentSnapshot> future = doc.get();
        event = future.get().toObject(Event.class);

        return event;
    }

    public String createEvent(Event event) throws ExecutionException, InterruptedException {
        String eventId = null;
        event.setEventDate(Timestamp.now());

        ApiFuture<DocumentReference> future = db.collection("Event").add(event);
        DocumentReference eventRef = future.get();
        eventId = eventRef.getId();

        return eventId;
    }

    public void updateEvent(String id, Map<String, String> updateValues){

        String [] allowed = {"EventAddress", "EventDate", "EventName"};
        List<String> list = Arrays.asList(allowed);
        Map<String, Object> formattedValues = new HashMap<>();

        for(Map.Entry<String, String> entry : updateValues.entrySet()) {
            String key = entry.getKey();
            if(list.contains(key))
                formattedValues.put(key, entry.getValue());
        }

        DocumentReference eventDoc = db.collection("Event").document(id);
        eventDoc.update(formattedValues);
    }

    public void deleteEvent(String eventId){
        DocumentReference eventDoc = db.collection("Event").document(eventId);
        eventDoc.delete();
    }

}
