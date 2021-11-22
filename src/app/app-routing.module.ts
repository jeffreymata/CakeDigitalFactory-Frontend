import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () =>
  import( './login/login.module').then(
  (m) => m.LoginPageModule
  ), },
  {
     path:'*/:user', component: AppComponent
  },
  { path: 'home', loadChildren: () =>
  import( './home/home.module').then(
  (m) => m.HomePageModule
  ), },
  { path: 'profile', loadChildren: () =>
  import( './profile/profile.module').then(
  (m) => m.ProfilePageModule
  ), },
  { path: 'restaurant', loadChildren: () =>
  import( './restaurant/restaurant.module').then(
  (m) => m.RestaurantPageModule
  ), },
  { path: 'signup', loadChildren: () =>
  import( './signup/signup.module').then(
  (m) => m.SignupPageModule
  ), },
  { path: 'add-restaurant', loadChildren: () =>
  import( './restaurant/add-restaurant/add-restaurant.module').then(
  (m) => m.AddRestaurantPageModule
  ), },
  { path: 'update-restaurant', loadChildren: () =>
  import( './restaurant/update-restaurant/update-restaurant.module').then(
  (m) => m.UpdateRestaurantPageModule
  ), },{
    path: 'menu', loadChildren: () => 
    import( './menu/menu.module').then(
      (m) => m.MenuPageModule
    ), },
    {
      path: 'admin-menu', loadChildren: () => 
      import( './adminMenu/admin-menu.module').then(
        (m) => m.AdminMenuPageModule
      ), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
