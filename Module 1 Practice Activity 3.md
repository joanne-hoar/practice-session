# Front End Frameworks: Module 1: Practice Activity 3

## Routing, Data Iteration, and Component Interaction

### Learning Outcome
Demonstrate how to implement routing, display lists with modern Angular control flow, and manage component interaction in a single-page Angular application.

---

### Step 1: Set Up Routing and Components

Continue in your `practice-session` project from Activity 2.

1. **Generate the Home Component:**
  - `ng generate component pages/home-page`
2. **Generate the Products Component:**
  - `ng generate component pages/products-page`
3. **Set up Routing:**
  - In `app.routes.ts`, add:
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

  - Edit template for `app.html` to only display header, router-outlet and footer (move other elements to other pages). 

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

Put image or message in HomePage component.

### Step 3: Products Page

Use products page to display the ProductList component.

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

- Iterate through the products list in `product-list.html` like this:

```html
<div class="products-section">
      <h2>Products</h2>
      <div class="products-grid">
        @for (aProduct of allProducts; track aProduct.id) {
          <div class="product-card">
             <!-- initialize a Product and connect event listener --> 
             <app-product-card [product]="aProduct" (addToCartEvent)="receiveAddToCart($event)"></app-product-card>            
          </div>
        }
      </div>
    </div>
```

**Tip:** The `@for` syntax and standalone components/routes are only available in Angular 17+.

---

**Next Steps:** Save all files for this activity. You now have a basic Angular app with routing, component interaction, and modern control flow.
