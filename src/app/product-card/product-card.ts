import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})

export class ProductCard {

  @Input() product!: Product; 

  @Output() addToCartEvent = new EventEmitter<number>();

  // This method is triggered on button click (see html template)
  onAddToCart() {
    this.addToCartEvent.emit(this.product.id);
  }
}

