import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search'
import { ProductService } from '../../services'

@Component({
  selector: 'page-client-list',
  templateUrl: 'client-list.html'
})
export class ClientListPage {

  listData = [{name:'景顺长城大中华',code:"262001",level:"S"},
  {name:'建信稳定得利A',code:"000875",level:"A"},
  {name:'华夏保证金B',code:"519801",level:"A"} ]
  getParamProductId : number;

  constructor(public navCtrl: NavController, private NavParams :NavParams ,private productService : ProductService) {
    //获取参数 ProductId
    this.getParamProductId = this.NavParams.get("productId")
    this.productService.fetchFundClientList(this.getParamProductId).then(res =>{
      console.log(res);
    })
    const params= NavParams.data
    if(params.code){
      this.listData.push({name:params.name,code:params.code,level:params.level})
    }
  }

  gotoSearchPage(){
    this.navCtrl.push(SearchPage,{"form":"addfund"});
  }

  cancel(){
    this.navCtrl.pop();
  }
}
