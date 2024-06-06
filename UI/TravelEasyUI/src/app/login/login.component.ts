
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(data => {
      console.log('Login successful');
      // Redirect or manage login success here
    }, error => {
      console.error('Login failed');
      // Handle login failure here
    });
  }
}
