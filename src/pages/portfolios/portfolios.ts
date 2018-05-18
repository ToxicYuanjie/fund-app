import { Component } from '@angular/core';
import { NavController , NavParams , LoadingController } from 'ionic-angular';
import { ProductService , LoadingControllers} from '../../services';


@Component({
    selector: 'page-portfolios',
    templateUrl: 'portfolios.html'
})

export class PortfoliosPage {
    productId:number;
    stockToTotal:number;
    bondToTotal:number;
    cashToTotal:number;
    otherToTotal:number;
    endDate:string;
    stockPortfolios:Array<any>;
    //判断是否有数据
    judgementData:boolean = true;
    portfoliosModule = Object;
    translateLoading = '';
    constructor(
        public navCtrl:NavController,
        public navParams:NavParams,
        private productService:ProductService,
        private loadingCtrl:LoadingController,
        private loadingCtrls:LoadingControllers
    ){
        this.productId = this.navParams.get('productId');
        let portfoliosModule = this.loadingCtrl.create({content:'努力加载...'}); portfoliosModule.present();
        this.productService.fetchFundPortfolios(this.productId).then(res=>{
            console.log(res);
            if(res == null || res.length == 0 || res == ''){
                this.judgementData = false;
            }else{
                //股票比例
                this.stockToTotal = res.stock_to_total;
                //债券比例
                this.bondToTotal = res.bond_to_total;
                //现金比例
                this.cashToTotal = res.cash_to_total;
                //其他比例
                this.otherToTotal = res.other_to_total;
                //日期
                this.endDate = res.end_date;
                //重仓股票数据
                this.stockPortfolios = res.stock_portfolios;
            }   
        }).catch(err => {
                //  console.log(err)
                if(err.http_status == 500){
                this.loadingCtrls.showToast('服务器错误，请稍后重试！',false)
                return false;
            }   
        })
        // Close Loading
        portfoliosModule.dismiss();
        this.translateLoading = '努力加载...';
    }
}