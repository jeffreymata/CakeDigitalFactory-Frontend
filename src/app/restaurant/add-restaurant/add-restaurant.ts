import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonBackButton, MenuController, ToastController } from '@ionic/angular';
import { HostManagerService } from 'src/app/host-manager.service';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
	selector: 'app-add-restaurant',
	templateUrl: './add-restaurant.html',
	styleUrls: ['./add-restaurant.scss'],
})
export class AddRestaurantPage {
  restaurantDto: Restaurant;
  constructor(private menuCtrl: MenuController,
    private router: Router,
    private hostManagerService: HostManagerService,
    private toast: ToastController) {
      this.restaurantDto = new Restaurant();
    }
  openSideBar(){
    this.menuCtrl.open();
   }
   backButton(){
      this.router.navigateByUrl('restaurant');
   }


   async createRestaurant(){
     this.restaurantDto.IdUsuario = 1;
     this.restaurantDto.FechaCreacion = new Date;

        this.hostManagerService.createRestaurant(this.restaurantDto).subscribe(async (response:any)=>{

          const toast = await this.toast.create({
            message: response.message,
            duration: 2000,
            position: 'top'
          });
          toast.present();
          this.router.navigateByUrl('restaurant');
        });
   }

  }






