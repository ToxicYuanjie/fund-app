import { Component } from '@angular/core';
import { App, NavController, AlertController } from 'ionic-angular'

import { TranslateService } from '@ngx-translate/core';

import { UserService } from '../../services';

import { LandingPage} from '../landing';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user:any;

  constructor(public app: App, public navCtrl: NavController, public alertCtrl: AlertController, 
    private translateService: TranslateService, private userService: UserService) {
    // this.userService.fetchDetail()
    //   .then(res => {
    //     this.user = res;
    //   })
  }

  confirmLogout() {
    let confirm = this.alertCtrl.create({
      title: '',
      message: this.translateService.instant('profile.log_out_confirm'),
      buttons: [
        {
          text: this.translateService.instant('common.button.cancel'),
          handler: () => {
          }
        },
        {
          text: this.translateService.instant('common.button.ok'),
          handler: () => {
              this.userService.logout();
              this.app.getRootNav().setRoot(LandingPage);
          }
        }
      ]
    });
    confirm.present();
  }

}
