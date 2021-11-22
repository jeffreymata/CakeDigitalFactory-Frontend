import { AdminMenuPage } from './adminMenu/admin-menu.page';
import { MenuPage } from './menu/menu.page';
import { PopoverComponent } from './popover/popover.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from "@ionic-native/file/ngx";

import { AdMobFree } from '@ionic-native/admob-free/ngx';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, PopoverComponent, MenuPage, AdminMenuPage],
  entryComponents: [PopoverComponent],
  imports: [
    FormsModule,
    // BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Stripe,
    CallNumber,
    SocialSharing,
    PayPal,
    InAppBrowser,
    Camera,
    AdMobFree,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
