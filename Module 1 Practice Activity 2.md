
# Front End Frameworks: Module 1: Practice Activity 2

## Reusable Components, Interfaces and Component Communication

### Learning Objective
Demonstrate how to build reusable Angular components and enable parent-child communication using `@Input` and `@Output`.

### Prerequisites
- Complete Practice Activity 1 (Angular CLI setup)

### Step 1: Create Parent Component
In your practice-session project:
- `ng generate component product-list`
- This will be our parent component managing product data

### Step 2: Create Child Component
- `ng generate component product-card`
- This will display individual product information

### Step 3: Generate an Interface for Product info
- `ng generate interface product`
- This will create a data structure to hold product information

Add properties to the interface:
```typescript
export interface Product {
    id: number;
    name: string;
}
```

### Step 4: Set Up `@Input` in Child Component (`product-card.ts`)
Import Input from Angular and the interface:
```typescript
import { Component, Input } from '@angular/core';
import { Product } from '../product';
```

In ProductCard class, add an instance of the interface:
```typescript
// ...existing code...
export class ProductCard {

  @Input() product!: Product; 
// ...existing code...  
```

Access interface properties in the product-card.html template. Display as text using interpolation syntax like this {{}}:
```html
<h3>{{ product.name }}</h3>
```

You can add an image for your product under `public/assets/products` folder. Use square brackets for property binding like this []:
```html
<img [src]="'assets/products/' + product.image" [alt]="product.name" />
```    

### Step 5: Initialize Child from Parent Component (`product-list.ts`)

Import the child component and interface:
```typescript
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';  
```

In ProductList class, initialize a product:
```typescript
// ...existing code...  
export class ProductList {
  
  aProduct: Product = {
    id: 1,
    name: "Laptop"
  };
  // ...existing code...  
```

Display the product card in the product-list.html template:
```html
<div class="products-section">
  <h2>Products</h2>
  <app-product-card [product]="aProduct"></app-product-card>
</div>
```

For now, import the ProductList component into `app.ts` and display below the header component. We will setup routing in Practice Activity 3. 

### Step 6: Set Up `@Output` in Child Component

Add a button to the ProductCard template. In `product-card.html`:
```html
   <!-- ...existing content... -->
   <button (click)="onAddToCart()">Add to Cart</button>
```

Define an output property with EventEmitter and emit the event with data in `product-card.ts`:
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
// ...existing code...
export class ProductCard {
  // ...existing code...
  @Output() addToCartEvent = new EventEmitter<number>();

  // This method is invoked when the button is clicked
  onAddToCart() {
    this.addToCartEvent.emit(this.product.id);
  }
}
```

### Step 7: Listen for the Custom Event in Parent Component

In `product-list.ts`:
```typescript
// ...existing code...
export class ProductList {
  // ...existing code...
  countItems = 0;

  // This method is invoked when the child emits the event
  receiveAddToCart(id: number) {
    this.countItems += 1;
    alert("Add item "+ id + ", Items in cart: " + this.countItems);
  }
}
```

Connect the event listener in `product-list.html`:
```html
<app-product-card [product]="aProduct" (addToCartEvent)="receiveAddToCart($event)"></app-product-card>
```

This demonstrates how to compose a page from multiple reusable components, a key Angular skill.

**Key Concepts:**
- `@Input()` decorator passes data from parent to child components
- `@Output()` with EventEmitter sends events from child to parent components
- Interfaces define reusable, type-safe data structures
- Component composition creates modular, maintainable UIs
- Property binding `[property]` sets input values, event binding `(event)` listens for outputs

---

**Next Steps:** Proceed to Practice Activity 3 to learn about routing and iterating a list using `@for` control flow syntax.

