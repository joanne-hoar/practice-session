import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<Product[]>([]);
  itemCount = computed(() => this.items().length);

  addToCart(product: Product): void {
    this.items.set([...this.items(), product]);
  }

  removeFromCart(index: number): void {
    this.items.update(items => items.filter((_, i) => i !== index));
  }

  clearCart(): void {
    this.items.set([]);
  }
}
