import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
