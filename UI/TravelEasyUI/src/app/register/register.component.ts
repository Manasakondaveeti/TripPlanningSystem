import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, RouterModule , FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  register(): void {
    this.http.post('http://localhost:8080/auth/register', this.user)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  
  }
}
