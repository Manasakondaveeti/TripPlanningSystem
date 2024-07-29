/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.team7.TravelEasy.flightorders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author HRITHIK
 */
@Service
public class FlightOrderService {

    @Autowired
    private FlightOrderRepository flightOrderRepository;

    public FlightOrder saveFlightOrder(FlightOrder flightOrder) {
        return flightOrderRepository.save(flightOrder);
    }
}
