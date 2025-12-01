import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent {
  customerName = '';
  total = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as
      | { name?: string; total?: number }
      | undefined;
    this.customerName = state?.name ?? '';
    this.total = state?.total ?? 0;
  }

  backToStore(): void {
    this.router.navigate(['/']);
  }
}
