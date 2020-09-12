import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RootStoreModule } from './@ngrx/root-store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CartModule } from './components/carts/cart.module';
import { ProductModule } from './components/products/product.module';
import { httpInterceptorProviders } from './components/shared/interceptors';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule,
    SharedModule,
    HttpClientModule,

    AppRoutingModule,
    RootStoreModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
