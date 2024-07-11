package com.team7.TravelEasy.attractions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TouristPlaceRepository extends JpaRepository<TouristPlace, Long> {
    List<TouristPlace> findByCity(String city);
}
