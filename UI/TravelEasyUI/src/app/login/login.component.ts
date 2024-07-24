import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
interface LoginResponse {
  token: string;
  message: string;
  
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , HttpClientModule,CommonModule ] ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string ="";
  password: string="";
  loginError: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const user = { username: this.username, password: this.password };
    this.http.post<LoginResponse>('http://localhost:8080/auth/login', user).subscribe({
      next: (response) => {
        console.log(response);
        if (response.token === 'success') {

          console.log("success");
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
      } else {
          this.loginError = true;
      }
      },
      error: (error) => {
        console.error('Login error:', error);
        alert('Failed to login. Please check your credentials and try again.');
      }
    });
  }
}