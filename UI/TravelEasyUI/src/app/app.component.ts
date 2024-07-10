import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterModule, RouterOutlet , Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StayButtonComponent } from './stay-button/stay-button.component';
import { HotelsComponent } from './hotel-list/hotel-list.component';


import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardComponent,  HotelsComponent],
  imports: [CommonModule, RouterModule , DashboardComponent  , HttpClientModule

],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traveleasyUI';
}


