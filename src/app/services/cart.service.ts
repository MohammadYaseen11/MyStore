import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];
  private items$ = new BehaviorSubject<CartItem[]>([]);

  getCart() {
    return this.items$.asObservable();
  }

  addToCart(product: Product, quantity: number = 1): void {
    const existing = this.items.find((i) => i.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
    this.items$.next([...this.items]);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.items.find((i) => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.items$.next([...this.items]);
      }
    }
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter((i) => i.product.id !== productId);
    this.items$.next([...this.items]);
  }

  clearCart(): void {
    this.items = [];
    this.items$.next([]);
  }

  getTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }
}
