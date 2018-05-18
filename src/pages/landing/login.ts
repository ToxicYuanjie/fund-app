import { Component } from '@angular/core';
import { ViewController, NavController,ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services';
import { TabsPage } from '../tabs';
import { RegisterPage,SMSLoginPage } from './index'
import { Graphics } from '../graphics/graphics'


const REGEX_PHONE_NUMBER = new RegExp('^1[3|4|5|7|8]\\d{9}$|^0{6}\\d{5}$')
const REGEX_PASSWORD_NUMBER = new RegExp('^(?=.*\\d)(?=.*[a-zA-Z])\\w{8,}$')

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private phoneNumber: string
  private password: string
  private error: string
  private canSubmit: boolean = false

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, 
    private userService: UserService, private translateService: TranslateService, 
    private toastCtrl: ToastController) {
  }

  validate(showError = false): Boolean {
    this.error = null
    let error: string = null

    if (this.phoneNumber == null || this.phoneNumber == '' || this.password == null || this.password == '') {
      this.canSubmit = false
      return false
    }

    this.canSubmit = true

    if (!REGEX_PHONE_NUMBER.test(this.phoneNumber)) {
      error = this.translateService.instant('login.incorrect_phone_number_format');
    }

    if (error) {
      if (showError) this.error = error
      return false
    } else {
      return true
    }
  }

  login() {
    if (!this.validate(true)) return;
    return this.userService.login(this.phoneNumber, this.password)
      .then(res => {
        this.canSubmit = false
        this.handleSuccess();
        this.savePhone();
      }).catch((error) => {
        this.error = this.translateService.instant('login.incorrect_phone_number_password');
      })  
  }

  savePhone(){
    localStorage.setItem("PHOME",this.phoneNumber);
  }

  handleSuccess() {
    const toast = this.toastCtrl.create({
      message: '恭喜您登录成功',
      duration: 2000,
      position: 'top'
    })

    toast.present()

    setTimeout(this.toHomePage.bind(this), 1200)
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

  toHomePage() {
    const currentNav = this.navCtrl;
    const rootNav = currentNav.parent || this.navCtrl;
    rootNav.setRoot(TabsPage);

    if (currentNav.parent) {
      currentNav.remove(0, currentNav.length() - 1).then(() => {
        currentNav.pop({
          direction: 'forward',
          easing: 'linear',
        })
      })
    }
  }

  toRegisterPage() {
    this.navCtrl.push(RegisterPage)
  }

  toSmsCodeLoginPage(){
    this.navCtrl.push(SMSLoginPage)
  }
 
  graph(){
    this.navCtrl.push(Graphics)
  }

}
