package famu.edu.campusquest.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.protobuf.util.Timestamps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.text.ParseException;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {
    @DocumentId
    private @Nullable String id;
    private @Nullable String uid;
    private String FirstName;
    private String LastName;
    private String City;
    private String Email;
    private String UniversityName;
    private Timestamp LastLogin;
    private Timestamp CreatedAt;
}

