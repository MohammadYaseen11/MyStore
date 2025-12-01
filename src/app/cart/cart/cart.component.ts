import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((items) => (this.items = items));
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  updateQuantity(item: CartItem, value: string): void {
    const qty = Number(value);
    this.cartService.updateQuantity(item.product.id, qty);
  }

  remove(item: CartItem): void {
    this.cartService.removeFromCart(item.product.id);
    alert('تم حذف المنتج من السلة');
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }
}
