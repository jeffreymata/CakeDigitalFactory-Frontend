import { async } from '@angular/core/testing';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { HostManagerService } from 'src/app/host-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, MenuController, Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';



@Component({
	selector: 'app-admin-menu',
	templateUrl: './admin-menu.html',
	styleUrls: ['./admin-menu.scss'],
})
export class AdminMenuPage {
  
    menu=[];
    actualUser: string;
    public rootPage: any;
        constructor(public toastCtrl: ToastController,
            public menuCtrl: MenuController, 
            private router: Router,
            private platform: Platform,
            private splashScreen: SplashScreen,
            private statusBar: StatusBar,
            private HostManagerService : HostManagerService,
            private ActivatedRoute : ActivatedRoute){
                
                this.menu = environment.menu;
                
              
        }

    

      

}
