import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';


import { SearchflightComponent } from './searchflight/searchflight.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { CarRentalListComponent } from './carrental/carrental.component';
import { OrdersComponent } from './orders/orders.component';



//export const routes: Routes = [];
export const routes: Routes = [
    {path: 'orders', component: OrdersComponent},

    { path: 'payment-success', component: PaymentSuccessComponent },
    { path: 'login', component: LoginComponent },
    { path: 'attraction', component: AttractionsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'hotel-list', component: HotelListComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'search-flight', component: SearchflightComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'our-story', component: OurStoryComponent},
    {path: 'the-team', component: TheTeamComponent},
    {path: 'our-mission', component: OurMissionComponent},
    {path: 'car-rental', component: CarRentalListComponent},
    { path: '**', redirectTo: 'search-flight', pathMatch: 'full' },
    {path: 'our-story', component: OurStoryComponent},
    {path: 'the-team', component: TheTeamComponent},
    {path: 'our-mission', component: OurMissionComponent},
    
  ];