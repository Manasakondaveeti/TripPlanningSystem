// stay-button.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-stay-button',
  template: `<button (click)="goToHotelList()">Stay</button>`
})
export class StayButtonComponent {
  constructor(private bookingService: BookingService, private router: Router) { }

  goToHotelList() {
    const selectedDate = new Date(); // Replace with actual selected date
    const budget = 200; // Replace with actual budget

    this.bookingService.setSelectedDate(selectedDate);
    this.bookingService.setBudget(budget);
    this.router.navigate(['/hotel-list']);
  }
}
