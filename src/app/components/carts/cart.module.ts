import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
    declarations: [CartComponent, CartListComponent],
    exports: [CartComponent, CartListComponent],
    imports: [
        CommonModule
    ]
})
export class CartModule { }
