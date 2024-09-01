import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { CategoryTilesComponent } from './category-tiles/category-tiles.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ShoppingFacilitiesComponent } from './shopping-facilities/shopping-facilities.component';

const routes: Routes = [
  { path: '', component: HeroBannerComponent }, // Default route for homepage
  { path: 'categories', component: CategoryTilesComponent },
  { path: 'featured', component: FeaturedProductsComponent },
  { path: 'shopping-facility', component: ShoppingFacilitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
