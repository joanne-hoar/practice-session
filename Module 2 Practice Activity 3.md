# Front End Frameworks: Module 2: Practice Activity 3

## Advanced React Patterns and Service Integration

### Learning Objectives
- Implement service layer pattern for data management
- Use Promises for asynchronous operations
- Apply useEffect hook for lifecycle management
- Manage interactive state with visual feedback

### Prerequisites
- Complete Practice Activities 1-2 (Vite setup and component hooks)

---

### Step 1: Create productService with Data

Create `src/services/productService.js` to manage product data:

```javascript
const products = [
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

class ProductService {
  getAllProducts() {
    return products;
  }

  getProductById(id) {
    return products.find(product => product.id === id);
  }
}

export default new ProductService();
```

For simplicity, showing a refactor of ProductsPage to manage and display the products, removing ProductList component as a middleman.

Integrate the service using your existing ProductList component from Activity 2.

```jsx
import { useState } from 'react';
import productService from '../services/productService';
// ... other imports ...

function ProductsPage(){
    const allProducts = productService.getAllProducts();
    // ... existing state and handlers ...

    return(
            {/** ... existing JSX ... */}
    );
}
```

### Step 2: Update productService to Return Promises

Modify your existing `src/services/productService.js` to simulate asynchronous data loading:

```javascript
// ... existing products array ...

class ProductService {
  getAllProducts() {
    // Return Promise with 2-second delay (simulates API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  }

  // ... existing getProductById method ...
}

export default new ProductService();
```

**Key Concepts:**
- Service methods return **Promises** instead of direct data
- `setTimeout()` creates a 2-second delay to simulate network latency
- This pattern prepares you for real API calls in production apps

---

### Step 3: Update ProductsPage with useEffect and Loading State

Modify `src/pages/ProductsPage.jsx` to fetch products asynchronously:

```jsx
import { useState, useEffect } from 'react';
// ... existing imports ...

function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect to fetch products on first render
    useEffect(() => {
        productService.getAllProducts()
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []); // Empty dependency array = run once on mount

    // Show loading state while fetching
    if (loading) {
        return (
            <div>
                <h2>Loading products...</h2>
            </div>
        );
    }

    return(
            {/** ... existing JSX ... */}
    );
}

export default ProductsPage;
```

**Key Concepts:**
- **`useEffect()`** hook runs after component renders
- Empty dependency array `[]` means it runs **only once** on mount
- **`.then()`** handles the Promise when data is ready
- **Loading state** provides user feedback during async operations
- **Conditional rendering** shows different UI based on loading status

---

### Step 4: Add Product Selection with Visual Feedback

Implement interactive product selection to demonstrate advanced state management and component interaction.

**Update ProductsPage.jsx** to track selected product:

```jsx
function ProductsPage(){

const [selectedId, setSelectedId] = useState(null); // Track selected product

    // ... existing code ...

    function addToCart(product) {
      // ... existing code ---
    }

    function selectProduct(product) {
        setSelectedId(product.id);
        console.log(`Selected product: ${product.name}`);
    }

    const selectedProduct = products.find(p => p.id === selectedId);

    // ... existing code ---
    return(
        <div>
            <h2>Items in cart: {totalItems}</h2>
            {selectedProduct && (
                <div className="selected-product-details">
                    <h3>{selectedProduct.name}</h3>
                    <p>{selectedProduct.description}</p>
                </div>
            )}
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard 
                        product={product}
                        onAction={addToCart}
                        onSelect={selectProduct}
                        isSelected={product.id === selectedId}
                    />
                ))}
            </div>
        </div>
    );
}
```

**Update ProductCard.jsx** for selection interaction:

```jsx
function ProductCard({product, onAction, onSelect, quantity, isSelected}) {
    return(
        <div 
            className={`product-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect && onSelect(product)}
        >
            {/** ... existing product display (h3, img) ... */}
            {quantity ? (
                <p>Quantity: {quantity}</p>
            ) : (
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent card selection when clicking button
                        onAction(product);
                    }}
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
}
```

**Add CSS for selected state** in `ProductCard.css`:

```css
.product-card {
  /* ... existing styles ... */
  cursor: pointer;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-card.selected {
  background: lightgray;
  border: 3px solid gray;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transform: scale(1.02);
}
```

---

**Next Steps:** Save all files for this activity. You now have a basic React app with routing, component interaction, and modern state management.