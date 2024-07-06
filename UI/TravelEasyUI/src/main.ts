


  import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { environment } from './environment';

import { NgxStripeModule, provideNgxStripe } from 'ngx-stripe';
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideNgxStripe(environment.stripePublicKey)
    // other providers as needed
  ]
}).catch(err => console.error(err));

