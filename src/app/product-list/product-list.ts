import { Component, inject, signal, computed } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { CartService } from '../services/cart-service';
import { ProductService } from '../services/product-service';
import { SearchForm } from '../search-form/search-form';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, SearchForm],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  cartService = inject(CartService);
  productService = inject(ProductService);
  
  // Signal to track selected category
  selectedCategory = signal('');
  
  // Computed signal - automatically recalculates when selectedCategory changes
  filteredProducts = computed(() => {
    const category = this.selectedCategory();
    return category 
      ? this.productService.getProductsByCategory(category)
      : this.productService.getAllProducts();
  });

  // Called when search form emits category change
  onCategoryChange(category: string) {
    this.selectedCategory.set(category);
  }

  // This method is triggered when the child emits the add to cart event
  receiveAddToCart(id: number) {
    const product = this.filteredProducts().find(p => p.id === id);
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
