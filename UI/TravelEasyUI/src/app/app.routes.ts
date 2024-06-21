import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttractionsComponent } from './attractions/attractions.component';

//export const routes: Routes = [];
export const routes: Routes = [
    { path: '',component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'attraction', component: AttractionsComponent },
    { path: 'register', component: RegisterComponent }
  ];