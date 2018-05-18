import { Component,ElementRef } from '@angular/core';
import { NavController , NavParams ,LoadingController } from 'ionic-angular';
import { ProductService , LoadingControllers} from '../../services';

@Component({
  selector: 'page-archives',
  templateUrl: 'archives.html'
})
export class ArchivesPage {
  pet: string = "puppies";
  productId:number;
  //判断分红是否有数据
  bonus_dividends:boolean = true;
  archivesData: any = {};
  invest_scope = {};
  invest_strategy = {};
  //展开收缩Icons
  iconImgs={
    'downImg':'assets/image/icon-arrow-down.png',
    'upImg':'assets/image/icon-arrow-upward.png'
  }
  //展开收缩当前状态及icon路径
  modulesOverTextSatus = {
    'scope':false,
    'strategy':false,
    'scopeImgUrl':this.iconImgs.downImg,
    'strategyImgUrl':this.iconImgs.downImg,
  };
  //分红数据
  dividend_data:Array<any>;
  loadingModule = Object; 
  translateLoading= '';
  constructor(public navCtrl: NavController, public el:ElementRef, public navParams: NavParams,private productService: ProductService,private loadingCtrl: LoadingController,private loadingCtrls: LoadingControllers) {
    this.productId = this.navParams.get('productId');
    //loading
    let loadingModule = this.loadingCtrl.create({content:'努力加载...'}); loadingModule.present();
    //概况
    this.productService.fetchFundArchives(this.productId).then(res =>{
      console.log(res);
      this.archivesData = res.report_archive_general;
      //投资范围
      this.invest_scope = res.report_archive_general.invest_scope;
      //投资策略
      this.invest_strategy = res.report_archive_general.invest_strategy;
    }).catch(err=>{
      //  console.log(err)
      if(err.http_status == 500){
        this.loadingCtrls.showToast('服务器错误，请稍后重试！',false)
        return false;
      }
    })
    // Close Loading
    loadingModule.dismiss();
    this.translateLoading = '努力加载...';
  }

  //展开收缩文字 false:收缩 true:展开
  textOmitted(mod){
    //投资范围
    if(mod == 'scope'){
      this.modulesOverTextSatus.scope = !this.modulesOverTextSatus.scope;
      //为true更换Icon
      if(this.modulesOverTextSatus.scope){
        this.modulesOverTextSatus.scopeImgUrl = this.iconImgs.upImg
      }else{
        this.modulesOverTextSatus.scopeImgUrl = this.iconImgs.downImg;
      }
    }
    //投资策略
    else if(mod == 'strategy'){
      this.modulesOverTextSatus.strategy = !this.modulesOverTextSatus.strategy;
      //为true更换Icon
      if(this.modulesOverTextSatus.strategy){
        this.modulesOverTextSatus.strategyImgUrl = this.iconImgs.upImg
      }else{
        this.modulesOverTextSatus.strategyImgUrl = this.iconImgs.downImg;
      }
    }
  }
  //是否加载分红数据
  loadingBonus(){
    //分红
    if(!this.dividend_data){
      this.loadingCtrls.loading(this.translateLoading);
      this.productService.fetchFundArchivesDividend(this.productId).then(res =>{
        console.log(res);
        // this.dividend_data = res
        if(res == null || res == '' || res.length == 0){
          this.bonus_dividends = false;
        }else{
          this.dividend_data = res;
        }
      }).catch(err =>{
          this.loadingCtrls.showToast('服务器错误，请稍后重试！',false)
          return false;
      })
    }
    
  }
}

