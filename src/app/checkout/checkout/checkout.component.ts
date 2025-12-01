import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  name = '';
  address = '';
  creditCard = '';

  constructor(private cartService: CartService, private router: Router) {}

  onSubmit(): void {
    if (!this.name || !this.address || !this.creditCard) {
      alert('الرجاء تعبئة جميع الحقول');
      return;
    }

    // يمكن حفظ بيانات الطلب في خدمة منفصلة، لكن للبساطة نستخدم state
    const total = this.cartService.getTotal();
    this.cartService.clearCart();

    this.router.navigate(['/order-confirmation'], {
      state: { name: this.name, total },
    });
  }
}
