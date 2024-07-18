import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HotelListComponent } from './hotel-list/hotel-list.component'; // Correct import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardComponent, HotelListComponent],
  


  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traveleasyUI';
}


