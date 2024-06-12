package com.team7.Traveleasy;




        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.context.annotation.Bean;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
        import org.springframework.security.crypto.password.PasswordEncoder;
        import org.springframework.web.bind.annotation.*;

        import java.util.HashMap;
        import java.util.Map;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class ApiController {
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println("manasa");
        user.setPassword(user.getPassword());
        System.out.println("manasa1");

        userRepository.save(user);
        System.out.println("manasa2");
        System.out.println("manasa3");

        return ResponseEntity.ok("User registered successfully");

    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User login) {
        User user = userRepository.findByUsername(login.getUsername());
        Map<String, String> response = new HashMap<>();
        if (user != null && login.getPassword().matches(user.getPassword())) {

            response.put("message", "User logged in successfully");
            return ResponseEntity.ok(response);
        }
        response.put("message", "Failed to login");
        return ResponseEntity.ok(response);
        
    }


}
