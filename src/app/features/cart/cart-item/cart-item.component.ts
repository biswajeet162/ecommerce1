import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  items = [
    {
      name: 'Product 1',
      price: 999,
      quantity: 1,
      imageUrl: 'assets/products/f8.jpg',
    },
    {
      name: 'Product 2',
      price: 1999,
      quantity: 1,
      imageUrl: 'assets/products/f8.jpg',
    }
  ];

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: any) {
    this.items = this.items.filter(i => i !== item);
  }

  calculateSubtotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  calculateDiscount() {
    // Apply some discount logic
    return this.calculateSubtotal() * 0.1; // Example: 10% discount
  }

  calculateDeliveryCharges() {
    return this.calculateSubtotal() > 1000 ? 'Free' : '₹50';
  }

  calculateTotal() {
    const subtotal = this.calculateSubtotal();
    const discount = this.calculateDiscount();
    const delivery = this.calculateDeliveryCharges() === 'Free' ? 0 : 50;
    return subtotal - discount + delivery;
  }
}