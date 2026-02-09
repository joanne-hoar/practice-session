import { Injectable, signal } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSignal = signal<Product[]>([
    {
      id: 1,
      name: "Can of Beans",
      image: "can-of-beans.jpg",
      category: "grocery",
      description: "Full of magical moments, this can of beans could be yours!"
    },
    {
      id: 2,
      name: "Bag of Crisps",
      image: "bag-of-crisps.jpg",
      category: "grocery",
      description: "That should say chips. Any flavour you want."
    },
    {
      id: 3,
      name: "Gummy Bears",
      image: "gummy-bears.jpg",
      category: "grocery",
      description: "Be sure to specify quantity as we have too many and will send you a lot."
    },
    {
      id: 4,
      name: "T-Shirt",
      image: "t-shirt.jpg",
      category: "clothing",
      description: "Wear this t-shirt and you will have good luck."
    },
    {
      id: 5,
      name: "Hobo Bag",
      image: "hobo-bag.jpg",
      category: "clothing",
      description: "Fits everything you need."
    },
    {
      id: 6,
      name: "Shoes",
      image: "shoes.jpg",
      category: "clothing",
      description: "Shown one, comes in pairs."
    },
    {
      id: 7,
      name: "Shorts",
      image: "shorts.jpg",
      category: "clothing",
      description: "Complete the look."
    },
    {
      id: 8,
      name: "Postcard",
      image: "postcard.jpg",
      category: "stationary",
      description: "Let them know that you're thinking of them."
    },
    {
      id: 9,
      name: "Pens",
      image: "pens.jpg",
      category: "stationary",
      description: "Contains ink."
    }
  ]);

  // Read-only signal for components to access
  products = this.productsSignal.asReadonly();

  // Get all products
  getAllProducts(): Product[] {
    return this.productsSignal();
  }

  // Get product by ID
  getProductById(id: number): Product | undefined {
    return this.productsSignal().find(p => p.id === id);
  }

  // Get products by category
  getProductsByCategory(category: string): Product[] {
    if (!category) {
      return this.getAllProducts();
    }
    return this.productsSignal().filter(p => p.category === category);
  }
}
