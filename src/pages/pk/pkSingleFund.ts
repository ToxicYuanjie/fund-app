import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { ProductService, LoadingControllers } from '../../services';
import { SearchPage } from '../search/search'

@Component({
  selector: 'page-single-fund',
  templateUrl: 'pkSingleFund.html'
})
export class PkSingleFundPage {

  fundInfoData = {};
  productId : number;
  portfolio: any;
  radar_graph = {};
  daily_return: any;
  portfolio_current_value: any;
  retRisk = [];
  expect_ret: any;
  expect_risk: any;
  incomeRangeChartVal = 50;
  incomeRangeChartVal1 = 100;
  invest_return: number;
  performance_return :any;
  performance_second_return :any;
  line_return:any;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService, private loadingCtrl: LoadingControllers) {
    this.productId = this.navParams.get('productId');    
    this.productService.fetchFundInfo(this.productId).then(res => {
        let name = res.name;
        let historical_score = res.historical_score;
        // let radar_graph_datas = res.radar_graph;
        let expect_ret = res.expect_ret < 8 ? res.expect_ret * 10 : 80;
        let expect_risk = res.expect_risk < 8 ? res.expect_risk * 10 : 80;
        this.retRisk = Object.assign([expect_ret,expect_risk])
        this.radar_graph = Object.assign({},res.radar_graph,{name,historical_score})   
        this.performance_return = Object.assign({},res.performance,{name});     
        this.fundInfoData = res;
        this.invest_return = res.invest_opportunity_value;
        this.line_return = res.historical_point_positions; 
        
    })

    this.lengthPercentage(100)
  }

  ionViewDidLoad(){
    this.loadingCtrl.loading("努力加载...");
  }

  lengthPercentage(num){
    if(num > 80){
      this.incomeRangeChartVal1 = 80
    }
  }

  goback(){
    this.navCtrl.pop();
  }

  goSearchPage(){
    this.navCtrl.push(SearchPage,{"productId":this.productId,"form":"pkOne"})
  }

  goPkTwoPage(){
    this.navCtrl.push(SearchPage)
  }

}
