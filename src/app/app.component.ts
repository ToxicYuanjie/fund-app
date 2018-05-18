import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UnauthorizationSubject, OfflineSubject, UserService ,InjectableService } from '../services'
import { ProductListPage } from '../pages/products'
import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing';
import { Graphics } from '../pages/graphics/graphics';
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public toastCtrl: ToastController) {

    UnauthorizationSubject.subscribe({
			next: (res) => {
				this.rootPage = LandingPage
			}
		})

		OfflineSubject.subscribe({
			next: (res) => {
				let toast = this.toastCtrl.create({
					position: 'top',
					message: '连接失败，请检查你的网络设置',
					cssClass: 'offline',
					duration: 2000,
				})
				toast.present()
			}
		})

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      UserService.isLogin().then((f) => {
				// console.log(f)
				if (f) {
					this.rootPage = ProductListPage
				}else{
					this.rootPage = LandingPage
				}
			})
    });
  }
}
