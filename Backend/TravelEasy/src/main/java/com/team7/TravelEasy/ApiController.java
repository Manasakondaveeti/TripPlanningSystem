package com.team7.TravelEasy;




import com.team7.TravelEasy.attractions.Place;
import com.team7.TravelEasy.attractions.PlaceService;
import com.team7.TravelEasy.attractions.TouristPlace;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class ApiController {
    @Autowired
    private UserRepository userRepository;
    Map<String, String> response = new HashMap<>();

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println("manasa");
        user.setPassword(user.getPassword());
        System.out.println(user.getPassword());

        userRepository.save(user);
        System.out.println(user.getUsername());
        System.out.println("manasa3");
        response.put("message", "User registered successfully");
        return ResponseEntity.ok(response);

    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User login) {
        User user = userRepository.findByUsername(login.getUsername());

        if (user != null && login.getPassword().matches(user.getPassword())) {

            response.put("message", "User logged in successfully");
            response.put("token", "success");
            return ResponseEntity.ok(response);
        }
        response.put("token", "error");
        response.put("message", "Failed to login");
        return ResponseEntity.ok(response);

    }
    @Autowired
    private PlaceService placeService;
    @GetMapping("/places")
    public List<Place> getAllPlaces() {
        return placeService.getAllPlaces();
    }


    @GetMapping("/places/tourist-places")
    public List<TouristPlace> getTouristPlacesByCity(@RequestParam String city) {
        return placeService.getTouristPlacesByCity(city);
    }


}