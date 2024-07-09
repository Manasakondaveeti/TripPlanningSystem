import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  standalone:true,
  imports: [
  CommonModule , FormsModule],
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {
  
  @Input() message: string = '';
  isSuccess: boolean = true;
  showStatus: boolean = true;
  statusMessage: string = '';
  actionButtonText: string = '';
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.message = navigation?.extras?.state?.['message'];
  }

  ngOnInit(): void {
    this.isSuccess = this.message.toLowerCase().includes('success');
    if (this.isSuccess) {
      this.statusMessage = 'We are delighted to inform you that we received your payment.';
      this.actionButtonText = 'CONTINUE';
    } else {
      this.statusMessage = 'Unfortunately we have an issue with your payment, try again later.';
      this.actionButtonText = 'TRY AGAIN';
    }
  }

  closeStatus(): void {
    this.showStatus = false;
    this.router.navigate(['/dashboard']); 
  }

  onActionButtonClick(): void {
    if (this.isSuccess) {
      // Handle success action, e.g., navigate to dashboard
      this.router.navigate(['/dashboard']); 
    } else {
      this.router.navigate(['/search-flight']); 
      // Handle error action, e.g., retry payment
    }
  }
}
