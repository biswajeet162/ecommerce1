import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


export interface Product {
  imageUrl: string;
  brand: string;
  title: string;
  rating: number;
  price: number;
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  constructor(private router: Router){}

  @Input() product!: Product;

  onProductClick(product: Product) {
    // Handle the click event for the product
    console.log('Product clicked:', product);
    // You can navigate to a product detail page or perform any action here
    this.router.navigate(['products/product-detail', product.rating]);
  }

}
