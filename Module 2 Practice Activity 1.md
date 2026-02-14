# Front End Frameworks: Module 2: Practice Activity 1

## React with Vite Project Setup

### Learning Objectives
- Set up Vite + React development environment
- Understand modern build tools and project structure
- Configure and run development server

### Prerequisites
- Node.js installed on your system

### Step 1: Create Vite + React Project
Create a project:
- `npm create vite@latest practice-session-react -- --template react`
- `cd practice-session-react`
- `npm install`
- `npm run dev`

### Step 2: Understand Vite Project Structure
Explore the project structure:
- `src/main.jsx` - Application entry point
- `src/App.jsx` - Main App component
- `src/App.css` - Global styles
- `vite.config.js` - Vite configuration
- `package.json` - Dependencies and scripts

#### The scripts section in package.json (Vite)
In a modern Vite-based React project, the `scripts` section in `package.json` typically looks like this:

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
```

These scripts run commands installed in `/node_modules/.bin`.

- `dev`: Starts the development server with hot reloading (use `npm run dev`)
- `build`: Builds the app for production (use `npm run build`)
- `preview`: Serves the production build locally for previewing (use `npm run preview`)

> Note: Unlike create-react-app, Vite does not include a `test` or `eject` script by default. You can add testing tools separately if needed.

You can add and run lint, use `npm run lint`.

### Step 3: Set Up Folder Structure
Organize a folder structure for your project, for example:

```
src/
├── components/
│   ├── common/
│   └── market/
├── pages/
└── services/
```

### Step 4: Customize App
Update `src/App.jsx` with your own content.

### Step 5: Create a Header Component in `src/components/common`

Create the new files for Header.jsx and Header.css and write a render function. You can pass properties into the function like this: 

``` jsx
import './Header.css';

function Header({(title)}) {
    return(
        <h1>{title}}</h1>
    );
}

export default Header;
```

Import the Header component into App.jsx.

```jsx
// ... existing code ...
import Header from  './components/common/Header'
import './App.css'

function App() {
  return (
    <>
      <Header title={'Every Day Market'} />
  {/** ... existing code ... */}
```

Images can be stored in the `/public` folder. You can re-use the same images and styles from Module 1 or create new styles.

### Step 6: Add Home Page and Products Page

Create components for HomePage and ProductsPage eg. `src/pages/HomePage.jsx`:

```jsx
import './ProductsPage.css'

function ProductsPage(){

    return(
        <p>Products page works!</p>
    );
}
export default ProductsPage
```

### Step 7: Routing

Install react-router-dom package:

```bash
npm install react-router-dom
```

In `src/main.jsx` use BrowserRouter.

```jsx
import { BrowserRouter } from 'react-router-dom'
// ... exisiting code ...
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

Define routing in App.jsx:

```jsx
import { Routes, Route } from 'react-router-dom';
import Products from './pages/ProductsPage';
import Home from './pages/HomePage';
// ... existing code ...
function App() {
  return (
    <>
      <Header title={'Every Day Market'} />
      <div>        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
      </div>
    </>
  )
}
```

Add navigation links, eg. in `src/componenets/Header.jsx` with Link or useNavigation:

```jsx
import { Link } from 'react-router-dom';
//... exisiting code ... 
  // in header display  
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </nav>

//... exisiting code ... 
```

---

**Next Steps:** Practice Activity 2 will cover component structure and useState/useEffect patterns.