import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() buyProduct: EventEmitter<Product> = new EventEmitter();

  constructor(private router: Router) {}

  onBuyProduct(): void {
    if (!this.product.bought) {
      this.buyProduct.emit(this.product);
    }
  }

  onProductDetails(): void {
    this.router.navigate(['products', 'product-details', this.product.id], {
      state: this.product,
    });
  }
}
