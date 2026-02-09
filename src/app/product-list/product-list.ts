import { Component, inject, signal, computed } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { CartService } from '../services/cart-service';
import { ProductService } from '../services/product-service';
import { SearchForm, SearchCriteria } from '../search-form/search-form';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, SearchForm],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  cartService = inject(CartService);
  productService = inject(ProductService);
  
  // Signals to track search criteria
  searchKeyword = signal('');
  selectedCategory = signal('');
  
  // Computed signal - automatically recalculates when search criteria change
  filteredProducts = computed(() => {
    const keyword = this.searchKeyword().toLowerCase();
    const category = this.selectedCategory();
    
    // Get products filtered by category (or all if no category)
    let products = category 
      ? this.productService.getProductsByCategory(category)
      : this.productService.getAllProducts();
    
    // Further filter by keyword if provided
    if (keyword) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(keyword) ||
        p.description.toLowerCase().includes(keyword)
      );
    }
    
    return products;
  });

  // Called when search form emits search criteria change
  onSearchChange(criteria: SearchCriteria) {
    this.searchKeyword.set(criteria.keyword);
    this.selectedCategory.set(criteria.category);
  }

  // This method is triggered when the child emits the add to cart event
  receiveAddToCart(id: number) {
    const product = this.filteredProducts().find(p => p.id === id);
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
