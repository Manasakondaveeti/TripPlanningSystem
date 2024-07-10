import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private selectedDate: Date | null = null;
  private budget: number | null = null;
  private selectedHotel: any = null;

  setSelectedDate(date: Date) {
    this.selectedDate = date;
  }

  getSelectedDate(): Date | null {
    return this.selectedDate;
  }

  setBudget(budget: number) {
    this.budget = budget;
  }

  getBudget(): number | null {
    return this.budget;
  }

  setSelectedHotel(hotel: any) {
    this.selectedHotel = hotel;
  }

  getSelectedHotel(): any {
    return this.selectedHotel;
  }
}
