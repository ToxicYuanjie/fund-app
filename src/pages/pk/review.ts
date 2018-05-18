import { Component } from '@angular/core';
import { NavController , NavParams, LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from '../../services';

@Component({
  selector: 'page-review',
  templateUrl: 'review.html'
})
export class ReviewPage {

  productId : number;
  portfolio: any;
  radar_graph: any;
  productResults = {};
  incomeRangeChartVal = 50;
  riskRangeChartVal = 23;
  expect_ret : number = 0;
  expect_risk : number = 0;
  line_return : any;
  invest_return : any;
  performance_return :any;

  constructor(public navCtrl: NavController,private translate: TranslateService, private loadingCtrl:LoadingController, public navParams: NavParams, private productService : ProductService) {
    // translate
    translate.get('prompt.loading').subscribe((res: string) => { 
      // Loading
      let loaderModule = this.loadingCtrl.create({content: res});  loaderModule.present();
      this.productId = this.navParams.get('productId');
      this.productService.fetchFundInfo(this.productId).then(res => {
        console.log(res)
        const name = res.name;
        const historical_score = res.historical_score;
        this.productResults = res;
        this.invest_return = res.invest_opportunity_value;
        this.radar_graph = Object.assign({},res.radar_graph,{name,historical_score})        
        this.line_return = res.historical_point_positions;
        this.performance_return = Object.assign({},res.performance,{name});                
        this.expect_ret = res.expect_ret * 10;
        this.expect_risk = res.expect_risk * 10 ;
      })
    // Close Loading
    loaderModule.dismiss();
    })
  }

  goback(){
    this.navCtrl.pop();
  }

  ionViewDidLoad (){
  }

}
