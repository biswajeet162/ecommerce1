import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingAddressFormComponent } from './shipping-address-form/shipping-address-form.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: '', component: ShippingAddressFormComponent }, // Default step: enter shipping address
  { path: 'payment', component: PaymentMethodComponent }, // Enter payment details
  { path: 'summary', component: OrderSummaryComponent }, // Review order before placing
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
