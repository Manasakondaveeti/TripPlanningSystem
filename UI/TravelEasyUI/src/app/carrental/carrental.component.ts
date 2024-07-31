import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-car-rental-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './carrental.component.html',
  styleUrls: ['./carrental.component.css']
})
export class CarRentalListComponent implements OnInit {
  location: string = '';
  pickUpDate: string = '';
  dropOffDate: string = '';
  budget: number = 0;
  carRentals: any[] = [];
  selectedCar: any | undefined;
  private apiUrl = 'http://localhost:8080/searchCarRentals';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Initialize values if needed
  }

  searchCarRentals(): void {
    if (this.location && this.pickUpDate && this.dropOffDate && this.budget !== null) {
      let params = new HttpParams()
        .set('city', this.location)
        .set('pickUpDate', this.pickUpDate)
        .set('dropOffDate', this.dropOffDate)
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
        item: { ...car, type: 'carRental' }
      }
    };
    this.router.navigate(['/payment'], navigationExtras);
  }
}
