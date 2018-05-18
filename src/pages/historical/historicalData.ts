import { Component } from '@angular/core';
import { NavController , NavParams ,LoadingController } from 'ionic-angular';
import { ProductService , LoadingControllers} from '../../services';


@Component({
  selector: 'page-historical-data',
  templateUrl: 'historicalData.html'
})
export class HistoricalDataPage {
  productId:number;
  history_data : Array<any>;
  history_benchmark_name_name:any;
  historyModule = Object;
  translateLoading = '';
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private productService : ProductService, 
    private loadingCtrl: LoadingController,
    private loadingCtrls: LoadingControllers
  ) {
    this.productId = this.navParams.get('productId');
    let historyModule = this.loadingCtrl.create({content:'努力加载...'}); historyModule.present();
    this.productService.fetchDetail(this.productId).then(res =>{
      console.log(res);
      this.history_data = res.report_historical_return_rate.data;
      this.history_benchmark_name_name = res.report_historical_return_rate.benchmark_name;
    }).catch(err =>{
      if(err.status == 500){
        this.loadingCtrls.showToast('服务器错误，请稍后重试！',false);
        return false;
      }
    })
    historyModule.dismiss();
    this.translateLoading = '努力加载...';
  }
}
