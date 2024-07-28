import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxStripeModule } from 'ngx-stripe';
import { error } from 'node:console';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule, // Ensure NgxStripeModule is imported here
    RouterModule
  ],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaymentComponent implements AfterViewInit {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  item: any;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  constructor(private stripeService: StripeService, private http: HttpClient, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.item = navigation?.extras?.state?.['item'];
  }

  ngAfterViewInit() {
    // card will be available here
  }

  confirmPayment() {

    const departureTime = new Date(this.item.departureTime);
    const formattedDepartureTime = `${departureTime.getFullYear()}-${String(departureTime.getMonth() + 1).padStart(2, '0')}-${String(departureTime.getDate()).padStart(2, '0')} ${String(departureTime.getHours()).padStart(2, '0')}:${String(departureTime.getMinutes()).padStart(2, '0')}:${String(departureTime.getSeconds()).padStart(2, '0')}`;

    const flightOrder = {
      username: localStorage.getItem('username'),
      airline: this.item.airline,
      origin: this.item.origin,
      destination: this.item.destination,
      departureTime: formattedDepartureTime,
      price: this.item.price
   };
   console.log(flightOrder);
   this.http.post('http://localhost:8080/api/flight-orders', flightOrder).subscribe(orderResponse => {
    console.log('Flight Order Response:', orderResponse);
   }, error => {
    console.error('Error creating flight oredr:', error);
   });
    if (this.card) {
      this.stripeService.createToken(this.card.element, { name: 'Name' }).subscribe((result) => {
        if (result.token) {
          this.http.post<PaymentResponse>('http://localhost:8080/api/payment/charge', { token: result.token.id, amount: this.item.price }).subscribe(response => {
            console.log(response);
            const navigationExtras: NavigationExtras = {
              state: {
                message: response.message
              }
            };
            this.router.navigate(['/payment-success'], navigationExtras);
          });
        } else {
          console.error('Error creating token:', result.error.message);
        }
      });
    }
  }
}

export interface PaymentResponse {
  message: string;
}
