package famu.edu.campusquest.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.util.ArrayList;

@Data
@NoArgsConstructor
public class RestEvent extends BaseEvent {
    private ArrayList<DocumentReference> collegeName;

    public RestEvent(@Nullable String id, String EventName, String EventAddress, @Nullable Timestamp EventDate, ArrayList<DocumentReference> collegeName) {
        super(id, EventName, EventAddress, EventDate);
        this.collegeName = collegeName;
    }

    public void setCollegeName(ArrayList<String> collegeName) {
        Firestore db = FirestoreClient.getFirestore();
        this.collegeName = new ArrayList<>();
        for(String cat: collegeName){
            this.collegeName.add(db.collection("College").document(cat));
        }

    }
}