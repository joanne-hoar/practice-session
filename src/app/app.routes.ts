import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ProductsPage } from './pages/products-page/products-page';
import { ViewCartPage } from './pages/view-cart-page/view-cart-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'products', component: ProductsPage },
  { path: 'cart', component: ViewCartPage }
];