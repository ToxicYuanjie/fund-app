import { Injectable } from '@angular/core'
import { ApiService } from './api.service'

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) { }

  static isLogin(): Promise<boolean> {
      return Promise.resolve(ApiService.getUserToken() != null)
  }

  //获取注册SMSCode
  fetchRegisterSMSCode(phoneNumber: string) {
    const url = '/v1/users/register/'
    return this.apiService.postJSON(url, {
        phone: phoneNumber
    })
  }

  //获取登录SMSCode
  fetchLoginSMSCode(phoneNumber: string) {
    const url = '/v1/users/login/'
    return this.apiService.postJSON(url, {
        phone: phoneNumber
    })
  }
  
  //SMS登录接口
  smsLogin(phone: string, code: string) {
    return this.apiService.postJSON('/v1/users/login/', { phone, code }).then((res) => {
        const {token, user_id } = res
        ApiService.setUserToken(token)
        return { token, user_id }
    })
  }

  //登录接口
  login(phone: string, password: string) {

      return this.apiService.postJSON('/v1/users/password_login/', { phone, password }).then((res) => {
          const {token, user_id } = res
          ApiService.setUserToken(token)
          return { token, user_id }
      })
  }

  //注册接口
  register(phone: string, password: string, code: string) {
    return this.apiService.postJSON('/v1/users/register/', { phone, password, code }).then((res) => {
        const {token, user_id } = res
        ApiService.setUserToken(token)
        return { token, user_id }
    })
  }

  //退出登录
  logout() {
    ApiService.clearUserToken();
  }

}