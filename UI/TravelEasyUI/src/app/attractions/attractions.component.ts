import { Component } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attractions',
  standalone: true,
  imports: [HttpClientModule , CommonModule],
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.css'
})
export class AttractionsComponent {
  places: any[] = [];
  showDropdown: boolean = false;
  private apiUrl = 'http://localhost:8080/auth/places';

  touristPlaces: any[] = [];
  selectedCity: string = '';
  constructor(private http: HttpClient) { }

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

}
