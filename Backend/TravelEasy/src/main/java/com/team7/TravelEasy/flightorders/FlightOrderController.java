/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.team7.TravelEasy.flightorders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author HRITHIK
 */
@RestController
@RequestMapping("/api")
public class FlightOrderController {

    @Autowired
    private FlightOrderService flightOrderService;

    @PostMapping("/flight-orders")
    public FlightOrder createFlightOrder(@RequestBody FlightOrder flightOrder) {
         // Log request data
        //System.out.println("username: " + flightOrder.getUsername() + "airline:" + flightOrder.getAirline() + flightOrder.getOrigin() + flightOrder.getDestination() + flightOrder.getDepartureTime() + flightOrder.getPrice());
        return flightOrderService.saveFlightOrder(flightOrder);
    }
}
