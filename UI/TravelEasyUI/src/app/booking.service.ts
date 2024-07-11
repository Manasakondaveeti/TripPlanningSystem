import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  getSelectedDateAsString(): string | null {
    throw new Error('Method not implemented.');
  }
  private selectedDate: string = "";
  private budget!: number;
  private selectedHotel: any = null;

  setSelectedDate(date: Date) {
    this.selectedDate = date.toISOString().split('T')[0];;
  }

  getSelectedDate(): string {
    return this.selectedDate;
  }
  setBudget(budget: number) {
    this.budget = budget;
  }

  getBudget(): number {
   return this.budget;
  }

  setSelectedHotel(hotel: any) {
    this.selectedHotel = hotel;
  }

  getSelectedHotel(): any {
    return this.selectedHotel;
  }
}
