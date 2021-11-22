import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, MenuController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { Router } from '@angular/router';
import { HostManagerService } from '../host-manager.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	public loginForm;
	loading: any;
activeUser: string;
	constructor(
		//public events: Events, 
		public loadingCtrl: LoadingController, 
		public alertCtrl: AlertController, 
		public formBuilder: FormBuilder, 
		private router: Router,
		public menuCtrl: MenuController,
		private _HostManagerService: HostManagerService
	) {
		this.loginForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
		});

		this.menuCtrl.enable(false);
         localStorage.clear();
	}

	async presentAlert() {
		const alert = await this.alertCtrl.create({
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			buttons: ['OK']
		});
		await alert.present();
	}

	async presentAlertErr(message: string) {
		const alert = await this.alertCtrl.create({
			message: message,
			buttons: [{
				text: "Ok",
				role: 'cancel'
			}]
		});
		await alert.present();
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	loginUser(): void {
		const user = this.loginForm.controls.email.value;
		const pass = this.loginForm.controls.password.value;
		 this._HostManagerService.getLoginValidation(user, pass).subscribe((res: any)=>{
			 if(res.isActive==true){
			   this.persist();
			   this.router.navigate(['home', {user: user}]);
			   this.presentLoading();
			 }
   
			 if(res.isActive==false){
			    
				this.presentAlertErr('Credenciales invalidas');
			 }
   
		 }, (error: any) => {
			this.presentAlertErr('Ocurrió un error al enviar la solicitud. Verifique la conexión a: '+ error.url.split('?')[0]);
			 
		 })   
	   }


	   
	   persist() {
		const user = this.loginForm.controls.email.value;
		window.localStorage['user']= user;   
	  }
  
	  logout(){
		this.activeUser = window.localStorage['user'];
		this._HostManagerService.logoutSession(this.activeUser).subscribe((res:any)=>{})
  
		
	  }

	

	ngOnInit() {
		this.menuCtrl.enable(false);
	}

}
