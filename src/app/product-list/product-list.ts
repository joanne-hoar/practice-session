import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { CartService } from '../services/cart-service';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  cartService = inject(CartService);
  productService = inject(ProductService);
  
  allProducts = this.productService.getAllProducts();

  // This method is triggered when the child emits the event (see html template)
  receiveAddToCart(id: number) {
    const product = this.allProducts.find(p => p.id === id);
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
