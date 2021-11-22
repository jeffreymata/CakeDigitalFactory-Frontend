import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddRestaurantPage } from './add-restaurant';



const routes: Routes = [
  {
    path: '',
    component: AddRestaurantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddRestaurantPage]
})
export class AddRestaurantPageModule {}
