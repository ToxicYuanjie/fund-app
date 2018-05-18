import { Component } from '@angular/core';
import { NavController , NavParams , LoadingController } from 'ionic-angular';
import { ManagerDetailPage } from './managerDetail';
import { ProductService , LoadingControllers} from '../../services';

@Component({
  selector: 'page-manager-list',
  templateUrl: 'managerList.html'
})
export class ManagerListPage {
  productId:number;
  managers_list : Array<any>;
  listModule = Object;
  translateLoading = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private productService : ProductService, private loadingCtrl: LoadingController ,private loadingCtrls: LoadingControllers) {
    this.productId = this.navParams.get('productId');
    let listModule = this.loadingCtrl.create({content:'努力加载...'}); listModule.present();
    this.productService.fetchFundManagerList(this.productId).then(res =>{
      console.log(res);
      this.managers_list = res.current_managers_overview;
    }).catch(err =>{
      if(err.http_status == 500){
        this.loadingCtrls.showToast('服务器错误，请稍后重试！',false)
        return false;
      }
    })
    // Close Loading
    listModule.dismiss();
    this.translateLoading = '努力加载...';
  }
  //跳转基金经理详情页
  goManagerDetailPage(managerId){
    this.navCtrl.push(ManagerDetailPage,{'managerId': managerId,'productId':this.productId} );
  }

}
