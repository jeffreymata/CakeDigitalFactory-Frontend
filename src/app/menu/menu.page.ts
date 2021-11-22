import { environment } from './../../environments/environment';
import { async } from '@angular/core/testing';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { HostManagerService } from 'src/app/host-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, MenuController, Platform } from '@ionic/angular';




@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})
export class MenuPage  {
    
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
                
                this.menu = environment.SecondMenu;
                
        }

      


}
