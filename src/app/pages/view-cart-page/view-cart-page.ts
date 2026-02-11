import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { ProductCard } from '../../product-card/product-card';

@Component({
  selector: 'app-view-cart-page',
  imports: [ProductCard],
  templateUrl: './view-cart-page.html',
  styleUrl: './view-cart-page.css'
})
export class ViewCartPage {
  cartService = inject(CartService);

  removeItem(index: number): void {
    this.cartService.removeFromCart(index);
  }

  clearAll(): void {
    if (confirm('Remove all items from cart?')) {
      this.cartService.clearCart();
    }
  }
}
