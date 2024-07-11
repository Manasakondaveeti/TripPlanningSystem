package com.team7.TravelEasy.attractions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Repository
@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
}
