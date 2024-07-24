import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-car-rental-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  templateUrl: './carrental.component.html',
  styleUrls: ['./carrental.component.css']
})
export class CarRentalListComponent implements OnInit {
  selectedDate: string = '';
  budget: number = 0;
  carRentals: any[] = [];
  selectedCar: any | undefined;
  private apiUrl = 'http://localhost:8080/searchCarRentals';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.selectedDate = ''; // Initialize selected date
    this.budget = 0; // Initialize budget
    this.searchCarRentals(); // Fetch car rentals based on selectedDate and budget
  }

  searchCarRentals(): void {
    if (this.selectedDate && this.budget !== null) {
      let params = new HttpParams()
        .set('date', this.selectedDate)
        .set('budget', this.budget.toString());

      this.http.get<any[]>(this.apiUrl, { params }).subscribe(data => {
        this.carRentals = data;
      });
    } else {
      this.carRentals = [];
    }
  }

  selectCar(car: any): void {
    this.selectedCar = car;
  }

  goToPayment(car: any): void {
    const navigationExtras: NavigationExtras = {
      state: {
        car: car
      }
    };
    this.router.navigate(['/payment'], navigationExtras);
  }
}
