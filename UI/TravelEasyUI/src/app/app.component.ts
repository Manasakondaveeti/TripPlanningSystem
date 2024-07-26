import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet , Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule , DashboardComponent  , FormsModule

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'traveleasyUI';
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('token');
  }
  return false;
}

logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
}

}

navigateToOrders(): void {
  console.log('Navigating to orders');
  this.router.navigate(['/orders']);
}
}
