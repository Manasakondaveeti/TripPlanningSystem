package com.team7.TravelEasy.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@RestController
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @GetMapping("/searchHotels")
    public List<Hotel> searchHotels(
            @RequestParam String location,
            @RequestParam String date,
            @RequestParam BigDecimal budget) {

        LocalDate localDate = LocalDate.parse(date);
        LocalDateTime startOfDay = localDate.atStartOfDay();
        LocalDateTime endOfDay = localDate.atTime(LocalTime.MAX);

        System.out.println("Searching hotels with parameters: ");
        System.out.println("Location: " + location);
        System.out.println("Start of Day: " + startOfDay);
        System.out.println("End of Day: " + endOfDay);
        System.out.println("Budget: " + budget);

        List<Hotel> list = hotelService.searchHotels(location, startOfDay, endOfDay, budget);
        System.out.println(list);
        return list;
    }
}
