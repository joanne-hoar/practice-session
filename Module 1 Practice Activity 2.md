
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

### Step 3: Set Up `@Input` in Child Component (`product-card.component.ts`)
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div class="product-card">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <button (click)="onAddToCart()">Add to Cart</button>
    </div>
  `
})
export class ProductCardComponent {
  @Input() product: any; // Receives data from parent
  
  onAddToCart() {
    // We'll emit an event in the next step
  }
}
```

### Step 4: Set Up `@Output` in Child Component
Add event emission to the child:
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
// ...
```

### Step 5: Compose with Header, Footer, and Products-Home Components

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

