
# Front End Frameworks: Module 1: Practice Activity 2

## Reusable Components and Component Communication

### Learning Objective
Demonstrate how to build reusable Angular components and enable parent-child communication using `@Input` and `@Output`.

### Prerequisites
- Complete Practice Activity 1 (Angular CLI setup)

---

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

Add a properties to the interface:
```typescript
  id: Number;
  name: string;
```

### Step 4: Set Up `@Input` in Child Component (`product-card.ts`)
```typescript
import { Component, Input } from '@angular/core';
import { Product } from '../product';
```

In ProductCard class, add an instance of the interface:
```typescript
  @Input() product!: Product; 
```

Access interface properties in the product-card.html template like this:
```html
<h3>{{ product.name }}</h3>
```

You can add an image for your product under `public/assets` folder.

### Step 5: Initialize Child from Parent Component (`product-list.ts`)

```typescript
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';  
```
In ProductList class, initialize a product:
```typescript
  aProduct: Product = {
    id: 1,
    name: "Laptop"
  };
```
Display in the product-list.html template:
```html
<app-product-card [product]="aProduct"></app-product-card>
```
For now, import the ProductList component into `app.ts` and display below the header component. We will setup routing in Practice Activiy 3. 

### Step 6: Set Up `@Output` in Child Component
Add event emission to the child:
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
```

Add a button to the ProductCard template. In `product-card.html`:
```html
   <!-- ...existing content... -->
   <button (click)="onAddToCart()">Add to Cart</button>
```

Add the emitting function to the ProductCard class. In `product-card.ts`:
```typescript
export class ProductCard {
  // ...existing code...
  onAddToCart() {
    // We'll emit an event in the next step
    alert("Add to cart clicked");
  }
}
```
### Step 7: Listen for the Custom Event in Parent Component

Example:
```typescript
// parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
    <p>Received message: {{ receivedMessage }}</p>
  `
})
export class ParentComponent {
  receivedMessage = '';

  // This method is called when the child emits the event
  receiveMessage(message: string) {
    this.receivedMessage = message; // Access the emitted data via the $event variable
  }
}```

### Step 8: Compose with Header, Footer, and Products-Home Components

Now, bring together your reusable layout components:

- You already generated the header component in Activity 1.
- Generate a footer component:
  - `ng generate component shared/footer`
- Generate the products-home component:
  - `ng generate component products-home`

In `products-home.component.html`, compose your layout:
```html
<app-header></app-header>
<!-- Main content here -->
<app-footer></app-footer>
```

This demonstrates how to compose a page from multiple reusable components, a key Angular skill.

---

**Next Steps:** Proceed to Practice Activity 3 to learn about routing and iterating a list using `@for` control flow syntax.

