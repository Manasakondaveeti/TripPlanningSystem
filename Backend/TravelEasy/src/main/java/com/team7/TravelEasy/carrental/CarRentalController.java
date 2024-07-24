package com.team7.TravelEasy.carrental;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
public class CarRentalController {

    @Autowired
    private CarRentalService carRentalService;

    @GetMapping("/searchCarRentals")
    public List<CarRental> searchCarRentals(@RequestParam String city, @RequestParam LocalDate pickUpDate,
            @RequestParam LocalDate dropOffDate) {
        return carRentalService.searchCarRentals(city, pickUpDate, dropOffDate);
    }
}
