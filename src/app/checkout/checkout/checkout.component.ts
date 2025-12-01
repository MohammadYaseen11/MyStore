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
  nameError = '';
  addressError = '';
  creditCardError = '';

  constructor(private cartService: CartService, private router: Router) {}

  validateName(): void {
    if (!this.name) {
      this.nameError = 'الاسم مطلوب';
    } else if (this.name.length < 3) {
      this.nameError = 'يجب أن يكون الاسم 3 أحرف على الأقل';
    } else {
      this.nameError = '';
    }
  }

  validateAddress(): void {
    if (!this.address) {
      this.addressError = 'العنوان مطلوب';
    } else if (this.address.length < 5) {
      this.addressError = 'يجب أن يكون العنوان 5 أحرف على الأقل';
    } else {
      this.addressError = '';
    }
  }

  validateCreditCard(): void {
    if (!this.creditCard) {
      this.creditCardError = 'رقم البطاقة مطلوب';
    } else if (!/^\d+$/.test(this.creditCard)) {
      this.creditCardError = 'يجب أن يحتوي رقم البطاقة على أرقام فقط';
    } else if (this.creditCard.length !== 16) {
      this.creditCardError = 'يجب أن يكون رقم البطاقة 16 رقم';
    } else {
      this.creditCardError = '';
    }
  }

  onCreditCardInput(event: any): void {
    // Only allow numbers and limit to 16 digits
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    this.creditCard = value;
    // Update the input value to reflect the filtered value
    event.target.value = value;
    this.validateCreditCard();
  }

  onSubmit(): void {
    this.validateName();
    this.validateAddress();
    this.validateCreditCard();

    if (this.nameError || this.addressError || this.creditCardError) {
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
