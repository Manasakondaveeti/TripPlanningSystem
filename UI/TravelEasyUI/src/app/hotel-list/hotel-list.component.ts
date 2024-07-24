// hotel-list.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',  // Corrected selector
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],  // Include FormsModule in imports
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
  
})
export class HotelListComponent implements OnInit {
  location: string = '';
  date: string = '';
  budget: number | null = null;
  hotels: any[] = [];
  selectedDate: string = '';
  showPopup: boolean = false;
  private apiUrl = 'http://localhost:8080/searchHotels';
  bookingService: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    

  }

  onFocus(): void {
    // Implement onFocus logic if needed
  }

  onBlur(): void {
    // Implement onBlur logic if needed
  }

  searchHotels(): void {
    console.log(this.location);
    console.log(this.date);
    console.log(this.budget);

    let params = new HttpParams()
      .set('location', this.location)
      .set('date', this.date)
      .set('budget', this.budget ? this.budget.toString() : '');

    this.http.get<any[]>(this.apiUrl, { params }).subscribe(data => {
      this.hotels = data;
      console.log(this.hotels.length);
    });
  }

  filterHotels(): void {
    // Implement filter logic
  }

  selectHotel(hotel: any): void {
    // Implement select logic
  }

  goToPayment(hotel: any): void {
    hotel.price=hotel.budget;
    
    const navigationExtras: NavigationExtras = {
      state: {
        item: { ...hotel, type: 'hotel' }
      }
    };
    this.router.navigate(['/payment'], navigationExtras);
  }

  
  printPage(): void {
    window.print();
  }
}