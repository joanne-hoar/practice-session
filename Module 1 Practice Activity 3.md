# Front End Frameworks: Module 1: Practice Activity 3

## Routing, Data Iteration, and Services

### Learning Outcome
Demonstrate how to implement routing, display lists with modern Angular control flow, and manage data services in a single-page Angular application.

---

### Step 1: Set Up Routing and Components

Continue in your `practice-session` project from Activity 2.

1. **Generate the Home Component:**
  - `ng generate component pages/home-page`

2. **Generate the Products Component:**
  - `ng generate component pages/products-page`

3. **Set up Routing:**
  - In `app.routes.ts`, import the new components and add them to routes array:
    ```typescript
    import { Routes } from '@angular/router';
    import { HomePage } from './pages/home-page/home-page';
    import { ProductsPage } from './pages/products-page/products-page';

    export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'products', component: ProductsPage }
    ];
    ```

  - Edit template for `app.html` to only display header, router-outlet and footer (move other elements to other pages). Note: you may define an Input property to pass title to the header. Eg.:
    ```html
    <app-header [title]="title()"></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    ```

  - Update nav links in `header.html`:
    
    ```html
        <a class="button" routerLink="/home" routerLinkActive="activebutton">Home</a>
        <a class="button" routerLink="/products" routerLinkActive="activebutton">Products</a>
    ```

- Update imports in `header.ts`:
  ```typescript
  import { RouterLink, RouterLinkActive } from '@angular/router';
    // ... existing code ...
    imports: [RouterLink, RouterLinkActive],
    // ... existing code ...
  ```
- Update the styles in `header.css` to show active button etc.

### Step 2: Home Page

Design the HomePage component.

### Step 3: Products Page

Design products page to display the ProductList component.

- Initialize a list of products in `product-list.ts`:

``` typescript
    allProducts: Product[] = [
    {
      id: 1,
      name: "Laptop"   
    },
    {
      id: 2,
      name: "Tablet"
    }
    // ... more products ...
    ];
```

- Iterate through the products list in `product-list.html` with `@for` like this:

```html
<div class="products-section">
      <h2>Products</h2>
      <div class="products-grid">
        <!-- use @for to iterate over array of products -->
        @for (aProduct of allProducts; track aProduct.id) {
          <div class="product-card">
             <!-- initialize a Product and connect event listener --> 
             <app-product-card [product]="aProduct" (addToCartEvent)="receiveAddToCart($event)"></app-product-card>            
          </div>
        }
      </div>
    </div>
```

- Use styles in `product-list.css` to format a grid layout.

**Tip:** The `@for` syntax and standalone components/routes are only available in Angular 17+.

---

### Step 4: Cart Service Demo

Implement a shopping cart service to manage product selections.

- `ng generate service services/cart-service`
   
- Create `cart-service.ts` in the services folder with:
   
   ```typescript
   import { Injectable, signal } from '@angular/core';
   import { Product } from '../product';

   @Injectable({
     providedIn: 'root',
   })
   export class CartService {
     items = signal<Product[]>([]);

     addToCart(product: Product): void {
       this.items.set([...this.items(), product]);
     }
   }
   ```

  - In `product-list.ts`, import and inject the CartService:
   
   ```typescript
   import { Component, inject } from '@angular/core';
   import { CartService } from '../services/cart-service';

   export class ProductList {
     cartService = inject(CartService);

     receiveAddToCart(id: number) {
       const product = this.allProducts.find(p => p.id === id);
       if (product) {
         this.cartService.addToCart(product);
       }
     }
   }
   ```

### Step 5: Display Cart Count
   - In `products-page.ts`, inject the CartService:
   
   ```typescript
   import { Component, inject } from '@angular/core';
   import { CartService } from '../../services/cart-service';

   export class ProductsPage {
     cartService = inject(CartService);
   }
   ```
   
   - Update `products-page.html` to show the cart count:
   
   ```html
    <h2>Products</h2>
    <p>Items in cart: {{ cartService.items().length }}</p>
    <app-product-list></app-product-list>
   ```

**Key Concepts:**
- Services with `@Injectable` provide singleton instances across the app
- The `inject()` function is the modern way to inject dependencies
- Signals provide reactive state management that updates the UI automatically

---

**Next Steps:** Save all files for this activity. You now have a basic Angular app with routing, component interaction, and modern control flow.
