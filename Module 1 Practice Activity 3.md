# Front End Frameworks: Module 1: Practice Activity 3

## Routing, Data Iteration, and Component Interaction

### Learning Outcome
Demonstrate how to implement routing, display lists with modern Angular control flow, and manage component interaction in a single-page Angular application.

---

### Step 1: Set Up Routing and Components

Continue in your `practice-session` project from Activity 2.

1. **Generate the Home Component:**
  - `ng generate component home --standalone`
2. **Generate the Products Component:**
  - `ng generate component products --standalone`
3. **Set up Routing:**
  - In `app.routes.ts`, add:
    ```typescript
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    ```

### Step 2: Home Page with Category Buttons

In `home.component.ts`:
```typescript
import { Router } from '@angular/router';

categories = ['Cookies', 'Drinks'];
constructor(private router: Router) {}
goToProducts(category: string) {
  this.router.navigate(['/products'], { queryParams: { category } });
}
```

In `home.component.html`:
```html
<h2>Welcome to the Store</h2>
<div>
  @for (category of categories; track category) {
    <button (click)="goToProducts(category)">{{ category }}</button>
  }
</div>
```

### Step 3: Products Page with Add to Cart

In `products.component.ts`:
```typescript
import { ActivatedRoute } from '@angular/router';

products = [
  { name: 'Cookie A', type: 'Cookies' },
  { name: 'Drink B', type: 'Drinks' }
];
cart: any[] = [];
selectedQuantities: { [key: string]: number } = {};
category = '';

constructor(private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {
    this.category = params['category'] || '';
  });
}

get filteredProducts() {
  return this.category ? this.products.filter(p => p.type === this.category) : this.products;
}

addToCart(product: any) {
  const qty = this.selectedQuantities[product.name] || 1;
  this.cart.push({ ...product, quantity: qty });
}

submitCart() {
  // Display or process cart
}
```

In `products.component.html`:
```html
<div *ngIf="filteredProducts.length">
  @for (product of filteredProducts; track product.name) {
    <div>
      <span>{{ product.name }}</span>
      <input type="number" min="1" [(ngModel)]="selectedQuantities[product.name]" />
      <button (click)="addToCart(product)">Add to Cart</button>
    </div>
  }
  <button (click)="submitCart()">Submit Cart</button>
</div>
<div *ngIf="cart.length">
  <h3>Cart</h3>
  <ul>
    @for (item of cart; track item.name) {
      <li>{{ item.name }} (x{{ item.quantity }})</li>
    }
  </ul>
</div>
```

### Step 4: Data Service Example
You can still create a service for products if you want to practice Angular service patterns:

```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  getProducts() {
    return [
      { id: 1, name: 'Laptop', category: 'Electronics', price: 999, inStock: true },
      { id: 2, name: 'Coffee Mug', category: 'Kitchen', price: 15, inStock: false },
      { id: 3, name: 'Book', category: 'Education', price: 25, inStock: true },
      { id: 4, name: 'Phone', category: 'Electronics', price: 599, inStock: true }
    ];
  }
}
```

### Step 5: Create Product List Component

- `ng generate component product-display`
- In `product-display.component.ts`:

```typescript
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-display',
  standalone: true,
  template: `
    <div class="products-container">
      <h2>Product Catalog</h2>
      <!-- Basic @for loop - essential for Assignment 1 -->
      @for (product of products; track product.id) {
        <div class="product-card">
          <h3>{{ product.name }}</h3>
          <p>Category: {{ product.category }}</p>
          <p>Price: ${{ product.price }}</p>
          <span *ngIf="product.inStock">In Stock</span>
          <span *ngIf="!product.inStock">Out of Stock</span>
        </div>
      }
    </div>
  `
})
export class ProductDisplayComponent implements OnInit {
  products = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
```

**Tip:** The `@for` syntax and standalone components/routes are only available in Angular 17+.

---

**Next Steps:** Save all files for this activity. You now have a basic Angular app with routing, component interaction, and modern control flow.
