/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.team7.TravelEasy.flightorders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author HRITHIK
 */
@Repository
public interface FlightOrderRepository extends JpaRepository<FlightOrder, Long> {
    FlightOrder findByUsername(String username);
}
