import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UpdateRestaurantPage } from './update-restaurant';




const routes: Routes = [
  {
    path: '',
    component: UpdateRestaurantPage
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
  declarations: [UpdateRestaurantPage]
})
export class UpdateRestaurantPageModule {}
