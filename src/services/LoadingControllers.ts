import { Injectable } from '@angular/core'
import { LoadingController,ToastController } from 'ionic-angular'


@Injectable()
export class LoadingControllers {

    constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    }
    // Loading Module
    loading(keyWord){
        let loader = this.loadingCtrl.create({
            content: keyWord,
            duration: 500
          });
          loader.present();
    }

    // Toast Module
    showToast(keyWord,position){
        let toast = this.toastCtrl.create({
            message: keyWord,
            duration: 2000,
            position: position || 'middle'
          });
          toast.present();
    }
}