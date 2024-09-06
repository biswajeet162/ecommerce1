import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  selectedColor: any;
  selectedImageUrl: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    
    // Fetch product details using the productId
    // Example product object with multiple colors
    this.product = {
      id: productId,
      title: 'Stylish Summer Dress',
      brand: 'Fashion Brand',
      price: 49.99,
      description: 'A beautiful summer dress perfect for any occasion.',
      rating: 4,
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Cotton',
      careInstructions: 'Machine wash cold, tumble dry low.',
      colors: [
        { name: 'Red', imageUrl: 'assets/products/n1.jpg' },
        { name: 'Blue', imageUrl: 'assets/products/n2.jpg' },
        { name: 'Green', imageUrl: 'assets/products/n3.jpg' },
        { name: 'Green', imageUrl: 'assets/products/n4.jpg' },
        { name: 'Green', imageUrl: 'assets/products/n5.jpg' },
        { name: 'Green', imageUrl: 'assets/products/n6.jpg' },
      ]
    };

    // Set the default color and image
    this.selectedColor = this.product.colors[0];
    this.selectedImageUrl = this.selectedColor.imageUrl;
  }

  selectColor(color: any) {
    this.selectedColor = color;
    this.selectedImageUrl = color.imageUrl;
  }
}
