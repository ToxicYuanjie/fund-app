import { Component } from '@angular/core';
import { NavController , NavParams, LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from '../../services';
import { SearchPage } from '../search/search'
import { DetailPage } from '../detail/detail'

@Component({
  selector: 'page-double-fund',
  templateUrl: 'pkDoubleFund.html'
})
export class PkDoubleFundPage {

  oneFundInfoData = {};
  twoFundInfoData = {};
  pkTwoProductId : number;
  pkOneProductId : number;
  portfolio: any;
  radar_graph = {};
  radar_rebalance = {};
  // radar_rebalance = {
  //   excess_ret_power:0,
  //   management_experience:0,
  //   risk_measure:0,
  //   performance_stability:0,
  //   hist_ret_power:0,
  // };

  invest_return:any;
  t_invest_return:any;
  daily_return: any;
  portfolio_current_value: any;
  firstRetRisk = [];
  lastRetRisk = [];
  incomeRangeChartVal = 50;
  incomeRangeChartVal1 = 100;
  performance_return :any;
  performance_second_return :any;  
  line_return :any;  
  line_second_return :any;  
  

  constructor(public navCtrl: NavController,private translate: TranslateService, private loadingCtrl:LoadingController, public navParams: NavParams, private productService : ProductService) {
    // translate
    translate.get('prompt.loading').subscribe((res: string) => { 
      // Loading
      let loaderModule = this.loadingCtrl.create({content: res});  loaderModule.present(); 
      this.pkOneProductId = this.navParams.get('pkOneProductId'); 
      this.pkTwoProductId = this.navParams.get('pkTwoProductId');    
      // pkOneProduct
      this.productService.fetchFundInfo(this.pkOneProductId).then(res => {
          let name = res.name;
          let radar_graph_data = res.radar_graph;
          let expect_ret = res.expect_ret < 8 ? res.expect_ret * 10 : 80;
          let expect_risk = res.expect_risk < 8 ? res.expect_risk * 10 : 80;
          this.firstRetRisk = Object.assign([],[expect_ret,expect_risk])
          this.radar_graph = Object.assign({},radar_graph_data,{name})
          this.invest_return = res.invest_opportunity_value;   
          this.performance_return = Object.assign({},res.performance,{name});  
          this.line_return = res.historical_point_positions;       
          this.oneFundInfoData = res;
          console.log(res)
          
          // pkTwoProduct
          this.productService.fetchFundInfo(this.pkTwoProductId).then(response => {
            let name = response.name;
            let performance = response.performance;
            console.log(performance.historical.days)
            let radar_rebalance_data = response.radar_graph;
            let expect_ret1 = response.expect_ret < 8 ? response.expect_ret * 10 : 80;
            let expect_risk1 = response.expect_risk < 8 ? response.expect_risk * 10 : 80;
            this.t_invest_return = response.invest_opportunity_value;                      
            this.lastRetRisk = Object.assign([],[expect_ret1,expect_risk1])
            this.radar_rebalance = Object.assign({},radar_rebalance_data,{name})
            this.performance_second_return = Object.assign({},performance,{name}); 
            this.line_second_return = response.historical_point_positions
            this.twoFundInfoData = response;
            console.log(response)
            // Close Loading
            loaderModule.dismiss();  
            
          })
      })


      console.log(this.firstRetRisk)
      console.log(this.lastRetRisk)

      this.lengthPercentage(100)

    })
  }


  ionViewDidEnter(){
  }

  ionViewDidLoad(){
  }

  lengthPercentage(num){
    if(num > 80){
      this.incomeRangeChartVal1 = 80
    }
  }

  goback(){
    this.navCtrl.pop();
  }

  goDetailPage(){
    this.navCtrl.pop();
    // this.navCtrl.push(DetailPage,{'productId': this.pkOneProductId})    
  }

  goSearchPage(){
    this.navCtrl.push(SearchPage,{"productId":this.pkOneProductId, "form":"pkOne"})
  }

  goPkTwoPage(){
    this.navCtrl.push(SearchPage)
  }

}
