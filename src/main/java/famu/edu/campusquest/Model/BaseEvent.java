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
@AllArgsConstructor
@NoArgsConstructor
public abstract class BaseEvent{
    @DocumentId

    protected @Nullable String id;
    protected String EventName;
    protected String EventAddress;
    protected @Nullable Timestamp EventDate;

    public void  setEventDate(String EventDate) throws ParseException {
        this.EventDate =Timestamp.fromProto(Timestamps.parse(EventDate));
    }
}


