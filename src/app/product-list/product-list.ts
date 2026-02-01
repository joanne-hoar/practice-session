import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';  

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  allProducts: Product[] = [
    {
      id: 1,
      name: "Can of Beans",
      image: "can-of-beans.jpg"    
    },
    {
      id: 2,
      name: "Bag of Crisps",
      image: "bag-of-crisps.jpg"
    },
    {
      id: 3,
      name: "Gummy Bears",
      image: "gummy-bears.jpg"
    },
    {
      id: 4,
      name: "T-Shirt",
      image: "t-shirt.jpg"
    },
    {
      id: 5,
      name: "Hobo Bag",
      image: "hobo-bag.jpg"
    },
    {
      id: 6,
      name: "Shoes",
      image: "shoes.jpg",
    },
    {
      id: 7,
      name: "Shorts",
      image: "shorts.jpg"
    },
    {
      id: 8,
      name: "Postcard",
      image: "postcard.jpg"
    },
    {
      id: 9,
      name: "Pens",
      image: "pens.jpg"
    }
  ];

  countItems = 0;

  // This method is triggered when the child emits the event (see html template)
  receiveAddToCart(id: number) {
    this.countItems += 1;
    alert("Add item "+ id + ", Items in cart: " + this.countItems);
  }
}
