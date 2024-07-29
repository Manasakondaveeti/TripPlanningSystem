import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api';

  getFlightOrdersByUsername(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/flight-orders/${username}`);
  }

  flightOrders: any[] = [];
  username: string | null = localStorage.getItem('username');
  noOrdersMessage: string = '';

  ngOnInit(): void {
    if (this.username) {
      this.getFlightOrdersByUsername(this.username).subscribe(
        (data) => {
          if (data) {
            this.flightOrders = [data];
            console.log(this.flightOrders);
          } else {
            this.noOrdersMessage = 'No flight orders found. Please book a flight.';
          }
        },
        (error) => {
          console.error('Error fetching flight orders:', error);
          this.noOrdersMessage = 'An error occurred while fetching flight orders. Please try again later.';
        }
      );
    } else {
      this.noOrdersMessage = 'User not logged in. Please log in to view flight orders.';
    }
  }
}
