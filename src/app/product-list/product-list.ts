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
  aProduct: Product = {
    id: 1,
    name: "Can of Beans",
    image: "can-of-beans.jpg"
  }
    
  countItems = 0;

  // This method is triggered when the child emits the event (see html template)
  receiveAddToCart(id: number) {
    this.countItems += 1;
    alert("Add item "+ id + ", Items in cart: " + this.countItems);
  }
}
