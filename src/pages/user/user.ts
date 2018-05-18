import { Component } from '@angular/core';
import { App , NavController, ModalController, AlertController } from 'ionic-angular';
import { UserService } from '../../services';
import { ProfilePage } from './profile';
import { LandingPage , LoginPage} from '../landing';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  user;
  // nav: any;
  phone = localStorage.getItem("PHOME");

  constructor(public app: App, public navCtrl: NavController, private userService: UserService, public alertCtrl: AlertController , public modalCtrl: ModalController) {
  }

  goProfile() {
    this.navCtrl.push(ProfilePage);
  }

  confirmLogout() {
    let confirm = this.alertCtrl.create({
      title: '确认',
      message: '您确定要退出吗？',
      buttons: [
        {
          text: '取消',
          handler: () => {
          }
        },
        {
          text: '确定',
          handler: () => {
            this.userService.logout();
            // this.navCtrl.setRoot(LandingPage);
            const profileModal = this.modalCtrl.create(LoginPage)
            profileModal.present()
          }
        }
      ]
    });
    confirm.present();
  }
}
