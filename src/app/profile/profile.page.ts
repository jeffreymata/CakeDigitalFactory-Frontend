import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, AlertController, Platform } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";

// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import {FilePath} from '@ionic-native/file-path';
declare var cordova: any;


@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	addressForm : FormGroup;
	user: any;
	loading: any;

	result;

	constructor(
		public menuCtrl: MenuController, 
		//public events: Events, 
		public alertCtrl: AlertController, 
		//private storage: Storage, 
		public loadingCtrl: LoadingController, 
		private formBuilder: FormBuilder,
		private router: Router,
		public camera: Camera,
		public file: File,
		// public filePath: FilePath,
		// public transfer: FileTransfer,
		public platform: Platform
	) {
		
	}


	ionViewWillEnter(){
		/*this.storage.ready().then(() => {
			this.storage.get('user').then((val) => {
			
				this.user = val;
				this.addressForm = this.formBuilder.group({
					username: [val.username],
					fullname: [val.fullname],
					address: [val.address],
					phone: [val.phone]
				});
			})
		})*/
	}






	// =============== up avt =======================


	



	// -------------------

	makeFileIntoBlob(_imagePath) {
		// INSTALL PLUGIN - cordova plugin add cordova-plugin-file
		return new Promise((resolve, reject) => {
		  let fileName = "";
		  this.file
			.resolveLocalFilesystemUrl(_imagePath)
			.then(fileEntry => {
			  let { name, nativeURL } = fileEntry;
	
			  // get the path..
			  let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
			
	
			  fileName = name;
	
			  // we are provided the name, so now read the file into
			  // a buffer
			  return this.file.readAsArrayBuffer(path, name);
			})
			.then(buffer => {
			  // get the buffer and make a blob to be saved
			  let imgBlob = new Blob([buffer], {
				type: "image/jpeg"
			  });
			  
			  resolve({
				fileName,
				imgBlob
			  });
			})
			.catch(e => reject(e));
		});
	}


	// ------------------------

	



	// =============== end up avt =======================




	updateAddress(){
		
	}

	logout() {
		
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
