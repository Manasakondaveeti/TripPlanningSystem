import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BookingService } from '../booking.service'; // Adjust the path as necessary

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  hotels: any[] = [];
  selectedDate: Date | null = null;
  budget: number | null = null;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.selectedDate = this.bookingService.getSelectedDate();
    this.budget = this.bookingService.getBudget();
    this.loadHotels();
  }

  loadHotels() {
    this.hotels = [
      { id: 1, name: 'Hotel A', price: 100 },
      { id: 2, name: 'Hotel B', price: 150 },
    ].filter(hotel => hotel.price <= (this.budget || 0));
  }

  selectHotel(hotel: any) {
    this.bookingService.setSelectedHotel(hotel);
    this.router.navigate(['/payment']);
  }
}
