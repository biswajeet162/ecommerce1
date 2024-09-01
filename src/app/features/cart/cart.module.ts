import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    CartItemComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
