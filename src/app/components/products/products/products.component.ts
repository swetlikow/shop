import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartListService } from '../../carts/cart-list.service';
import { ProductsService } from '../../products/products.service';
import { Product } from '../product/product';
import { AppState } from './../../../@ngrx';
import {
  selectProductsData,
  selectProductsError,
} from './../../../@ngrx/products/';
import * as ProductsActions from './../../../@ngrx/products/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  showBoughtProducts: boolean;
  boughtProducts: Product[] = [];
  boughtProductsQuantity: number;
  boughtProductsSum: number;
  order: boolean;
  productsError$: Observable<Error | string>;

  constructor(
    private cartListService: CartListService,
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    console.log('We have a store! ', this.store);

    // this.products$ = this.productsService.getProductsFromDb();
    this.products$ = this.store.pipe(select(selectProductsData));
    this.productsError$ = this.store.pipe(select(selectProductsError));
    this.store.dispatch(ProductsActions.getProducts());
  }

  onBuyProduct(product: Product): void {
    this.showBoughtProducts = true;
    this.cartListService.addBoughtProduct(product);
    this.boughtProducts = this.cartListService.getBoughtProduct();
    this.boughtProductsQuantity = this.cartListService.getBoughtProductsQuantity();
    this.boughtProductsSum = this.cartListService.getBoughtProductsSum();
    this.store.dispatch(
      ProductsActions.buyProduct({ product: { ...product } })
    );
  }

  onRemoveProduct(product: Product): void {
    this.cartListService.removeBoughtProduct(product);
    this.boughtProducts = this.cartListService.getBoughtProduct();
    this.boughtProductsQuantity = this.cartListService.getBoughtProductsQuantity();
    this.boughtProductsSum = this.cartListService.getBoughtProductsSum();

    this.productsService
      .addProductToDb(product)
      .then(() => (this.products$ = this.productsService.getProductsFromDb()))
      .catch((err) => console.log(err));

    if (this.boughtProducts.length === 0) {
      this.showBoughtProducts = false;
    }
  }

  onToggleProductsOrder(value: boolean): void {
    this.order = value;
  }
}
