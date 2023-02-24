package famu.edu.campusquest.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {
    @DocumentId


    private String FirstName;
    private String LastName;
    private String City;
    private String Email;
    private String UniversityName;
    private Timestamp LastLogin;
    private Timestamp CreatedAt;
}

