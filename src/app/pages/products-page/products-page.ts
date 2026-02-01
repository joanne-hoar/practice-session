import { Component } from '@angular/core';
import { ProductList } from '../../product-list/product-list';

@Component({
  selector: 'app-products-page',
  imports: [ProductList],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {

}
