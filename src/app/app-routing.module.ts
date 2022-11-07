import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

const routes: Routes = [
  {path: "home", component: DashboardComponent, 
  children: [
    {path: "menu", component: MenuComponent},
    {path: "", component: HomeComponent},

  ]
},
{path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
