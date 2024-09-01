import { Component, Input } from '@angular/core';


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

  @Input() product!: Product;

}
