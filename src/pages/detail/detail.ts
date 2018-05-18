import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { ProductService , LoadingControllers} from '../../services';
import { PkSingleFundPage , ReviewPage } from '../pk';
import { ArchivesPage} from '../archives/archives';
import { ManagerListPage , ManagerDetailPage } from '../manager';
import { HistoricalDataPage } from '../historical/historicalData';
import { PortfoliosPage } from '../portfolios/portfolios';



@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  detailData = {};
  newest_nav_value: any;
  newest_nav_date: any;
  price_fluctuation_limit_value: number;
  price_fluctuation_limit_date: any;
  productId : number;
  portfolio: any;
  radar_graph: any;
  daily_return: any;
  daily_return_status : boolean = true;
  portfolio_current_value: any;
  items:any;
  pet: string = "puppies";
  //判断evaluable_code 是否为200
  decide_evaluable_code:number;
  isdisabled: string;
  pro_list_data:any = [];
  history_data : Array<any>;
  company_full_name:string;
  current_managers_overview_name:string;
  managerId:number;
  history_benchmark_name_name:string;
  
  achievement:boolean = true;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private productService : ProductService, private loadingCtrl: LoadingControllers) {
    this.productId = this.navParams.get('productId');
    this.managerId = this.navParams.get('managerId');
    this.productService.fetchDetail(this.productId).then(res => {
      console.log(res)
      this.detailData = res;
      this.decide_evaluable_code = res.evaluable_code
      this.newest_nav_value = res.newest_nav.value;
      //数据容错
      if(res.report.days == undefined || res.report.days.length == 0 || res.report.days == null){
        this.daily_return_status = false;
      }else{
        this.daily_return = res.report;
      }
      console.log(this.daily_return_status)
      //净值
      if(res.newest_nav.price_date){
        this.newest_nav_date = res.newest_nav.price_date.substr(5);
      }else{
        this.newest_nav_date = '—'
      }
      this.price_fluctuation_limit_value = res.price_fluctuation_limit.value;
      //是否可评测
      this.disabledStatus(res.evaluable_code);

      //历史业绩列表
      this.history_data = Object.assign([],res.report_historical_return_rate.data);

      //判断数据是否大于三条，
      if(this.history_data.length>3){
        this.history_data.length = 3;    
      }

      //判断历史业绩是否有数据
      if(res.report_historical_return_rate.data.length == 0 || res.report_historical_return_rate.data == ''){
          this.achievement = false
      }else{
          this.achievement = true;
      }
      console.log(res.report_historical_return_rate.data);
      this.company_full_name = res.company_full_name;
      this.current_managers_overview_name = res.current_managers_overview;
      this.history_benchmark_name_name = res.report_historical_return_rate.benchmark_name;
      console.log(this.current_managers_overview_name)
      this.pro_list_data = ['日期','本产品','同类排名'];
    })
  }

  ngOnInit() {
    this.daily_return_status = true;
  }

  goback(){
    this.navCtrl.pop();
  }

  goReviewPage(){
    this.navCtrl.push( ReviewPage, {'productId': this.productId} );
  }

  goPkPage(){
    this.navCtrl.push(PkSingleFundPage, {'productId': this.productId});
  }

  ionViewDidLoad (){
    this.daily_return_status = true;    
    this.loadingCtrl.loading("努力加载...");
  }

  ionViewDidEnter(){
    this.disabledStatus(this.decide_evaluable_code)
  }  

  disabledStatus(decide_evaluable_code){
    if(decide_evaluable_code != 200){
      this.isdisabled = 'disabled';
    }
  }
  //基金档案
  goArchivesPage(){
    this.navCtrl.push(ArchivesPage,{'productId': this.productId});
  }
  //基金经理
  goManagerPage(len){
    if(len > 1){
      this.navCtrl.push(ManagerListPage,{'productId': this.productId});
    }else{
      this.navCtrl.push(ManagerDetailPage,{'managerId': this.current_managers_overview_name[0]['id'],'productId':this.productId});
    } 
  }
  //投资组合
  goPortfoliosPage(){
    this.navCtrl.push(PortfoliosPage,{'productId':this.productId});
  }
  //loading more data
  loadingMore(){
    this.navCtrl.push(HistoricalDataPage,{'productId': this.productId});
  }
}
