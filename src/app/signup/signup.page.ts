import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	public signupForm;
	loading: any;

	constructor(
		//public events: Events, 
		public loadingCtrl: LoadingController, 
		public alertCtrl: AlertController, 
		public formBuilder: FormBuilder,
		private router: Router
	) {
		this.signupForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			fullname: ['', Validators.compose([Validators.minLength(6), Validators.required])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
			phone: ['', Validators.compose([Validators.minLength(5), Validators.required])],
			address: ['', Validators.compose([Validators.minLength(2), Validators.required])]
		})
	}

	signupUser(){
	
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	async presentAlertErr(err) {
		const alert = await this.alertCtrl.create({
			message: err.message,
			buttons: [{
				text: "Ok",
				role: 'cancel'
			}]
		});
		await alert.present();
	}

	ngOnInit() {
	}

}
