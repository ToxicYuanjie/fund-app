import { Component } from '@angular/core';
import { NavController ,LoadingController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { SearchPage } from '../search/search';
import { ProductService , LoadingControllers, InjectableService } from '../../services';

import { Graphics } from '../graphics/graphics';
import { DetailPage } from '../detail/detail'


@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})

export class ProductListPage { 
  param : string = "";
  pet: string = "puppies";
  loaderModule = Object;
  highReturnsList: any;
  lowRisksList: any;
  translateLoading = "";

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController, 
    private loadingCtrls:LoadingControllers,
    private translate: TranslateService,
    private productService:ProductService) {

    // translate
    translate.get('prompt.loading').subscribe((res: string) => { 
        // Loading
        let loaderModule = this.loadingCtrl.create({content: res});  loaderModule.present();
        // Get Product List
        this.productService.fetchHighReturns().then(res =>{
          // console.log(res)
          this.highReturnsList = res.results;
        }).catch(err =>{
          //  console.log(err)
           if(err.http_status == 500){
             this.loadingCtrls.showToast('服务器错误，请稍后重试！',false)
             return false;
           }
        })
        // Close Loading
        loaderModule.dismiss();
        this.translateLoading = res;
    })

  }
  
  ionViewDidLoad(){
    // this.loadingCtrls.loading("努力加载...");
    // this.loadingCtrl.showToast("删除成功！",false)
    // this.presentLoading();
  }

  goSearchPage () {
    this.navCtrl.push(SearchPage)
  }

  graphicsDemoShow () {
    this.navCtrl.push(Graphics)
  }

  goDetailPage(productId : number){
    this.navCtrl.push( DetailPage ,{ 'productId': productId })
  }

  //加载低风险Top10
  loadLowRisks(){
    //是否已经加载
    if(!this.lowRisksList){
      this.loadingCtrls.loading(this.translateLoading);
      this.productService.fetchLowRisks().then( res => {
        this.lowRisksList = res.results;
      }).catch(err => {
        if(err.http_status == 500){
          this.loadingCtrls.showToast('服务器错误，请稍后重试！',false)
          return false;
        }
      })
    } 
  }

}
