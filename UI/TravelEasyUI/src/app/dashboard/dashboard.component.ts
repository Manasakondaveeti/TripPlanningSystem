import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
 
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent {

  constructor(private router: Router) {}

  goToAvailableFlights() {
    this.router.navigate(['/available-flights']);
  }
}
