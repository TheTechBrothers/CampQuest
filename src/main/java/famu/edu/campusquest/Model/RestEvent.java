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
    private DocumentReference collegeId;

    public RestEvent(@Nullable String id, String EventName, String EventAddress, @Nullable Timestamp EventDate, DocumentReference collegeId) {
        super(id, EventName, EventAddress, EventDate);
        this.collegeId = collegeId;
    }

    public void setCollegeId(String college) {
        Firestore db = FirestoreClient.getFirestore();
        this.collegeId = db.collection("College").document(college);
    }
}