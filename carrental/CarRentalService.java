package com.team7.TravelEasy.carrental;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class CarRentalService {

    @Autowired
    private CarRentalRepository carRentalRepository;

    public List<CarRental> searchCarRentals(String city, LocalDate pickUpDate, LocalDate dropOffDate) {
        return carRentalRepository.findByCityAndPickUpDateAndDropOffDate(city, pickUpDate, dropOffDate);
    }
}
