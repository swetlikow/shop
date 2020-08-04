import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CartModule } from './components/cart/cart.module';
import { OrderModule } from './components/orders/order.module';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductModule } from './components/products/product.module';
import { ProductComponent } from './components/products/product/product.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        ProductListComponent,
        CartListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        ProductModule,
        OrderModule,
        CartModule,
        SharedModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
