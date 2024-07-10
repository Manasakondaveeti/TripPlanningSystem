import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule], // Ensure these modules are imported
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelsComponent {
  selectedDate: string = ''; // ngModel bound for date input
  budget: number | undefined; // ngModel bound for budget input
  hotels: any[] = []; // Array to store fetched hotel data
  selectedHotel: any | undefined; // Holds the selected hotel for detailed view

  private apiUrl = 'http://localhost:8080/searchHotels'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  filterHotels(): void {
    if (this.selectedDate && this.budget !== undefined) {
      // Example: Fetch hotels based on selected date and budget
      this.http.get<any[]>(this.apiUrl, {
        params: {
          date: this.selectedDate,
          budget: this.budget.toString()
        }
      }).subscribe(data => {
        this.hotels = data;
      });
    } else {
      this.hotels = []; // Clear hotels if date or budget is not set
    }
  }

  selectHotel(hotel: any): void {
    this.selectedHotel = hotel; // Set the selected hotel
  }

  proceedToPayment(): void {
    // Logic to navigate to payment page with selectedHotel data
    console.log('Proceeding to payment for hotel:', this.selectedHotel);
    // Example navigation code:
    // this.router.navigate(['/payment', { hotelId: this.selectedHotel.id }]);
  }
}
