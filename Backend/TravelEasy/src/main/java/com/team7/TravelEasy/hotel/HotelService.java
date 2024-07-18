package com.team7.TravelEasy.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    public List<Hotel> searchHotels(String location, LocalDateTime startOfDay, LocalDateTime endOfDay, BigDecimal budget) {
        return hotelRepository.findByLocationAndDateBetweenAndBudgetLessThanEqual(
                location, startOfDay, endOfDay, budget);
    }
}
