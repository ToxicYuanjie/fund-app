import { Injectable } from '@angular/core'
import { ApiService } from './api.service'

@Injectable()
export class ProductService {

  constructor(private apiService: ApiService) { }

  //搜索
  fetchSearchList(key) {
    return this.apiService.getJSON(`/v1/products/?search=${key}`)
  }

  //获取产品详情
  fetchDetail(productId: number) {
    return this.apiService.getJSON(`/v1/products/${productId}/`)
  }

  //产品列表
  fetchProductList(){
    return this.apiService.getJSON("/v1/products/").then((res) => {
        return res;
    })
  }

  //高收益Top10
  fetchHighReturns(){
    return this.apiService.getJSON("/v1/products/high_returns").then((res) => {
        return res;
    })
  }

  //低风险Top10
  fetchLowRisks(){
    return this.apiService.getJSON("/v1/products/low_risks").then((res) => {
        return res;
    })
  }

  //热门搜索
  fetchHotSearches(){
    return this.apiService.getJSON("/v1/products/hot_searches").then(res => {
      return res
    })
  }

  //评测页、PK
  fetchFundInfo(productId){
    return this.apiService.getJSON(`/v1/products/${productId}/evaluating/`).then((res) => {
      return res
    })
  }

  //基金档案  概括
  fetchFundArchives(productId){
    return this.apiService.getJSON(`/v1/products/${productId}/archive/general/`).then((res) =>{
      return res;
    })
  }

  //基金档案  分红
  fetchFundArchivesDividend(productId){
    return this.apiService.getJSON(`/v1/products/${productId}/archive/dividend/`).then((res) =>{
      return res;
    })
  } 

  //基金经理详情
  fetchFundManagerDetail(managerId){
    return this.apiService.getJSON(`/v1/manager/${managerId}/`).then((res)=>{
      return res;
    })
  }

  //基金经理列表
  fetchFundManagerList(productId){
    return this.apiService.getJSON(`/v1/products/${productId}/managers`).then((res)=>{
      return res;
    })
  }
  
  //投资组合
  fetchFundPortfolios(productId){
    return this.apiService.getJSON(`/v1/products/${productId}/portfolio/`).then((res)=>{
      return res;
    })
  }

  //收藏借口
  fetchFundClientList(productId){
    return this.apiService.getJSON(`/v1/products/${productId}/collections/`).then((res)=>{
      return res;
    })
  }
    // products(phone: string, password: string) {
    //     return this.apiService.postJSON('/user/password_login/', { phone, password }).then((res) => {
    //         const {token, user_id } = res
    //         ApiService.setUserToken(token)
    //         return { token, user_id }
    //     })
    // }

}