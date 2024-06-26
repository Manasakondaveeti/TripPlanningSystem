import { Component } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attractions',
  standalone: true,
  imports: [HttpClientModule , CommonModule , FormsModule],
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.css'
})
export class AttractionsComponent {
  places: any[] = [];
  showDropdown: boolean = false;
  private apiUrl = 'http://localhost:8080/auth/places';
  selectedTouristPlaces: any[] = [];
  touristPlaces: any[] = [];
  selectedCity: string = '';
  constructor(private http: HttpClient) { }
  numberOfDays: number = 0;
  organizedSchedule: any[] = [];
  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.places = data;
      console.log(this.places);
    });
  }

  onFocus(): void {
    this.showDropdown = true;
  }

  onBlur(): void {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }
  
  selectCity(city: string): void {
    this.selectedCity = city;
    
      this.http.get<any[]>(`${this.apiUrl}/tourist-places?city=${city}`).subscribe(data => {
      this.touristPlaces = data;
    });
  }

  toggleSelection(touristPlace: any): void {
    const index = this.selectedTouristPlaces.findIndex(place => place.id === touristPlace.id);
    if (index > -1) {
      this.selectedTouristPlaces.splice(index, 1);
    } else {
      this.selectedTouristPlaces.push(touristPlace);
    }
  }

  organizeSchedule(): void {
    const schedule: any[] = [];
    let day = 1;
    let morningTime = 0;
    let afternoonTime = 0;

    this.selectedTouristPlaces.forEach(place => {
      if (day > this.numberOfDays) {
        return;
      }
      if (place.type === 'indoor') {
        if (afternoonTime + place.duration <= 4) {
          schedule.push({ day: day, time: 'Afternoon', place: place });
          afternoonTime += place.duration;
        } else {
          day++;
          afternoonTime = place.duration;
          schedule.push({ day: day, time: 'Afternoon', place: place });
        }
      } else {
        if (morningTime + place.duration <= 4) {
          schedule.push({ day: day, time: 'Morning', place: place });
          morningTime += place.duration;
        } else {
          day++;
          morningTime = place.duration;
          schedule.push({ day: day, time: 'Morning', place: place });
        }
      }
    });

    this.organizedSchedule = schedule;
  }

  printPage(): void {
    window.print();
  }

  isSelected(touristPlace: any): boolean {
    return this.selectedTouristPlaces.some(place => place.id === touristPlace.id);
  }

}
