import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { BookingService } from '../booking.service';
import { HttpClient,  HttpFeature,  HttpFeatureKind,  withFetch  } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure FormsModule is here
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  providers: [
    provideHttpClient(withFetch())
  ]
})


export class HotelListComponent implements OnInit {
  hotels: any[] = [];
  selectedDate!: string;
  budget!: number;
  selectedHotel: any; // Define selectedHotel property
  private apiUrl = 'http://localhost:8080/hotels';

  constructor(private bookingService: BookingService, private router: Router, private http: HttpClient) {}

  onFocus(): void {
    // Implement onFocus logic if needed
  }

  onBlur(): void {
    // Implement onBlur logic if needed
  }
  ngOnInit(): void {
    this.hotels = [
      { name: 'Ceasers', description: 'Luxury hotel', price: 250, imageUrl: 'https://lh5.googleusercontent.com/proxy/KV3lWjXrPff4BgUVIBGDCA9xDfXcsuyyHgLSYl3HeBz3NX0_oz_JumWdcVppfO3hKt2JvnAu6g-FNvdB4-TxcWDAS6rmsd_xhnNQFfGsOGssOk0p-_TnI_cSIxjZKgZa7Yw' },
      { name: 'Sandwich botique', description: 'Affordable hotel', price: 100, imageUrl: 'https://media.istockphoto.com/id/183806125/photo/dark-corridor-xxxl.jpg?s=612x612&w=0&k=20&c=hCOCVedv2BjFSnJk3VuWqTa4rKK0ay-j0GfiSxxk-tE=' },
      // Add more hotels as needed
    ];
  }
  getHotels(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      data => {
        this.hotels = data;
      },
      error => {
        console.error('Error fetching hotels:', error);
      }
    );
  }
  
  filterHotels(): void {
    this.hotels = this.hotels.filter(hotel => hotel.price <= this.budget);
  }

  selectHotel(hotel: any): void {
    this.selectedHotel = hotel;
    this.bookingService.setSelectedHotel(hotel);
  }

  proceedToPayment(): void {
    this.router.navigate(['/payment']);
  }
}
function provideHttpClient(arg0: HttpFeature<HttpFeatureKind.Fetch>): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

