package famu.edu.campusquest.Services;

import com.google.cloud.Timestamp;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import famu.edu.campusquest.Model.User;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {
    private Firestore db = FirestoreClient.getFirestore();

    public ArrayList<User>getUsers() throws ExecutionException, InterruptedException {
        Query query = db.collection("User");
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        ArrayList<User> users = (documents.size() > 0) ? new ArrayList<>() : null;

        for (QueryDocumentSnapshot doc : documents)
            users.add(doc.toObject(User.class));

        return users;


    }

    public User getUserById(String id) throws ExecutionException, InterruptedException {
        User user = null;

        DocumentReference doc = db.collection("User").document(id);
        ApiFuture<DocumentSnapshot> future = doc.get();
        user = future.get().toObject(User.class);

        return user;
    }

    public String createUser(User user) throws ExecutionException, InterruptedException {
        String userId = null;
        user.setCreatedAt(Timestamp.now());
        user.setLastLogin(Timestamp.now());

        ApiFuture<DocumentReference> future = db.collection("User").add(user);
        DocumentReference userRef = future.get();
        userId = userRef.getId();

        return userId;
    }

    public void updateUser(String id, Map<String, String> updateValues){

        String [] allowed = {"uid", "city", "createdAt", "email", "firstName", "lastName", "universityName"};
        List<String> list = Arrays.asList(allowed);
        Map<String, Object> formattedValues = new HashMap<>();

        for(Map.Entry<String, String> entry : updateValues.entrySet()) {
            String key = entry.getKey();
            if(list.contains(key))
                formattedValues.put(key, entry.getValue());
        }

        DocumentReference userDoc = db.collection("User").document(id);
        userDoc.update(formattedValues);
    }

    public void deleteUser(String userId){
        DocumentReference userDoc = db.collection("User").document(userId);
        userDoc.delete();
    }

}
