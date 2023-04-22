package famu.edu.campusquest;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@SpringBootApplication
public class CampusQuestApplication {

	public static void main(String[] args) throws IOException {
		ClassLoader loader = CampusQuestApplication.class.getClassLoader();

		//opens the file stored in resources
		File file = new File(loader.getResource("serviceAccount.json").getFile());
		//reads the data from the file
		FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.build();
		FirebaseApp.initializeApp(options);
		SpringApplication.run(CampusQuestApplication.class, args);
	}

}
