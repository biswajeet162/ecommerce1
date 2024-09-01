import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

const routes: Routes = [
  { path: '', component: CartItemComponent }, // Cart page showing all items
  { path: 'summary', component: CartSummaryComponent }, // Summary page before checkout
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
