import { Component } from '@angular/core';
import { NavController,NavParams ,LoadingController} from 'ionic-angular';
import { DetailPage } from '../detail/detail'
import { ClientListPage } from '../clients/client-list'
import { TranslateService } from '@ngx-translate/core';
import { PkDoubleFundPage } from '../pk'
import { ProductService ,LoadingControllers } from '../../services'
import * as outils from 'outils'
// import * as oclazyload from 'oclazyload';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  items = [];
  searchValue : string;
  typeStatus : boolean;
  hotSearchesData : any;
  form: string;
  pkOneProductId: string;
  searchHistoricalData = JSON.parse(localStorage.getItem("SEARCH_KEYWORD")) || undefined; // 历史搜索
  searchHlaceholder = "输入基金名称/代码"
  debounce = outils.debounce();  
  delayTime: any;
  clearInput = '';

  constructor(public navCtrl: NavController,public translate:TranslateService, private navParams: NavParams, private loadingCtrl:LoadingController, private ProductService : ProductService , private loadingCtrls : LoadingControllers) {
    this.searchValue = '';
    this.fetchHotSearches();
    console.log(this.debounce)
    this.form = this.navParams.get("form");
    this.pkOneProductId = this.navParams.get("productId");

    console.log(this.form)
    console.log(this.pkOneProductId)
  }

  ionViewDidLoad(){
    // this.loadingCtrl.loading("努力加载...");
  }

  // hot searches
  fetchHotSearches(){
    this.ProductService.fetchHotSearches().then(res => {
      this.hotSearchesData = res.results
      console.log(res);
    })
  }

  // load search list
  fetchSearchListData () {
    this.delayTime = setTimeout((() => {
      // Loading
      let loaderModule = this.loadingCtrl.create({content: "正在加载"});  loaderModule.present();
      this.ProductService.fetchSearchList(this.searchValue).then(res => {      
        this.items = res.results;
      })
      // Close Loading
      loaderModule.dismiss();
    }),2000)
  }

  gotoDetail(productId : number, name : string){
    //PK 二
    if(this.form == "pkOne"){
      this.navCtrl.push( PkDoubleFundPage ,{ 'pkTwoProductId': productId , 'pkOneProductId':this.pkOneProductId });  //popTo      
    }
    //添加基金
    else if(this.form == "addfund"){
      // this.navCtrl.push( ClientListPage ,{ 'productId': productId });   
      this.navCtrl.setRoot(ClientListPage,{ 'productId': productId })         
    }else{
      this.navCtrl.push( DetailPage ,{ 'productId': productId });      
    }
    this.localstorageSave(productId,name);
  }

  // localstorage save data
  localstorageSave(id,name: string){
    // combination param
    const param = {
      "id": id,
      "name": name
    }
    // getItem
    const storage = localStorage.getItem('SEARCH_KEYWORD');
    const storageArr = storage ? JSON.parse( storage ) : [];
    const storageArrayLen = storageArr.length;
    let itemStatus = false;

    //去重 and 不超过10条item
    if(storageArrayLen != 0){ 
      for(let item of storageArr){
        if(item.id == id){
          itemStatus = true;
        }
      }
      if(storageArrayLen >= 10){
        storageArr.pop();
      }else if(!itemStatus){
        storageArr.unshift(param);        
      }
    }else{
      storageArr.unshift(param);
    }
    //setItem
    localStorage.setItem('SEARCH_KEYWORD',JSON.stringify(storageArr));
  }

  goDetailPage(productId : number){
    if(this.form){
      this.navCtrl.push( PkDoubleFundPage ,{ 'pkTwoProductId': productId , 'pkOneProductId':this.pkOneProductId });
    }else{
      this.navCtrl.push( DetailPage ,{ 'productId': productId });      
    }
  }

  cancel(){
    this.navCtrl.pop();
  }

  clearLocalStorageHistory(){
    localStorage.removeItem("SEARCH_KEYWORD");
    this.searchHistoricalData = undefined;
  }

  unique(arr){
    var newArr = [];
    for(var i in arr) {
        if(newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
  }

  getItems(ev) {
    
      // set val to the value of the ev target
      const val = ev.target.value;
      this.searchValue = val;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        clearTimeout(this.delayTime);   
        this.fetchSearchListData();
      }

  }
  //add back clear data
  ionViewDidEnter(){
    this.searchValue = '';
    this.clearInput = ''; 
    //add hostory go hot search page
    this.searchHistoricalData = JSON.parse(localStorage.getItem("SEARCH_KEYWORD")) || undefined;
  }

}
