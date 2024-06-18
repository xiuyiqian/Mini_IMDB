package dev.hideki.spring_project_2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringProject2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringProject2Application.class, args);
	}

	@GetMapping("/")
	public String apiIndex(){
		return "Hello World";
	}
}

//mongodb+srv://${env.MONGO_USER}:${env.MONGO_PASSWORD}@${env.MONGO_CLUSTER}
//mongodb+srv://hideki23:Princecaesar0823@@movie.obfzbzs.mongodb.net/