import { Component } from '@angular/core';
import { ViewController, NavController,ToastController, LoadingController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services';
import { TabsPage } from '../tabs';
import { RegisterPage } from './register'
import { Graphics } from '../graphics/graphics'
import { REGEX_PHONE_CODE, MAP_ERROR_CODE } from './common'



const REGEX_PHONE_NUMBER = new RegExp('^1[3|4|5|7|8]\\d{9}$|^0{6}\\d{5}$')
const REGEX_PASSWORD_NUMBER = new RegExp('^(?=.*\\d)(?=.*[a-zA-Z])\\w{8,}$')

@Component({
  selector: 'page-sms-login',
  templateUrl: 'sms-login.html'
})
export class SMSLoginPage {

  private phoneNumber: string
  private password: string
  private error: string
  private canSubmit: boolean = false
  
  public code : string
  public fetchingCode: boolean = false
  private _interval_id: any = null
  public timeCount: number = 0

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, 
    private userService: UserService, private translateService: TranslateService, 
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {
  }


  login() {
    if (!this.validate(true)) return;
    return this.userService.smsLogin(this.phoneNumber, this.code)
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

  // login Success
  handleSuccess() {
    const toast = this.toastCtrl.create({
      message: '恭喜您登录成功',
      duration: 2000,
      position: 'top'
    })

    toast.present()

    setTimeout(this.toHomePage.bind(this), 1200)
  }

  // login Success
  smsSuccess() {
    const smsToast = this.toastCtrl.create({
      message: '已发送,请查收！',
      duration: 2000,
      position: 'bottom'
    })
    smsToast.present()
  }


  validate(showError = false): Boolean {
    
        this.error = null
        let error: string = null
    
        if (this.phoneNumber == null || this.phoneNumber == '' || this.code == null || this.code == '') {
          this.canSubmit = false
          return false
        }
    
        this.canSubmit = true
    
        if (!REGEX_PHONE_NUMBER.test(this.phoneNumber)) {
          error = '手机号格式不正确'
        } else if (!REGEX_PHONE_CODE.test(this.code)) {
          error = '验证码格式不正确'
        }
    
        if (error) {
          if (showError) this.error = error
          return false
        } else {
          return true
        }
      }
    
      fetchSMSCode() {
    
        if (this.phoneNumber == null || this.phoneNumber == '') {
          this.error = '请输入手机号'
          return
        } else if (!REGEX_PHONE_NUMBER.test(this.phoneNumber)) {
          this.error = '手机号格式不正确'
          return
        }
        //获取SMSCode
        // let loaderModule = this.loadingCtrl.create({content: "努力加载..."});  loaderModule.present();
        this.userService.fetchLoginSMSCode(this.phoneNumber)
        .then(res => {
          // loaderModule.dismiss();
          // Toast
          const smsToast = this.toastCtrl.create({
            message: '已发送,请查收！',
            duration: 2000,
            position: 'middle'
          })
          smsToast.present()
          this.fetchingCode = true
          this.timeCount = 60
          this._interval_id = setInterval(this.timeCounter.bind(this), 1000)
        })
        .catch(this.handleError)
      }
    
      timeCounter() {
        this.timeCount--
        if (this.timeCount <= 0) {
          clearInterval(this._interval_id)
          this.fetchingCode = false
        }
      }
    
      register() {
        if (!this.validate(true)) return
        return this.userService.register(this.phoneNumber, this.password, this.code)
          .then(this.handleSuccess).catch(this.handleError)
      }
    
      handleError(error) {
        let errorMessage = MAP_ERROR_CODE[error.error_code]
        if (error.error_fields.code) {
          errorMessage = '验证码不正确或已经过期'
        }
        this.error = errorMessage || '系统错误'
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

  toLoginPage(){
    this.navCtrl.pop();
  }
 
  graph(){
    this.navCtrl.push(Graphics)
  }

}
