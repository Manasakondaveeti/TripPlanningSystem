package com.team7.TravelEasy.hotel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;


    @Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {
    List<Hotel> findByLocationAndDateBetweenAndBudgetLessThanEqual(
            String location, LocalDateTime startDateTime, LocalDateTime endDateTime, BigDecimal budget);
}