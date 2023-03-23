package famu.edu.campusquest.Model;

import com.google.cloud.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Event extends BaseEvent {

    private College collegeId;

    public Event(@Nullable String id, String EventName, String EventAddress, @Nullable Timestamp EventDate, College collegeId) {
        super(id, EventName, EventAddress, EventDate);
        this.collegeId = collegeId;
    }
}

