import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './components/carts/cart.module';
import { OrderModule } from './components/orders/order.module';
import { ProductModule } from './components/products/product.module';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
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
