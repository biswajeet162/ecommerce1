import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { CategoryTilesComponent } from './category-tiles/category-tiles.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';


@NgModule({
  declarations: [HeroBannerComponent, CategoryTilesComponent, FeaturedProductsComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
