# Front End Frameworks: Module 2: Practice Activity 2
## React Functional Components with Hooks

### Learning Objectives
- Create reusable functional components
- Implement custom event handlers and prop passing
- Use useState hook for state management
- Apply useEffect hook for side effects

### Prerequisites
- Complete Practice Activity 1 (Vite + React setup)

### Step 1: Create Reusable Functional Components
In your practice-session project, create ProductCard and ProductList components (`src/components/ProductCard.jsx` and `src/components/ProductList.jsx`). Initialize an array of products.

```jsx
import './ProductCard.css';

function ProductCard({product}) {

    return(
        <div>
            <h3>{product.name}</h3>
        </div>
    );
}

export default ProductCard
```

Iterate to display all components.
```jsx
  function ProductList() {
    const allProducts = [
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

    return(
      <div className="products-grid"> 
        {
            allProducts.map(product => (
                <ProductCard product={product}/>
            ))
        }
      </div>
    );
```

### Step 2: Custom Event
Add a button to ProductCard:

```jsx
function ProductCard({product}) {

  function addToCart() {
    alert(`Add ${product.name} to cart.`);
  }

  return(
      <div>
          <h3>{product.name}</h3>
          <button className="add-btn" onClick={addToCart}>Add to Cart</button>
      </div>
  );
}
```

Move the event handler to ProductList and propogate the event by passing:

```jsx
// ... exisiting code ...
function ProductCard({product, onAction}) {

    return(
            {/** ...existing code ... */}
            <button className="add-btn" onClick={() => onAction(product)}>Add to Cart</button>
            {/** ...existing code ... */}
```

```jsx
  // ... exisiting code ...
  function ProductList() {
    // ... exisiting code ...
    function addToCart(product) {
        alert(`Add ${product.name} to cart.`);
    }

    return(
      <div className="products-grid"> 
        {
            allProducts.map(product => (
                <ProductCard product={product} onAction={addToCart}/>
```

### Step 3: useState Hook (managing component state)

Manage a counter for items in cart in ProductList:

```jsx
import { useState } from 'react';
  // ... exisiting code ...
  function ProductList() {
    // ... exisiting code ...
   const [count, setCount] = useState(0)

    function addToCart(product) {
      setCount((count) => count + 1)
    }

    return(
        <>
        <h2>Items in cart: {count}</h2>
        <div className="products-grid"> 
        {
            allProducts.map(product => (
                <ProductCard product={product} onAction={addToCart}/>
```

### Step 4: (Bonus) Create Separate Header and Footer Components

You already have a `Header` component. For a footer, create `src/components/common/Footer.jsx`:

---

**Next Steps:** Practice Activity 3 will cover advanced state management, service integration, and routing in React applications.