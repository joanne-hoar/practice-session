import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ProductsPage } from './pages/products-page/products-page';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'products', component: ProductsPage },
  { path: 'products/:id', component: ProductDetail } // New route with :id parameter
];