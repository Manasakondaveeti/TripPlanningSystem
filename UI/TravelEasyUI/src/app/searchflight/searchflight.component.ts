import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-searchflight',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent {
  origin: string = '';
  destination: string = '';
  flights: any[] = [];
  private apiUrl = 'http://localhost:8080/searchFlights';

  constructor(private http: HttpClient, private router: Router) {}

  onFocus(): void {
    // Implement onFocus logic if needed
  }

  onBlur(): void {
    // Implement onBlur logic if needed
  }

  
  searchFlights(): void {
    console.log(this.origin);
    console.log(this.destination);
    let params = new HttpParams()
      .set('origin', this.origin)
      .set('destination', this.destination);

    this.http.get<any[]>(this.apiUrl, { params }).subscribe(data => {
      this.flights = data;
      console.log(this.flights.length);
    });
  }

  goToPayment(flight: any): void {
    const navigationExtras: NavigationExtras = {
      state: {
        flight: flight
      }
    };
    this.router.navigate(['/payment'], navigationExtras);
  }
}
