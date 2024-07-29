/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.team7.TravelEasy.flightorders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    
    @Autowired
    private FlightOrderRepository flightOrderRepository;

    @PostMapping("/flight-orders")
    public FlightOrder createFlightOrder(@RequestBody FlightOrder flightOrder) {
         // Log request data
        //System.out.println("username: " + flightOrder.getUsername() + "airline:" + flightOrder.getAirline() + flightOrder.getOrigin() + flightOrder.getDestination() + flightOrder.getDepartureTime() + flightOrder.getPrice());
        return flightOrderService.saveFlightOrder(flightOrder);
    }
    
    @GetMapping("/flight-orders/{username}")
    public ResponseEntity<FlightOrder> getFlightOrderByUsername(@PathVariable String username) {
        FlightOrder flightOrder = flightOrderRepository.findByUsername(username);
        if (flightOrder == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(flightOrder);
    }
}
