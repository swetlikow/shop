import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProcessOrderComponent } from './components/order/process-order/process-order.component';
import { ProductsComponent } from './components/products/products/products.component';
import { AuthGuard } from './components/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'order',
    component: ProcessOrderComponent,
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
