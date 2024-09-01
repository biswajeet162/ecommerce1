import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { ShippingAddressFormComponent } from './shipping-address-form/shipping-address-form.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


@NgModule({
  declarations: [
    ShippingAddressFormComponent,
    PaymentMethodComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
