package famu.edu.campusquest.Model;

import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Search {
    @DocumentId
    private @Nullable String id;
    private String CollegeName;
    private String State;
    private int ZipCode;
    private String County;
}