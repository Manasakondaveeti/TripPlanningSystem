package com.team7.TravelEasy.flight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FlightController {

    @Autowired
    private FlightService flightService;

    @GetMapping("/searchFlights")
    public List<Flight> searchFlights(@RequestParam String origin, @RequestParam String destination) {
        return flightService.searchFlights(origin, destination);
    }
}
