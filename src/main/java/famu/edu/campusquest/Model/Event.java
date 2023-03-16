package famu.edu.campusquest.Model;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.protobuf.util.Timestamps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.text.ParseException;
import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Event extends BaseEvent {

    private ArrayList<College> CollegeName;

    public Event(@Nullable String id, String EventName, @Nullable Timestamp EventDate, ArrayList<College> collegeName) {
        super(id, EventName, EventDate);
        CollegeName = collegeName;
    }
}

