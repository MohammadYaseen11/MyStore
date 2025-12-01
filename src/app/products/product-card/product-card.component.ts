import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() quantity: number = 1;
  @Output() addToCartEvent = new EventEmitter<{
    product: Product;
    quantity: number;
  }>();
  @Output() viewDetailsEvent = new EventEmitter<Product>();
  @Output() quantityChangeEvent = new EventEmitter<{
    productId: number;
    quantity: number;
  }>();

  onAddToCart(): void {
    this.addToCartEvent.emit({
      product: this.product,
      quantity: this.quantity,
    });
  }

  onViewDetails(): void {
    this.viewDetailsEvent.emit(this.product);
  }

  onQuantityChange(value: any): void {
    const newQuantity = Number(value);
    this.quantity = newQuantity;
    this.quantityChangeEvent.emit({
      productId: this.product.id,
      quantity: newQuantity,
    });
  }
}
