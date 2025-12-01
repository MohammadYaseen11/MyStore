import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  quantities: { [id: number]: number } = {};

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      products.forEach((p) => (this.quantities[p.id] = 1));
    });
  }

  viewDetails(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

  addToCart(product: Product): void {
    const qty = this.quantities[product.id] || 1;
    this.cartService.addToCart(product, qty);
    alert('تمت إضافة المنتج إلى السلة');
  }
}
