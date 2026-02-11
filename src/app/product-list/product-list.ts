import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../services/cart-service';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  cartService = inject(CartService);
  productsDataService = inject(ProductsDataService);

  // This method is triggered when the child emits the event (see html template)
  receiveAddToCart(id: number) {
    const product = this.productsDataService.getProductById(id);
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
