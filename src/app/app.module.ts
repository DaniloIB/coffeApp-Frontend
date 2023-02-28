import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BebidasComponent } from './component/bebidas/bebidas.component';
import { DescriptionComponent } from './component/description/description.component';
import { CartComponent } from './component/cart/cart.component';
import { CardsComponent } from './component/cards/cards.component';
import { TabBarComponent } from './component/tab-bar/tab-bar.component';
import { SliderComponent } from './component/slider/slider.component';
import { ComidasComponent } from './component/comidas/comidas.component';
import { ProductsComponent } from './component/products/products.component';
import { CartCardsProductComponent } from './component/cart-cards-product/cart-cards-product.component';
import { OnboardingScreenComponent } from './component/onboarding-screen/onboarding-screen.component';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BebidasComponent,
    DescriptionComponent,
    CartComponent,
    CardsComponent,
    TabBarComponent,
    SliderComponent,
    ComidasComponent,
    ProductsComponent,
    CartCardsProductComponent,
    OnboardingScreenComponent,
    ProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
