import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { CartItemComponent } from './features/cart/cart-item/cart-item.component';
import { LoginComponent } from './features/user/login/login.component';
import { RegisterComponent } from './features/user/register/register.component';
import { HeroBannerComponent } from './features/homepage/hero-banner/hero-banner.component';
import { ProductItemComponent } from './features/product/product-list/product-item/product-item.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartItemComponent,
    LoginComponent,
    RegisterComponent,
    HeroBannerComponent,
    ProductItemComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
