import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController, ToastController, Platform } from '@ionic/angular';
import { Restaurant } from '../models/Restaurant';
import { ModalController } from '@ionic/angular';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { HostManagerService } from '../host-manager.service';

@Component({
	selector: 'app-restaurant',
	templateUrl: './restaurant.page.html',
	styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
	navigationSubscription;  
	actualUrl: string;   
	list_cat: any;
	loading: any;
	restaurants: Restaurant[];
	tablestyle = 'bootstrap';
	constructor(
		public modalController: ModalController,
		public loadingCtrl: LoadingController,
		public menuCtrl: MenuController,
		private router: Router,
		private hostManagerService: HostManagerService,
		private alertCntrl: AlertController,
		private toastController: ToastController,
		private platform: Platform,
	) {
		
		this.restaurants = new Array<Restaurant>();
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			// If it is a NavigationEnd event re-initalise the component
			if (e instanceof NavigationEnd) {
				this.getRestaurants();
				this.presentLoading();
			}
		  });


		  platform.ready().then(()=>{
			this.actualUrl = this.router.url;
		    this.router.navigateByUrl(this.actualUrl);
			 
			
		  })
	}

	ngOnInit() {
		// this.getRestaurants();
		this.presentLoading();
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'cargando restaurantes',
			duration: 2000
		});
		return await this.loading.present();
	}

	openSideBar(){
		this.menuCtrl.open();
	}

	async presentModal() {
		this.router.navigateByUrl('add-restaurant')
	  }
     
	getRestaurants(){
      this.hostManagerService.getRestaurants().subscribe((response:any)=>{
		  this.restaurants = response.data;
		  
	  });
	}

	doRefresh(event) {
		this.getRestaurants();
		setTimeout(() => {
		  event.target.complete();
		}, 2000);
	  }

	async deleteRestaurant(id: number){
		const confirm = this.alertCntrl.create({
			message: 'Estas seguro de eliminar el registro?',
			buttons: [
				{
				  text: 'Cancelar',
				  handler: () => {
					
				  }
				},
				{
				  text: 'Continuar',
				  handler: () => {
					this.hostManagerService.deleteRestaurant(id).subscribe(async () => {
					  let toast = await this.toastController.create({
						message: 'Restaurante eliminado con exito ',
						duration: 3000
					  });
					  toast.present();
					  this.doRefresh(null);
					});
				  }
				}
			]
		  });
		  (await confirm).present();
        
	}

	OpenUpdateView(id: number){
		this.router.navigate(['/update-restaurant',{restaurantId:id}])
		//this.router.navigate(['?restaurantId='+id]);
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
		  this.navigationSubscription.unsubscribe();
		}
	  }





}





