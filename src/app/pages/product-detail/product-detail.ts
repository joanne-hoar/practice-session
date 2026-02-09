import { Component, inject, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  id = input<string>(); // Route parameter auto-bound
  productService = inject(ProductService);
  
  // Reactive product lookup
  product = computed(() => {
    const id = this.id();
    return id ? this.productService.getProductById(Number(id)) : undefined;
  });
}
