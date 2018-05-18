import { Component } from '@angular/core';
import { NavController , NavParams , LoadingController } from 'ionic-angular';
import { ProductService , LoadingControllers} from '../../services';

@Component({
  selector: 'page-manager-detail',
  templateUrl: 'managerDetail.html'
})
export class ManagerDetailPage {
  managerId:any;
  productId:number;
  startTime:any;
  endTime:any;
  fund_managers_data = {};
  served_products_list : Array<any>;
  fund_date:boolean = true;

  //展开收缩Icons
  iconImgs={
    'downImg':'assets/image/icon-arrow-down.png',
    'upImg':'assets/image/icon-arrow-upward.png'
  }
  //展开收缩当前状态及icon路径
  modulesOverTextSatus = {
    'scope':false,
    'scopeImgUrl':this.iconImgs.downImg,
  };
  detailModule = Object;
  translateLoading = '';
  constructor(public navCtrl: NavController,public navParams: NavParams,private productService: ProductService,private loadingCtrl: LoadingController,private loadingCtrls: LoadingControllers) {
    this.managerId = this.navParams.get('managerId');
    this.productId = this.navParams.get('productId');
    console.log(this.managerId);
    console.log(this.productId);
    let detailModule = this.loadingCtrl.create({content:'努力加载...'}); detailModule.present();
    this.productService.fetchFundManagerDetail(this.managerId).then( res =>{
      this.fund_managers_data = res;
      this.served_products_list = res.served_products_overview_list;

      console.log(res.served_products_overview_list)
      console.log(this.productId)

      for (let item of res.served_products_overview_list){
        if( this.productId == item.product_id){
          this.startTime = item.office_date;
          this.endTime = item.departure_date;
        }
      }    
      console.log(this.startTime)
      console.log(this.fund_managers_data)
      console.log(this.served_products_list)
      
    }).catch(err =>{
      if(err.http_status == 500){
        this.loadingCtrls.showToast('服务器错误，请稍后重试！',false)
        return false;
      }
    })
    // Close Loading
    detailModule.dismiss();
    this.translateLoading = '努力加载...';
  }
  //展开收缩文字 false:收缩 true:展开
  textOmitted(mod){
    //基金经理
    if(mod == 'scope'){
      this.modulesOverTextSatus.scope = !this.modulesOverTextSatus.scope;
      //为true更换Icon
      if(this.modulesOverTextSatus.scope){
        this.modulesOverTextSatus.scopeImgUrl = this.iconImgs.upImg
      }else{
        this.modulesOverTextSatus.scopeImgUrl = this.iconImgs.downImg;
      }
    }
  }
}
