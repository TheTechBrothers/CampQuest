package famu.edu.campusquest.Model;

import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Search {

    @DocumentId

    private String CollegeName;

    private String State;

    private Integer Zipcode;

    private String County;
}
