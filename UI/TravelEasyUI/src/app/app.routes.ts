import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttractionsComponent } from './attractions/attractions.component';

import { SearchflightComponent } from './searchflight/searchflight.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';


//export const routes: Routes = [];
export const routes: Routes = [
    { path: '',component: DashboardComponent },
    { path: 'payment-success', component: PaymentSuccessComponent },
    { path: 'login', component: LoginComponent },
    { path: 'attraction', component: AttractionsComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'search-flight', component: SearchflightComponent},
    {path: 'payment', component: PaymentComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
    
  ];