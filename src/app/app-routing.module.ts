import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './component/cart/cart.component';
import { BebidasComponent } from './component/bebidas/bebidas.component';
import { HomeComponent } from './component/home/home.component';
import { ComidasComponent } from './component/comidas/comidas.component';
import { OnboardingScreenComponent } from './component/onboarding-screen/onboarding-screen.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "pedidos", component: ProfileComponent},
  {path: "menu/bebidas", component: BebidasComponent},
  {path: "menu/comidas", component: ComidasComponent},
  {path: "carrito", component: CartComponent},
  {path: "welcome", component: OnboardingScreenComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
