import { Component, Input } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';
import { IonBackButton, MenuController, ToastController } from '@ionic/angular';
import { VirtualTimeScheduler } from 'rxjs';
import { map } from 'rxjs/operators';
import { HostManagerService } from 'src/app/host-manager.service';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
	selector: 'app-update-restaurant',
	templateUrl: './update-restaurant.html',
	styleUrls: ['./update-restaurant.scss'],
})
export class UpdateRestaurantPage {
  restaurantId: number;
  restaurantDto: Restaurant;
  sub: any;
  constructor(private menuCtrl: MenuController,
    private router: Router,
    private route: ActivatedRoute,
    private hostManagerService: HostManagerService,
    private toast: ToastController) {
      this.restaurantDto = new Restaurant();

      this.sub = this.route.snapshot.paramMap.get("restaurantId") || "0";
      this.restaurantId = Number(this.sub);
      this.getRestaurant(this.restaurantId);
    }


    ngOnInit() {

    }


  openSideBar(){
    this.menuCtrl.open();
   }
   backButton(){
      this.router.navigateByUrl('restaurant');
   }

   getRestaurant(id: number){
     this.hostManagerService.getRestaurantById(id).subscribe(async (response:any)=>{
       this.restaurantDto = response.data;
     });
   }


   async UpdateRestaurant(){
        this.hostManagerService.updateRestaurant(this.restaurantDto).subscribe(async (response:any)=>{

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






