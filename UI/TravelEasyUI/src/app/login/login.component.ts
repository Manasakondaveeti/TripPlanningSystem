import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
interface LoginResponse {
  message: string;
  
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule] ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string ="";
  password: string="";

  constructor(private http: HttpClient) {}

  login() {
    const user = { username: this.username, password: this.password };
    this.http.post<LoginResponse>('http://localhost:8080/auth/login', user).subscribe({
      next: (response) => {
        alert(response.message); // Now TypeScript knows about the `message` property.
        console.log('Response:', response);
      },
      error: (error) => {
        console.error('Login error:', error);
        alert('Failed to login. Please check your credentials and try again.');
      }
    });
  }
}
