import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('products', productsReducer)],
})
export class ProductsStoreModule {}
