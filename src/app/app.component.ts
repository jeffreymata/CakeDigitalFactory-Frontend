import { Users } from './models/Users';
import { HostManagerService } from 'src/app/host-manager.service';
import { Component } from '@angular/core';
import { Platform, MenuController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../environments/environment';


import { tap } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { LoginPage } from './login/login.page';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu = [];
  secondMenu = [];
  user: string;
  actualUrl: string;
  actualUser: Users;
  public rootPage: any;
  constructor(
    
    public toastCtrl: ToastController,
    public menuCtrl: MenuController, 
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private HostManagerService : HostManagerService,
    private ActivatedRoute : ActivatedRoute
  ) {

    this.menu = environment.menu;


  
    
  }


  ionViewWillEnter(){

  }


  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg.body,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }



 
  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('/login');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    
  }

  logout() {
   
  }

}
