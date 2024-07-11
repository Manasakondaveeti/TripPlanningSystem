package com.team7.TravelEasy.attractions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlaceService {
    @Autowired
    private PlaceRepository placeRepository;
    @Autowired
    private TouristPlaceRepository touristPlaceRepository;
    public List<Place> getAllPlaces() {
        return placeRepository.findAll();
    }

    public List<TouristPlace> getTouristPlacesByCity(String city) {
        return touristPlaceRepository.findByCity(city);
    }
}
