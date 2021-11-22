import { HostManagerService } from 'src/app/host-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, MenuController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {

sub: any;
	slidePerViewOpts = {
		speed: 1000,
		spaceBetween: 16,
		loop: true,
		autoplay: {
			delay: 3500,
		},
		slidesPerView: 2,
	};

	slidePerViewOpts2 = {
		speed: 1000,
		spaceBetween: 16,
		loop: true,
		autoplay: {
			delay: 3500,
		},
		slidesPerView: 4,
	};
	
	
   loading: any;
	constructor(//public events: Events, 
		public toastCtrl: ToastController, 
		
		public loadingCtrl: LoadingController, 
		
		public navCtrl: NavController,
		public menuCtrl: MenuController,
		public route: ActivatedRoute,
		public router: Router,
		public hostManager: HostManagerService

		
		){

			this.sub = this.route.snapshot.paramMap.get("user") || "0";
	        localStorage.setItem('user',this.sub);

			console.log(this.sub);

		this.presentLoading();
		
    this.hostManager.getUserByName(this.sub).subscribe((res:any)=>{
		if(res.data.isAdmin==true){
			this.menuCtrl.enable(true, 'admin-menu');
		}

		if(res.data.isAdmin==false){
			this.menuCtrl.enable(true, 'main-menu');		
		}
	})	
		

	}

	ionViewWillEnter(){
		}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'Cargando',
			duration: 2000
		});
		return await this.loading.present();
	}

	loadMore(event){
		
	}

	reload(){
		this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
			this.router.navigate(['/']);
		});
	}



	async presentToast() {
		const toast = await this.toastCtrl.create({
			message: 'added success',
			duration: 2000,
			position: 'top'
		});
		toast.present();
	}


	openSideBar(){
		this.menuCtrl.open();
	}	 	



	logout(){
		this.hostManager.logoutSession(this.sub).subscribe((res:any)=>{
			localStorage.clear();
		    this.router.navigateByUrl('login');	
		})
		
	}
}
