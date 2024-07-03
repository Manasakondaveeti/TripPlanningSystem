import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxStripeModule } from 'ngx-stripe';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule,
    RouterModule
  ],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaymentComponent implements AfterViewInit {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  flight: any;
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
    this.flight = navigation?.extras?.state?.['flight'];
  }

  ngAfterViewInit() {
    // card will be available here
  }

  confirmPayment() {
    if (this.card) {
      this.stripeService.createToken(this.card.element, { name: 'Name' }).subscribe((result) => {
        if (result.token) {
          this.http.post('http://localhost:8080/api/payment/charge', { token: result.token.id, amount: this.flight.price }).subscribe(response => {
            console.log('Payment successful', response);
          });
        } else if (result.error) {
          console.log(result.error.message);
        }
      });
    }
  }
}
