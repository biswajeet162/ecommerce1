import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css'
})
export class ProductReviewComponent implements OnInit {
  

  reviews: any;

  @Input() product_review_id: number | undefined; 

  
  ngOnInit(): void {
    this.reviews =  [
      { name: 'Jane Doe', rating: 5, text: 'Absolutely love this dress!', date: '2024-09-01' },
      { name: 'John Smith', rating: 4, text: 'Great quality, but a bit tight.', date: '2024-08-20' },
      { name: 'Jane Doe', rating: 5, text: 'Absolutely love this dress!', date: '2024-09-01' },
      { name: 'John Smith', rating: 4, text: 'Great quality, but a bit tight.', date: '2024-08-20' },
      { name: 'Jane Doe', rating: 5, text: 'Absolutely love this dress!', date: '2024-09-01' },
      { name: 'John Smith', rating: 4, text: 'Great quality, but a bit tight.', date: '2024-08-20' },
      { name: 'Jane Doe', rating: 5, text: 'Absolutely love this dress!', date: '2024-09-01' },
      { name: 'John Smith', rating: 4, text: 'Great quality, but a bit tight.', date: '2024-08-20' },
      { name: 'Jane Doe', rating: 5, text: 'Absolutely love this dress!', date: '2024-09-01' },
      { name: 'John Smith', rating: 4, text: 'Great quality, but a bit tight.', date: '2024-08-20' },
      { name: 'Jane Doe', rating: 5, text: 'Absolutely love this dress!', date: '2024-09-01' },
      { name: 'John Smith', rating: 4, text: 'Great quality, but a bit tight.', date: '2024-08-20' },
      { name: 'Jane Doe', rating: 5, text: 'Absolutely love this dress!', date: '2024-09-01' },
      { name: 'John Smith', rating: 4, text: 'Great quality, but a bit tight.', date: '2024-08-20' },
      { name: 'Jane Doe', rating: 5, text: 'Absolutely love this dress!', date: '2024-09-01' },
      { name: 'John Smith', rating: 4, text: 'Great quality, but a bit tight.', date: '2024-08-20' }
    ]
  }

}
