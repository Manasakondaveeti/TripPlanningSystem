import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelsComponent {
  bookingService: any;
filterHotels() {
throw new Error('Method not implemented.');
}
  selectedDate: string = '';
  budget: number = 0;
  hotels: any[] = [];
  selectedHotel: any | undefined;
  private apiUrl = 'http://localhost:8080/searchHotels';

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.selectedDate = this.bookingService.getSelectedDateAsString() ?? ''; // Ensure to handle null or undefined return values
    this.budget = this.bookingService.getBudget(); // Assign budget, handle null case
    this.filterHotels(); // Fetch hotels based on selectedDate and budget
  }
  searchHotels(): void {
    if (this.selectedDate && this.budget !== null) {
      let params = new HttpParams()
        .set('date', this.selectedDate)
        .set('budget', this.budget.toString());

      this.http.get<any[]>(this.apiUrl, { params }).subscribe(data => {
        this.hotels = data;
      });
    } else {
      this.hotels = [];
    }
  }

  selectHotel(hotel: any): void {
    this.selectedHotel = hotel;
  }

  goToPayment(hotel: any): void {
    const navigationExtras: NavigationExtras = {
      state: {
        hotel: hotel
      }
    };
    this.router.navigate(['/payment'], navigationExtras);
  }
}
