import { Component } from '@angular/core';


export interface Product {
  imageUrl: string;
  brand: string;
  title: string;
  rating: number;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      imageUrl: 'assets/products/f1.jpg',
      brand: 'adidas',
      title: 'Cartoon Astronaut T-Shirts',
      rating: 5,
      price: 76
    },
    {
      imageUrl: 'assets/products/f2.jpg',
      brand: 'Nike',
      title: 'Sporty Sneakers',
      rating: 4,
      price: 120
    },
    {
      imageUrl: 'assets/products/f3.jpg',
      brand: 'Puma',
      title: 'Running Shoes',
      rating: 4,
      price: 95
    },
    {
      imageUrl: 'assets/products/f4.jpg',
      brand: 'Reebok',
      title: 'Fitness T-Shirts',
      rating: 5,
      price: 60
    },
    {
      imageUrl: 'assets/products/f5.jpg',
      brand: 'Under Armour',
      title: 'Gym Shorts',
      rating: 3,
      price: 50
    },
    {
      imageUrl: 'assets/products/f6.jpg',
      brand: 'adidas',
      title: 'Classic Caps',
      rating: 4,
      price: 35
    },
    {
      imageUrl: 'assets/products/f7.jpg',
      brand: 'Nike',
      title: 'Training Jackets',
      rating: 5,
      price: 110
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f1.jpg',
      brand: 'adidas',
      title: 'Cartoon Astronaut T-Shirts',
      rating: 5,
      price: 76
    },
    {
      imageUrl: 'assets/products/f2.jpg',
      brand: 'Nike',
      title: 'Sporty Sneakers',
      rating: 4,
      price: 120
    },
    {
      imageUrl: 'assets/products/f3.jpg',
      brand: 'Puma',
      title: 'Running Shoes',
      rating: 4,
      price: 95
    },
    {
      imageUrl: 'assets/products/f4.jpg',
      brand: 'Reebok',
      title: 'Fitness T-Shirts',
      rating: 5,
      price: 60
    },
    {
      imageUrl: 'assets/products/f5.jpg',
      brand: 'Under Armour',
      title: 'Gym Shorts',
      rating: 3,
      price: 50
    },
    {
      imageUrl: 'assets/products/f6.jpg',
      brand: 'adidas',
      title: 'Classic Caps',
      rating: 4,
      price: 35
    },
    {
      imageUrl: 'assets/products/f7.jpg',
      brand: 'Nike',
      title: 'Training Jackets',
      rating: 5,
      price: 110
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    },
    {
      imageUrl: 'assets/products/f8.jpg',
      brand: 'Puma',
      title: 'Sports Backpack',
      rating: 4,
      price: 80
    }
  ];

}
