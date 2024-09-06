import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {

  constructor(private router: Router){}

  onShopClick(){
    // You can navigate to a product detail page or perform any action here
    this.router.navigate(['products']);
  }

}
