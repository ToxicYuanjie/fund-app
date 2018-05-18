import { Component } from '@angular/core'
import { NavController, ModalController } from 'ionic-angular'
import { LoginPage } from './login'
import { ProductListPage } from '../products'


@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidEnter(){
    
  }

  login() {
    const profileModal = this.modalCtrl.create(LoginPage)
    profileModal.present()
    // this.navCtrl.push(ProductListPage)
  }

}
