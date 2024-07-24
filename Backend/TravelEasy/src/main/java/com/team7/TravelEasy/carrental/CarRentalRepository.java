package com.team7.TravelEasy.carrental;

import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface CarRentalRepository extends JpaRepository<CarRental, Long> {
    List<CarRental> findByCityAndPickUpDateAndDropOffDate(String city, LocalDate pickUpDate, LocalDate dropOffDate);
}
