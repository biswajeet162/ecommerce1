import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { CategoryTilesComponent } from './category-tiles/category-tiles.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ShoppingFacilitiesComponent } from './shopping-facilities/shopping-facilities.component';
import { ProductModule } from '../product/product.module';
import { ProductListComponent } from '../product/product-list/product-list.component';


@NgModule({
  declarations: [HeroBannerComponent, CategoryTilesComponent, FeaturedProductsComponent, ShoppingFacilitiesComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ProductModule
  ],
  exports:[
    FeaturedProductsComponent
  ]
})
export class HomepageModule { }
