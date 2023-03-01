package famu.edu.campusquest.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.protobuf.util.Timestamps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.text.ParseException;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Event {
    @DocumentId
    private @Nullable String id;
    private String EventName;
    private String EventAddress;
    private String UniversityName;
    private Timestamp EventDate;

    public void setEventDate(String eventDate) throws ParseException {
        this.EventDate = Timestamp.fromProto(Timestamps.parse(eventDate));
    }
}

