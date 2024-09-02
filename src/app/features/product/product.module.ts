import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductSortComponent } from './product-sort/product-sort.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductFiltersComponent,
    ProductSortComponent,
    PaginationComponent

  ],
  exports:[
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
