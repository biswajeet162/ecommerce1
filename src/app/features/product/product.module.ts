import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductSortComponent } from './product-sort/product-sort.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductReviewComponent } from './product-review/product-review.component';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductFiltersComponent,
    ProductSortComponent,
    PaginationComponent,
    NavbarComponent,
    ProductReviewComponent,

  ],
  exports:[
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  // Add FormsModule to imports array,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
