import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [CartComponent, CartListComponent],
  exports: [CartListComponent],
  imports: [CommonModule, SharedModule]
})
export class CartModule { }
