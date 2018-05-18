webpackJsonp([0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserService__ = __webpack_require__(477);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__UserService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProductService__ = __webpack_require__(478);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__ProductService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadingControllers__ = __webpack_require__(479);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__LoadingControllers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__InjectableService__ = __webpack_require__(480);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__InjectableService__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_list__ = __webpack_require__(490);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__product_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_detail__ = __webpack_require__(496);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__product_detail__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pk__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__archives_archives__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manager__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__historical_historicalData__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__portfolios_portfolios__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, productService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.detailData = {};
        this.daily_return_status = true;
        this.pet = "puppies";
        this.pro_list_data = [];
        this.achievement = true;
        this.productId = this.navParams.get('productId');
        this.managerId = this.navParams.get('managerId');
        this.productService.fetchDetail(this.productId).then(function (res) {
            console.log(res);
            _this.detailData = res;
            _this.decide_evaluable_code = res.evaluable_code;
            _this.newest_nav_value = res.newest_nav.value;
            //数据容错
            if (res.report.days == undefined || res.report.days.length == 0 || res.report.days == null) {
                _this.daily_return_status = false;
            }
            else {
                _this.daily_return = res.report;
            }
            console.log(_this.daily_return_status);
            //净值
            if (res.newest_nav.price_date) {
                _this.newest_nav_date = res.newest_nav.price_date.substr(5);
            }
            else {
                _this.newest_nav_date = '—';
            }
            _this.price_fluctuation_limit_value = res.price_fluctuation_limit.value;
            //是否可评测
            _this.disabledStatus(res.evaluable_code);
            //历史业绩列表
            _this.history_data = Object.assign([], res.report_historical_return_rate.data);
            //判断数据是否大于三条，
            if (_this.history_data.length > 3) {
                _this.history_data.length = 3;
            }
            //判断历史业绩是否有数据
            if (res.report_historical_return_rate.data.length == 0 || res.report_historical_return_rate.data == '') {
                _this.achievement = false;
            }
            else {
                _this.achievement = true;
            }
            console.log(res.report_historical_return_rate.data);
            _this.company_full_name = res.company_full_name;
            _this.current_managers_overview_name = res.current_managers_overview;
            _this.history_benchmark_name_name = res.report_historical_return_rate.benchmark_name;
            console.log(_this.current_managers_overview_name);
            _this.pro_list_data = ['日期', '本产品', '同类排名'];
        });
    }
    DetailPage.prototype.ngOnInit = function () {
        this.daily_return_status = true;
    };
    DetailPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    DetailPage.prototype.goReviewPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pk__["c" /* ReviewPage */], { 'productId': this.productId });
    };
    DetailPage.prototype.goPkPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pk__["b" /* PkSingleFundPage */], { 'productId': this.productId });
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        this.daily_return_status = true;
        this.loadingCtrl.loading("努力加载...");
    };
    DetailPage.prototype.ionViewDidEnter = function () {
        this.disabledStatus(this.decide_evaluable_code);
    };
    DetailPage.prototype.disabledStatus = function (decide_evaluable_code) {
        if (decide_evaluable_code != 200) {
            this.isdisabled = 'disabled';
        }
    };
    //基金档案
    DetailPage.prototype.goArchivesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__archives_archives__["a" /* ArchivesPage */], { 'productId': this.productId });
    };
    //基金经理
    DetailPage.prototype.goManagerPage = function (len) {
        if (len > 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__manager__["b" /* ManagerListPage */], { 'productId': this.productId });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__manager__["a" /* ManagerDetailPage */], { 'managerId': this.current_managers_overview_name[0]['id'], 'productId': this.productId });
        }
    };
    //投资组合
    DetailPage.prototype.goPortfoliosPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__portfolios_portfolios__["a" /* PortfoliosPage */], { 'productId': this.productId });
    };
    //loading more data
    DetailPage.prototype.loadingMore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__historical_historicalData__["a" /* HistoricalDataPage */], { 'productId': this.productId });
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/detail/detail.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n        {{ detailData.name }}<br><label>{{ detailData.code }}</label>\n    </ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only >\n          <img src="assets/image/icon-share.png" width="60%">\n        </button>\n    </ion-buttons>  \n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n\n\n    \n<!--Important areas-->\n\n<div class="title-box">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-1 (click)="goback()">\n                <ion-icon name="arrow-back"></ion-icon>\n            </ion-col>\n            <ion-col col-10>\n                <h4>{{ detailData.name }}</h4>\n                <p>{{ detailData.code }}</p>\n            </ion-col>\n            <ion-col col-1></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-4>\n                <h4 main-col>{{ newest_nav_value  }}</h4>\n                <p>最新净值({{ newest_nav_date }})</p>\n            </ion-col>\n            <ion-col col-4>\n                <span class="round">\n                    <label [ngClass]="{\'red-col\': price_fluctuation_limit_value > 0,\'green-col\': price_fluctuation_limit_value < 0}">{{ price_fluctuation_limit_value | formatPercentWithSymbol}}</label> \n                    <label>日涨跌幅(%)</label>\n                </span>\n            </ion-col>\n            <ion-col col-4>\n                <h5 red-col>{{  detailData.risk_level }}</h5>\n                <h5>{{ detailData.invest_class | FundsTypeSymbol }}</h5>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</div>\n\n<!-- type -->\n<div padding class="fund-type-list" [hidden]="!detailData.tags">\n    <span *ngFor="let item of detailData.tags">{{item}}</span>\n</div>\n\n<div class="sepline"></div>\n\n<!--Tabs-->\n<div paddingtop>\n<ion-toolbar>\n    <ion-segment [(ngModel)]="pet">\n        <ion-segment-button value="puppies" style="font-weight:normal">\n            收益率走势\n        </ion-segment-button>\n        <ion-segment-button value="kittens" style="font-weight:normal">\n            单位净值\n        </ion-segment-button>\n\n    </ion-segment>\n</ion-toolbar>\n</div>\n\n    <!--list-->\n    <div [ngSwitch]="pet">\n        <ion-list *ngSwitchCase="\'puppies\'">\n            <portfolio-history-graph *ngIf="daily_return_status" [daily-return]="daily_return" ></portfolio-history-graph>\n            <div class="no-text" *ngIf="!daily_return_status">本基金暂无收益率估算</div>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'kittens\'" style="text-align:center">\n            <net-worth-graph *ngIf="daily_return_status"  [daily-return]="daily_return" paddingtop></net-worth-graph>\n            <div class="no-text" *ngIf="!daily_return_status">本基金暂无净值估算</div>\n        </ion-list>\n    </div>  \n\n    <!-- Historical performance -->\n    <div class="history-data">\n        <h5>历史业绩</h5>\n        <ion-list>\n            <ion-row class="one-line">\n                <ion-col col-3>\n                        <p style="color:#666">日期</p>\n                </ion-col>\n                <ion-col col-3 center>\n                        <p>本产品</p>\n                </ion-col>\n                <ion-col col-3 center>\n                        <p style="text-overflow: ellipsis;overflow: hidden;\n                        white-space: nowrap;">{{history_benchmark_name_name}}</p>\n                </ion-col>\n                <ion-col col-3 right>\n                        <p>同类排名</p>\n                </ion-col>\n            </ion-row>\n            <div *ngIf= "achievement">\n                <ion-row *ngFor = "let data of history_data">\n                    <ion-col col-3 >\n                        <p>{{data.label}}</p>\n                    </ion-col>\n                    <ion-col col-3 center>\n                        <p [ngClass]="{\'red-col\' : data.product_return_rate > 0 ,\n                                        \'green-col\' : data.product_return_rate < 0}">{{data.product_return_rate  | formatPercent}}</p>\n                    </ion-col>\n                    <ion-col col-3 center>\n                        <p [ngClass]="{\'red-col\' : data.benchmark_return_rate > 0 ,\n                                        \'green-col\' : data.benchmark_return_rate < 0}">{{data.benchmark_return_rate | formatPercent}}</p>\n                    </ion-col>\n                    <ion-col col-3 right>\n                        <p>\n                            <span style="color:#333">{{data.rank_numerator}}</span><span>/{{data.rank_denominator}}</span>\n                        </p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-12>\n                        <button ion-button clear full (click)="loadingMore()">查看更多</button>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <p *ngIf= "!achievement" center padding>暂无数据哦···</p> \n        </ion-list>       \n    </div>\n\n    <div class="sepline"></div>\n\n    <!-- detail data -->\n    <div class="fund-list-detail">\n        <ion-list>\n                <button ion-item (click)= "goArchivesPage()">\n                    <ion-label>基金档案</ion-label>\n                    <ion-note item-end>基金概况、分红</ion-note>\n                </button>\n                <button ion-item (click)= "goPortfoliosPage()">\n                    <ion-label>投资组合</ion-label>\n                    <ion-note item-end></ion-note>\n                </button>\n                <button ion-item (click)= "goManagerPage(current_managers_overview_name.length)">\n                    <ion-label>基金经理</ion-label>\n                    <ion-note item-end \n                    *ngFor = "let current_name of current_managers_overview_name , let i = index">\n                        <label *ngIf="current_managers_overview_name.length == 1 ">\n                            {{current_name.name}}\n                        </label>\n                        <label *ngIf="current_managers_overview_name.length > 1 ">\n                            {{current_name.name}}\n                            <span *ngIf="current_managers_overview_name.length != i+1">、</span>\n                        </label>\n                    </ion-note>\n                </button>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>基金公司</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p>{{company_full_name}}</p>\n                    </ion-col>\n                </ion-row>\n                \n                <!-- <button ion-item>\n                    <ion-label>购买信息</ion-label>\n                    <ion-note item-end>申购、赎回流程/购买、赎回费率</ion-note>\n                </button> -->\n        </ion-list>       \n    </div>\n    <!-- Risk hints -->\n    <div class="risk-honts">\n        <ion-list>\n            <ion-row>\n                <ion-col col-12 center>\n                    <span>风险提示</span>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-12>\n                    <span>基金的过往业绩不预示其未来表现，相关数据仅提供参考，不构成建议投资建议。投资人请详阅基金合同和基金招募说明书，并自行承担投机基金的风险。</span>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-12 center>\n                    <span>数据来源：Wind数据库</span>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n   </div>\n</ion-content>\n\n<ion-footer>\n    <ion-row>\n        <ion-col col-4 center  >\n            <div>\n                <button [disabled] = "isdisabled"  [ngClass]="{\'pk\': isdisabled != \'disabled\', \'disabled\': isdisabled == \'disabled\' }" (click)="goPkPage()" ion-button full clear \n                    style="background-image:url(\'assets/image/detail-pk.png\'); background-repeat:no-repeat; background-position:center; background-size:22px; height:3.8rem;margin:0"></button>\n            </div>\n        </ion-col>\n        <ion-col col-8>\n                <button [ngClass]="{\'review-btn\': isdisabled != \'disabled\', \'redisabled\': isdisabled == \'disabled\' }" [disabled] = "isdisabled" ion-button full (click)="goReviewPage()">去评测</button>                                 \n        </ion-col>\n    </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/detail/detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services__["e" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services__["c" /* LoadingControllers */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pkSingleFund__ = __webpack_require__(491);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__pkSingleFund__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pkDoubleFund__ = __webpack_require__(492);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__pkDoubleFund__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review__ = __webpack_require__(493);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__review__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clients__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AboutPage } from '../about/about';

// import { ContactPage } from '../contact/contact';

// import { HomePage } from '../home/home';

var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__products__["b" /* ProductListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__clients__["a" /* ClientListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__user__["b" /* UserPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabsHideOnSubPages="true" tabTitle="首页" tabIcon="ios-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabsHideOnSubPages="true" tabTitle="自选" tabIcon="ios-add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabsHideOnSubPages="true" tabTitle="我的" tabIcon="ios-contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphics_graphics__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var REGEX_PHONE_NUMBER = new RegExp('^1[3|4|5|7|8]\\d{9}$|^0{6}\\d{5}$');
var REGEX_PASSWORD_NUMBER = new RegExp('^(?=.*\\d)(?=.*[a-zA-Z])\\w{8,}$');
var LoginPage = (function () {
    function LoginPage(viewCtrl, navCtrl, userService, translateService, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.translateService = translateService;
        this.toastCtrl = toastCtrl;
        this.canSubmit = false;
    }
    LoginPage.prototype.validate = function (showError) {
        if (showError === void 0) { showError = false; }
        this.error = null;
        var error = null;
        if (this.phoneNumber == null || this.phoneNumber == '' || this.password == null || this.password == '') {
            this.canSubmit = false;
            return false;
        }
        this.canSubmit = true;
        if (!REGEX_PHONE_NUMBER.test(this.phoneNumber)) {
            error = this.translateService.instant('login.incorrect_phone_number_format');
        }
        if (error) {
            if (showError)
                this.error = error;
            return false;
        }
        else {
            return true;
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.validate(true))
            return;
        return this.userService.login(this.phoneNumber, this.password)
            .then(function (res) {
            _this.canSubmit = false;
            _this.handleSuccess();
            _this.savePhone();
        }).catch(function (error) {
            _this.error = _this.translateService.instant('login.incorrect_phone_number_password');
        });
    };
    LoginPage.prototype.savePhone = function () {
        localStorage.setItem("PHOME", this.phoneNumber);
    };
    LoginPage.prototype.handleSuccess = function () {
        var toast = this.toastCtrl.create({
            message: '恭喜您登录成功',
            duration: 2000,
            position: 'top'
        });
        toast.present();
        setTimeout(this.toHomePage.bind(this), 1200);
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.toHomePage = function () {
        var currentNav = this.navCtrl;
        var rootNav = currentNav.parent || this.navCtrl;
        rootNav.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs__["a" /* TabsPage */]);
        if (currentNav.parent) {
            currentNav.remove(0, currentNav.length() - 1).then(function () {
                currentNav.pop({
                    direction: 'forward',
                    easing: 'linear',
                });
            });
        }
    };
    LoginPage.prototype.toRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__index__["c" /* RegisterPage */]);
    };
    LoginPage.prototype.toSmsCodeLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__index__["d" /* SMSLoginPage */]);
    };
    LoginPage.prototype.graph = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__graphics_graphics__["a" /* Graphics */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/landing/login.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="padding:0px 15px;">\n  <ion-list class="ion-list">\n    <div center><img src="assets/image/logo.png" class="logo"  /></div>\n    <ion-item>\n      <ion-label PingFang>{{ \'login.phone_number\' | translate }}</ion-label>\n      <ion-input type="number" [(ngModel)]="phoneNumber" (ngModelChange)="validate()" placeholder="{{ \'login.phone_number_placeholder\' | translate }}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label PingFang>{{ \'login.password\' | translate }}</ion-label>\n      <ion-input type="password" [(ngModel)]="password" (ngModelChange)="validate()" placeholder="{{ \'login.password_placeholder\'|translate }}"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class="error" padding>\n    {{error}}\n  </div>\n  <button ion-button full PingFang (click)="login()" [disabled]="!canSubmit">{{ \'login.login\' | translate }}</button>\n  <ion-row class="login-links">\n    <ion-col ico-6 blue-color (click)="toSmsCodeLoginPage()">\n        手机短信登录\n    </ion-col>\n    <ion-col ico-6 blue-color right (click)="toRegisterPage()">\n        {{ \'login.register\' | translate }}\n    </ion-col>\n    <!-- <ion-col ico-6 blue-color style="text-align:right; " (click)="graph()">\n      {{ \'login.forget_password\' | translate }}？\n    </ion-col> -->\n  </ion-row>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/landing/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services__["g" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tabs__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 264;

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArchivesPage = (function () {
    function ArchivesPage(navCtrl, el, navParams, productService, loadingCtrl, loadingCtrls) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.el = el;
        this.navParams = navParams;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.loadingCtrls = loadingCtrls;
        this.pet = "puppies";
        //判断分红是否有数据
        this.bonus_dividends = true;
        this.archivesData = {};
        this.invest_scope = {};
        this.invest_strategy = {};
        //展开收缩Icons
        this.iconImgs = {
            'downImg': 'assets/image/icon-arrow-down.png',
            'upImg': 'assets/image/icon-arrow-upward.png'
        };
        //展开收缩当前状态及icon路径
        this.modulesOverTextSatus = {
            'scope': false,
            'strategy': false,
            'scopeImgUrl': this.iconImgs.downImg,
            'strategyImgUrl': this.iconImgs.downImg,
        };
        this.loadingModule = Object;
        this.translateLoading = '';
        this.productId = this.navParams.get('productId');
        //loading
        var loadingModule = this.loadingCtrl.create({ content: '努力加载...' });
        loadingModule.present();
        //概况
        this.productService.fetchFundArchives(this.productId).then(function (res) {
            console.log(res);
            _this.archivesData = res.report_archive_general;
            //投资范围
            _this.invest_scope = res.report_archive_general.invest_scope;
            //投资策略
            _this.invest_strategy = res.report_archive_general.invest_strategy;
        }).catch(function (err) {
            //  console.log(err)
            if (err.http_status == 500) {
                _this.loadingCtrls.showToast('服务器错误，请稍后重试！', false);
                return false;
            }
        });
        // Close Loading
        loadingModule.dismiss();
        this.translateLoading = '努力加载...';
    }
    //展开收缩文字 false:收缩 true:展开
    ArchivesPage.prototype.textOmitted = function (mod) {
        //投资范围
        if (mod == 'scope') {
            this.modulesOverTextSatus.scope = !this.modulesOverTextSatus.scope;
            //为true更换Icon
            if (this.modulesOverTextSatus.scope) {
                this.modulesOverTextSatus.scopeImgUrl = this.iconImgs.upImg;
            }
            else {
                this.modulesOverTextSatus.scopeImgUrl = this.iconImgs.downImg;
            }
        }
        else if (mod == 'strategy') {
            this.modulesOverTextSatus.strategy = !this.modulesOverTextSatus.strategy;
            //为true更换Icon
            if (this.modulesOverTextSatus.strategy) {
                this.modulesOverTextSatus.strategyImgUrl = this.iconImgs.upImg;
            }
            else {
                this.modulesOverTextSatus.strategyImgUrl = this.iconImgs.downImg;
            }
        }
    };
    //是否加载分红数据
    ArchivesPage.prototype.loadingBonus = function () {
        var _this = this;
        //分红
        if (!this.dividend_data) {
            this.loadingCtrls.loading(this.translateLoading);
            this.productService.fetchFundArchivesDividend(this.productId).then(function (res) {
                console.log(res);
                // this.dividend_data = res
                if (res == null || res == '' || res.length == 0) {
                    _this.bonus_dividends = false;
                }
                else {
                    _this.dividend_data = res;
                }
            }).catch(function (err) {
                _this.loadingCtrls.showToast('服务器错误，请稍后重试！', false);
                return false;
            });
        }
    };
    return ArchivesPage;
}());
ArchivesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-archives',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/archives/archives.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            基金档案\n        </ion-title>\n    </ion-navbar>\n  </ion-header> \n\n<ion-content style="position: relative">\n    \n    <div class="banner-fixed">\n        <ion-toolbar style="padding: 0 4px;position:fixed">\n            <ion-segment [(ngModel)]="pet">\n                <ion-segment-button value="puppies">\n                    概况\n                </ion-segment-button>\n                <!-- <ion-segment-button value="kittens">\n                    公告\n                </ion-segment-button> -->\n                <ion-segment-button value="bonus" (click)= "loadingBonus()">\n                    分红\n                </ion-segment-button>\n            </ion-segment>\n        </ion-toolbar>\n    </div>\n                  \n    <!--概况-->\n    \n    <div [ngSwitch]="pet" class="fund-survey pList-scroll">\n        <ion-list *ngSwitchCase="\'puppies\'">\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>基金简称</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p>{{archivesData.name}}</p>\n                    </ion-col>\n                </ion-row> \n            </ion-item>\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>基金全称</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p>{{archivesData.full_name}}</p>\n                    </ion-col>\n                </ion-row> \n            </ion-item>\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                    <h5>成立日期</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                    <p>{{archivesData.setup_date | date:"yyyy.MM.dd"}}</p>\n                    </ion-col>\n                </ion-row> \n            </ion-item>\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>交易状态</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p>{{archivesData.purchase_redeem_display_info}}</p>\n                    </ion-col>\n                </ion-row> \n            </ion-item>\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>基金管理费</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p>{{archivesData.management_fee_ratio | formatPercent}}</p>\n                    </ion-col>\n                </ion-row> \n            </ion-item>\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>基金托管费率</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p>{{ archivesData.custodian_fee_ratio | formatPercent}}</p>\n                    </ion-col>\n                </ion-row> \n            </ion-item>\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>最新规模</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p>{{archivesData.total_net_assets_display_info}}</p>\n                    </ion-col>\n                </ion-row> \n            </ion-item>\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>最新份额</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p>{{archivesData.total_unit_display_info}}</p>\n                    </ion-col>\n                </ion-row> \n            </ion-item>\n            <ion-item>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>托管行</h5>\n                    </ion-col>\n                    <ion-col col-8 right>\n                        <p>{{archivesData.custodian_bank}}</p>\n                    </ion-col>\n                </ion-row> \n            </ion-item>\n            <!-- 背景灰色条 -->\n            <div class="spline"></div>  \n\n            <!-- 投资目标 -->\n            <div class="investment-target">\n                <h5>投资目标</h5>\n                <p class="invest-goal-content content">{{archivesData.invest_object}}</p>\n            </div>\n\n            <!-- 背景灰色条 -->\n            <div class="spline"></div>  \n\n            <!-- 投资范围 -->\n            <div class="investment-target">\n                <h5>投资范围</h5>\n                <div class="content" [ngClass]="{\'invest-scope-content \': !modulesOverTextSatus.scope}">\n                    <div>{{invest_scope.value}}</div>\n                    <div class="list" *ngFor="let item of invest_scope.children">\n                        <p>{{item.value}}</p>\n                        <div *ngFor= "let twoItem of item.children">\n                            <p>&nbsp;&nbsp;{{twoItem.value}}</p>\n                            <div *ngFor= "let threeItem of twoItem.children">\n                                <p>&nbsp;&nbsp;&nbsp;&nbsp;{{threeItem.value}}</p>\n                                <div *ngFor= "let fourItem of threeItem.children">\n                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{{fourItem.value}}</p>\n                                </div>\n                            </div>                                               \n                        </div>\n                    </div>\n                </div>  \n                <!-- 箭头 -->\n                <div center>\n                    <img  [src]=" modulesOverTextSatus.scopeImgUrl " style="width:16px;" (click)="textOmitted(\'scope\')">\n                </div>\n            </div>\n            <!-- 背景灰色条 -->\n            <div class="spline"></div>\n            <!-- 投资策略 -->\n            <div class="investment-target">\n                <ion-list>\n                    <ion-row>\n                        <ion-col>\n                            <h5>投资策略</h5>\n                        </ion-col>\n                        <ion-col col-12>\n                            <div class="content" [ngClass]="{\'invest-strategy-content\': !modulesOverTextSatus.strategy}">\n                                <div>{{invest_strategy.value}}</div>\n                                <div class="list" *ngFor="let item of invest_strategy.children">\n                                    <p>{{item.value}}</p>\n                                    <div *ngFor= "let twoItem of item.children">\n                                        <p>&nbsp;&nbsp;{{twoItem.value}}</p>\n                                        <div *ngFor= "let threeItem of twoItem.children">\n                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;{{threeItem.value}}</p>\n                                            <div *ngFor= "let fourItem of threeItem.children">\n                                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{fourItem.value}}</p>\n                                            </div>\n                                        </div>                                               \n                                    </div>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <!-- 箭头 -->\n                    <ion-row>\n                            <ion-col center>\n                                <img [src]=" modulesOverTextSatus.strategyImgUrl " style="width:16px;" (click)="textOmitted(\'strategy\')">\n                            </ion-col>\n                    </ion-row>  \n                </ion-list>\n            </div>\n    </ion-list>\n\n        <!-- 分红  -->\n    <ion-list *ngSwitchCase="\'bonus\'">\n            <div class="bonus-data">\n                <ion-list  *ngIf= "bonus_dividends">\n                    <div class="spline"></div>\n                    <ion-row style= " height: 3rem;">\n                        <ion-col col-4>\n                            <p>权益登记日</p>\n                        </ion-col>\n                        <ion-col col-4 center>\n                            <p>红利发放日</p>\n                        </ion-col>\n                        <ion-col col-4 right>\n                            <p style= " padding-right: 1rem; ">每份分红(元)</p>\n                        </ion-col>\n                    </ion-row>  \n                    <ion-row *ngFor= "let dividends of dividend_data" class="content-data">\n                        <ion-col col-4>\n                            <p>{{dividends.eqy_record_date | date:\'yyyy.MM.dd\'}}</p>\n                        </ion-col>\n                        <ion-col col-4 center>\n                                <p>{{dividends.pay_date | date:\'yyyy.MM.dd\'}}</p>\n                        </ion-col>\n                        <ion-col col-4 right>\n                                <p [ngClass]= " { \'red-color\' : dividends.cash_dvd_per_share > 0 } " center>{{dividends.cash_dvd_per_share | formatBonus}}</p>\n                        </ion-col>\n                    </ion-row>   \n                </ion-list>\n                <!-- 分红无数据显示的页面 -->\n                <ion-list *ngIf= "!bonus_dividends">\n                    <ion-row>\n                        <ion-col>\n                            <img right src="assets/image/icon-no-data.jpg" />\n                            <p center>暂时没有相关数据！</p>\n                        </ion-col>\n                    </ion-row>\n                </ion-list>\n            </div>\n        </ion-list>\n    </div> \n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/archives/archives.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services__["e" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__services__["c" /* LoadingControllers */]])
], ArchivesPage);

//# sourceMappingURL=archives.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__managerList__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__managerList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__managerDetail__ = __webpack_require__(314);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__managerDetail__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagerDetailPage = (function () {
    function ManagerDetailPage(navCtrl, navParams, productService, loadingCtrl, loadingCtrls) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.loadingCtrls = loadingCtrls;
        this.fund_managers_data = {};
        this.fund_date = true;
        //展开收缩Icons
        this.iconImgs = {
            'downImg': 'assets/image/icon-arrow-down.png',
            'upImg': 'assets/image/icon-arrow-upward.png'
        };
        //展开收缩当前状态及icon路径
        this.modulesOverTextSatus = {
            'scope': false,
            'scopeImgUrl': this.iconImgs.downImg,
        };
        this.detailModule = Object;
        this.translateLoading = '';
        this.managerId = this.navParams.get('managerId');
        this.productId = this.navParams.get('productId');
        console.log(this.managerId);
        console.log(this.productId);
        var detailModule = this.loadingCtrl.create({ content: '努力加载...' });
        detailModule.present();
        this.productService.fetchFundManagerDetail(this.managerId).then(function (res) {
            _this.fund_managers_data = res;
            _this.served_products_list = res.served_products_overview_list;
            console.log(res.served_products_overview_list);
            console.log(_this.productId);
            for (var _i = 0, _a = res.served_products_overview_list; _i < _a.length; _i++) {
                var item = _a[_i];
                if (_this.productId == item.product_id) {
                    _this.startTime = item.office_date;
                    _this.endTime = item.departure_date;
                }
            }
            console.log(_this.startTime);
            console.log(_this.fund_managers_data);
            console.log(_this.served_products_list);
        }).catch(function (err) {
            if (err.http_status == 500) {
                _this.loadingCtrls.showToast('服务器错误，请稍后重试！', false);
                return false;
            }
        });
        // Close Loading
        detailModule.dismiss();
        this.translateLoading = '努力加载...';
    }
    //展开收缩文字 false:收缩 true:展开
    ManagerDetailPage.prototype.textOmitted = function (mod) {
        //基金经理
        if (mod == 'scope') {
            this.modulesOverTextSatus.scope = !this.modulesOverTextSatus.scope;
            //为true更换Icon
            if (this.modulesOverTextSatus.scope) {
                this.modulesOverTextSatus.scopeImgUrl = this.iconImgs.upImg;
            }
            else {
                this.modulesOverTextSatus.scopeImgUrl = this.iconImgs.downImg;
            }
        }
    };
    return ManagerDetailPage;
}());
ManagerDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-manager-detail',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/manager/managerDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        基金经理\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item-sliding>\n            <ion-item>\n                <ion-avatar item-start>\n                        <img *ngIf= "fund_managers_data.gender == \'m\' " src="assets/image/icon-image-man.png" style="width:58px;height:58px;"/>\n                        <img *ngIf= "fund_managers_data.gender == \'f\' " src="assets/image/icon-image-woman.png" style="width:58px;height:58px;"/>\n                </ion-avatar>\n                <h2>{{fund_managers_data.name}}</h2>\n                <p>\n                    <span *ngIf="startTime != null">\n                        {{startTime | FundDetail | date:\'yyyy.MM.dd\'}}\n                    </span>\n                    <span *ngIf="startTime == null">\n                        {{startTime | FundDetail}}\n                    </span>\n                    -\n                    <span *ngIf="endTime != null">\n                        {{endTime | FundDetailTwo | date:\'yyyy.MM.dd\'}}\n                    </span>\n                    <span *ngIf="endTime == null">\n                        {{endTime | FundDetailTwo}}\n                    </span>\n                </p>\n              </ion-item>\n        </ion-item-sliding>\n        <ion-row>\n            <ion-col>\n                <p [ngClass]="{\'invest-scope-content \': !modulesOverTextSatus.scope}">{{fund_managers_data.resume}}</p>\n            </ion-col>\n        </ion-row>\n        <!-- 箭头 -->\n        <ion-row>\n            <ion-col center>\n                    <img [src]=" modulesOverTextSatus.scopeImgUrl " style="width:16px;" (click)="textOmitted(\'scope\')">\n            </ion-col>\n        </ion-row>  \n        <div class="spline"></div>\n        <div class="fund-manager-detail">\n            <ion-list>\n                <h5> {{fund_managers_data.name}}历任基金</h5>\n                <ion-item *ngFor="let served_list of served_products_list">\n                    <ion-row >\n                        <ion-col>\n                            <h6>{{served_list.product_full_name}}</h6>\n                            <p>\n                                <span *ngIf="served_list.office_date != null">\n                                        {{served_list.office_date | FundDetail | date:\'yyyy.MM.dd\'}}\n                                </span>\n                                <span *ngIf="served_list.office_date == null">\n                                        {{served_list.office_date | FundDetail }}\n                                </span>\n                                -\n                                <span *ngIf="served_list.departure_date != null">\n                                        {{served_list.departure_date | FundDetailTwo | date:\'yyyy.MM.dd\'}}\n                                </span>\n                                <span *ngIf="served_list.departure_date == null">\n                                    {{served_list.departure_date | FundDetailTwo}}\n                                </span>\n                            </p>\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n            </ion-list>\n        </div>\n    </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/manager/managerDetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services__["e" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__services__["c" /* LoadingControllers */]])
], ManagerDetailPage);

//# sourceMappingURL=managerDetail.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoricalDataPage = (function () {
    function HistoricalDataPage(navCtrl, navParams, productService, loadingCtrl, loadingCtrls) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.loadingCtrls = loadingCtrls;
        this.historyModule = Object;
        this.translateLoading = '';
        this.productId = this.navParams.get('productId');
        var historyModule = this.loadingCtrl.create({ content: '努力加载...' });
        historyModule.present();
        this.productService.fetchDetail(this.productId).then(function (res) {
            console.log(res);
            _this.history_data = res.report_historical_return_rate.data;
            _this.history_benchmark_name_name = res.report_historical_return_rate.benchmark_name;
        }).catch(function (err) {
            if (err.status == 500) {
                _this.loadingCtrls.showToast('服务器错误，请稍后重试！', false);
                return false;
            }
        });
        historyModule.dismiss();
        this.translateLoading = '努力加载...';
    }
    return HistoricalDataPage;
}());
HistoricalDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historical-data',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/historical/historicalData.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      历史业绩\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- Historical performance -->\n  <div>\n      <ion-list>\n            <ion-row>\n                <ion-col col-3>\n                        <p>日期</p>\n                </ion-col>\n                <ion-col col-3 center>\n                        <p>本产品</p>\n                </ion-col>\n                <ion-col col-3 center>\n                        <p style="text-overflow: ellipsis;overflow: hidden;\n                        white-space: nowrap;">{{history_benchmark_name_name}}</p>\n                </ion-col>\n                <ion-col col-3 right>\n                        <p>同类排名</p>\n                </ion-col>\n            </ion-row>\n          <ion-row *ngFor = "let data of history_data">\n              <ion-col col-3 >\n                  <p>{{data.label}}</p>\n              </ion-col>\n              <ion-col col-3 center>\n                  <p [ngClass]="{\'red-col\' : data.product_return_rate > 0 ,\n                                  \'green-col\' : data.product_return_rate < 0}">{{data.product_return_rate  | formatPercent}}</p>\n              </ion-col>\n              <ion-col col-3 center>\n                  <p [ngClass]="{\'red-col\' : data.benchmark_return_rate > 0 ,\n                                  \'green-col\' : data.benchmark_return_rate < 0}">{{data.benchmark_return_rate | formatPercent}}</p>\n              </ion-col>\n              <ion-col col-3 right>\n                  <p>\n                      <span style="color:#333">{{data.rank_numerator}}</span>\n                      <span>/{{data.rank_denominator}}</span>\n                  </p>\n              </ion-col>\n          </ion-row>\n          \n      </ion-list>  \n      \n      <ion-row>\n          <ion-col>\n              <img src="assets/image/icon-light.png" alt="" style="height:14px;">\n              <span>过往业绩不代表未来业绩，投资有风险购买需谨慎</span>\n          </ion-col>\n      </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/historical/historicalData.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services__["e" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__services__["c" /* LoadingControllers */]])
], HistoricalDataPage);

//# sourceMappingURL=historicalData.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfoliosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfoliosPage = (function () {
    function PortfoliosPage(navCtrl, navParams, productService, loadingCtrl, loadingCtrls) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.loadingCtrls = loadingCtrls;
        //判断是否有数据
        this.judgementData = true;
        this.portfoliosModule = Object;
        this.translateLoading = '';
        this.productId = this.navParams.get('productId');
        var portfoliosModule = this.loadingCtrl.create({ content: '努力加载...' });
        portfoliosModule.present();
        this.productService.fetchFundPortfolios(this.productId).then(function (res) {
            console.log(res);
            if (res == null || res.length == 0 || res == '') {
                _this.judgementData = false;
            }
            else {
                //股票比例
                _this.stockToTotal = res.stock_to_total;
                //债券比例
                _this.bondToTotal = res.bond_to_total;
                //现金比例
                _this.cashToTotal = res.cash_to_total;
                //其他比例
                _this.otherToTotal = res.other_to_total;
                //日期
                _this.endDate = res.end_date;
                //重仓股票数据
                _this.stockPortfolios = res.stock_portfolios;
            }
        }).catch(function (err) {
            //  console.log(err)
            if (err.http_status == 500) {
                _this.loadingCtrls.showToast('服务器错误，请稍后重试！', false);
                return false;
            }
        });
        // Close Loading
        portfoliosModule.dismiss();
        this.translateLoading = '努力加载...';
    }
    return PortfoliosPage;
}());
PortfoliosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-portfolios',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/portfolios/portfolios.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            投资组合\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n      \n<ion-content>\n    <div class="have-portfolio-date" *ngIf= "judgementData">\n        <div class="quarterly-report">最新季度报({{endDate | date:"yyyy.MM.dd"}}) </div>\n        <!-- 背景灰色条 -->\n        <div class="spline"></div>\n        <!-- 股票  -->\n        <ion-list>\n            <ion-row class="headlines-title">\n                <ion-col col-8>\n                    <h5>股票</h5>\n                </ion-col>\n                <ion-col col-4 right>\n                    <h6>{{stockToTotal | formatPercent}}</h6>\n                </ion-col>\n            </ion-row>\n            <ion-item class="list-detail fund-name" style="height:33px">\n                <ion-row class="table-header">\n                    <ion-col col-9>重仓股票名称</ion-col>\n                    <ion-col col-3 right>占净值比例</ion-col>\n                </ion-row>\n            </ion-item>\n            <!-- 重仓股票数据 -->\n            <ion-item class="list-detail" *ngFor= "let item of stockPortfolios" style="height:52px">\n                <ion-row class="fund-list-detail">\n                    <ion-col col-9>\n                        <h5 style= "margin-bottom:0;">{{item.hold_product_name}}</h5>\n                        <p>{{item.hold_product_code}}</p>\n                    </ion-col>\n                    <ion-col col-3 right>{{item.value_to_nav | formatPercent}}</ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-list>\n        <div class="spline"></div>\n        <!-- 债券  -->\n        <ion-list>\n            <ion-row class="headlines-title">\n                <ion-col col-8>\n                    <h5>债券</h5>\n                </ion-col>\n                <ion-col col-4 right>\n                    <h6>{{bondToTotal | formatPercent}}</h6>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n        <div class="spline"></div>\n        <!-- 现金  -->\n        <ion-list>\n            <ion-row class="headlines-title">\n                <ion-col col-8>\n                    <h5>现金</h5>\n                </ion-col>\n                <ion-col col-4 right>\n                    <h6>{{cashToTotal | formatPercent}}</h6>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n        <div class="spline"></div>\n        <!-- 其他  -->\n        <ion-list>\n            <ion-row class="headlines-title">\n                <ion-col col-8>\n                    <h5>其他</h5>\n                </ion-col>\n                <ion-col col-4 right>\n                    <h6>{{otherToTotal | formatPercent}}</h6>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n        <div class="spline"></div>\n    </div>\n    <div class="no-portfolio-date" *ngIf= "!judgementData">  \n        <img right src="assets/image/icon-no-data.jpg" />\n        <p center>暂时没有相关数据！</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/portfolios/portfolios.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services__["e" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__services__["c" /* LoadingControllers */]])
], PortfoliosPage);

//# sourceMappingURL=portfolios.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientListPage = (function () {
    function ClientListPage(navCtrl, NavParams, productService) {
        this.navCtrl = navCtrl;
        this.NavParams = NavParams;
        this.productService = productService;
        this.listData = [{ name: '景顺长城大中华', code: "262001", level: "S" },
            { name: '建信稳定得利A', code: "000875", level: "A" },
            { name: '华夏保证金B', code: "519801", level: "A" }];
        //获取参数 ProductId
        this.getParamProductId = this.NavParams.get("productId");
        this.productService.fetchFundClientList(this.getParamProductId).then(function (res) {
            console.log(res);
        });
        var params = NavParams.data;
        if (params.code) {
            this.listData.push({ name: params.name, code: params.code, level: params.level });
        }
    }
    ClientListPage.prototype.gotoSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */], { "form": "addfund" });
    };
    ClientListPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return ClientListPage;
}());
ClientListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-client-list',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/clients/client-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      自选\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only >\n          <ion-icon name="create-outline"></ion-icon>\n        </button>\n    </ion-buttons>  \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#F9F9F9; font-family: \'PingFangSC-Regular, PingFang SC\';">\n\n    <!--Stage performance-->\n<div class="fund-stage-performance">\n        <ion-row style="font-weight:bold;" >\n            <ion-col col-3 style="padding-top:15px; padding-bottom:15px; ">\n                    推荐度 \n            </ion-col>\n            <ion-col col-3 style="padding-top:15px; padding-bottom:15px;">\n                    基金名称\n            </ion-col>\n            <ion-col col-3 style="padding-top:15px; padding-bottom:15px;">\n                    日涨跌幅\n            </ion-col>\n            <ion-col col-3 style="padding-top:15px; padding-bottom:15px;">\n                    净值\n            </ion-col>\n        </ion-row> \n        <ion-row *ngFor="let item of listData">\n            <ion-col col-3 style="font-size:1.5rem; padding-top:15px; padding-left:10%; text-align:left; font-family:\'Geometric415BT-BlackA, Geometr415 Blk BT\'">\n              {{item.level}}\n            </ion-col>\n            <ion-col col-3>\n                    {{item.name}}<br><label class="greg">{{item.code}}</label>                 \n            </ion-col>\n            <ion-col col-3>\n                    <label class="red">6.79%</label><br><span class="greg">2262001</span>  \n            </ion-col>\n            <ion-col col-3 style="color:#666666; padding-top:15px;">\n                3/100\n            </ion-col>\n        </ion-row>  \n    </div> \n    \n<!-- \n\n        <svg width="375px" height="598px" viewBox="0 0 375 598" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n            <desc>Created with Sketch.</desc>\n            <defs>\n                <rect id="path-1" x="0" y="-19" width="375" height="64"></rect>\n                <filter x="-0.1%" y="-0.4%" width="100.1%" height="100.8%" filterUnits="objectBoundingBox" id="filter-2">\n                    <feOffset dx="0" dy="-0.5" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>\n                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>\n                    <feColorMatrix values="0 0 0 0 0.945098039   0 0 0 0 0.945098039   0 0 0 0 0.945098039  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>\n                </filter>\n                <rect x="341" y="15" width="18" height="18" id="rect-3"></rect>\n            </defs>\n            <g id="理财" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                <g id="加入理财计划-copy">\n                    <rect id="Rectangle-8" fill="#FFFFFF" x="0" y="-19" width="375" height="64"></rect>\n                    <rect id="Rectangle-8" fill="#FFFFFF" x="0" y="45" width="375" height="553"></rect>\n                    <g id="Rectangle-3">\n                        <use fill="#0088FF" fill-rule="evenodd" xlink:href="#path-1"></use>\n                        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>\n                    </g>\n                 \n                    <text id="自选" font-family="PingFangSC-Regular, PingFang SC" font-size="18" font-weight="normal" letter-spacing="1" fill="#FFFFFF">\n                        <tspan x="168" y="30">自选</tspan>\n                    </text>\n                    <rect id="Rectangle-38" fill="#F9F9F9" x="0" y="91" width="375" height="44"></rect>\n                    <rect id="Rectangle-8" fill="#FFFFFF" x="0" y="45" width="375" height="44"></rect>\n                    <text id="推荐度" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" fill="#333333">\n                        <tspan x="16" y="72">推荐度</tspan>\n                    </text>\n                    <text id="B" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" fill="#666666">\n                        <tspan x="32" y="118">B</tspan>\n                    </text>\n                    <text id="B-Copy" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" fill="#666666">\n                        <tspan x="32" y="167">B</tspan>\n                    </text>\n                    <text id="景顺大中华" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal">\n                        <tspan x="103" y="108" fill="#333333">景顺大中华</tspan>\n                        <tspan x="163" y="108" fill="#666666"></tspan>\n                    </text>\n                    <text id="景顺大中华-copy" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal">\n                        <tspan x="103" y="157" fill="#333333">景顺大中华</tspan>\n                        <tspan x="163" y="157" fill="#666666"></tspan>\n                    </text>\n                    <text id="1.6790" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal" fill="#666666">\n                        <tspan x="316" y="117">1.6790</tspan>\n                    </text>\n                    <text id="1.6790-copy" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal" fill="#666666">\n                        <tspan x="316" y="166">1.6790</tspan>\n                    </text>\n                    <text id="6.79%" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal" fill="#FA374F">\n                        <tspan x="215" y="108">6.79%</tspan>\n                    </text>\n                    <text id="01-25" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal">\n                        <tspan x="215" y="128" fill="#999CA7">01-25</tspan>\n                        <tspan x="248.672" y="128" fill="#666666"></tspan>\n                    </text>\n                    <text id="-6.79%" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal" fill="#3CB054">\n                        <tspan x="215" y="155">-6.79%</tspan>\n                    </text>\n                    <text id="01-25" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal">\n                        <tspan x="215" y="175" fill="#999CA7">01-25</tspan>\n                        <tspan x="248.672" y="175" fill="#666666"></tspan>\n                    </text>\n                    <text id="基金名称" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" fill="#333333">\n                        <tspan x="105" y="72">基金名称</tspan>\n                    </text>\n                    <text id="日涨跌幅" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" fill="#333333">\n                        <tspan x="205" y="72">日涨跌幅</tspan>\n                    </text>\n                    <text id="净值" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" fill="#333333">\n                        <tspan x="321" y="72">净值</tspan>\n                    </text>\n                    <text id="262001" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal" fill="#999CA7">\n                        <tspan x="112" y="128">262001</tspan>\n                    </text>\n                    <rect id="Rectangle-38" fill="#F9F9F9" x="0" y="189" width="375" height="44"></rect>\n                    <text id="B" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" fill="#666666">\n                        <tspan x="32" y="216">B</tspan>\n                    </text>\n                    <text id="景顺大中华" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal">\n                        <tspan x="103" y="206" fill="#333333">景顺大中华</tspan>\n                        <tspan x="163" y="206" fill="#666666"></tspan>\n                    </text>\n                    <text id="1.6790" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal" fill="#666666">\n                        <tspan x="316" y="215">1.6790</tspan>\n                    </text>\n                    <text id="6.79%" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal" fill="#FA374F">\n                        <tspan x="215" y="206">6.79%</tspan>\n                    </text>\n                    <text id="01-25" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal">\n                        <tspan x="215" y="226" fill="#999CA7">01-25</tspan>\n                        <tspan x="248.672" y="226" fill="#666666"></tspan>\n                    </text>\n                    <text id="262001" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal" fill="#999CA7">\n                        <tspan x="112" y="226">262001</tspan>\n                    </text>\n                    <text id="262001-copy" font-family="PingFangSC-Regular, PingFang SC" font-size="12" font-weight="normal" fill="#999CA7">\n                        <tspan x="112" y="177">262001</tspan>\n                    </text>\n                </g>\n            </g>\n        </svg> -->\n\n\n</ion-content>\n\n<ion-footer>\n        <button ion-button full (click)="gotoSearchPage()">添加基金</button>\n        \n</ion-footer>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/clients/client-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services__["e" /* ProductService */]])
], ClientListPage);

//# sourceMappingURL=client-list.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_list__ = __webpack_require__(317);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__client_list__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(497);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile__ = __webpack_require__(320);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__profile__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(app, navCtrl, alertCtrl, translateService, userService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.userService = userService;
        // this.userService.fetchDetail()
        //   .then(res => {
        //     this.user = res;
        //   })
    }
    ProfilePage.prototype.confirmLogout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '',
            message: this.translateService.instant('profile.log_out_confirm'),
            buttons: [
                {
                    text: this.translateService.instant('common.button.cancel'),
                    handler: function () {
                    }
                },
                {
                    text: this.translateService.instant('common.button.ok'),
                    handler: function () {
                        _this.userService.logout();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__landing__["a" /* LandingPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/user/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{ \'profile.title\' | translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngIf="user != null" class="profile-list">\n    <ion-item>\n        <span class="profile-name">{{ \'profile.name\' | translate }}</span>\n        <span class="profile-value">{{ user.real_name }}</span>\n    </ion-item>\n    <ion-item>\n      <span class="profile-name">{{ \'profile.phone_number\' | translate }}</span>\n      <span class="profile-value">{{ user.phone }}</span>\n    </ion-item>\n    <ion-item>\n        <span class="profile-name">{{ \'profile.email\' | translate }}</span>\n        <span class="profile-value">{{ user.email }}</span>\n    </ion-item>\n  </ion-list>\n\n  <ion-footer>\n      <button ion-button class="logout" full (click)="confirmLogout()">{{ \'profile.log_out\' | translate }}</button>\n  </ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/user/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__services__["g" /* UserService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(appCtrl, viewCtrl, navCtrl, userService, toastCtrl) {
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.canSubmit = false;
        this.fetchingCode = false;
        this._interval_id = null;
        this.timeCount = 0;
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    RegisterPage.prototype.validate = function (showError) {
        if (showError === void 0) { showError = false; }
        this.error = null;
        var error = null;
        if (this.phoneNumber == null || this.phoneNumber == '' || this.code == null || this.code == '' || this.password == null || this.password == '') {
            this.canSubmit = false;
            return false;
        }
        this.canSubmit = true;
        if (!__WEBPACK_IMPORTED_MODULE_5__common__["d" /* REGEX_PHONE_NUMBER */].test(this.phoneNumber)) {
            error = '手机号格式不正确';
        }
        else if (!__WEBPACK_IMPORTED_MODULE_5__common__["b" /* REGEX_PASSWORD_NUMBER */].test(this.password)) {
            error = '密码至少8位，包含数字和字母';
        }
        else if (!__WEBPACK_IMPORTED_MODULE_5__common__["c" /* REGEX_PHONE_CODE */].test(this.code)) {
            error = '验证码格式不正确';
        }
        if (error) {
            if (showError)
                this.error = error;
            return false;
        }
        else {
            return true;
        }
    };
    RegisterPage.prototype.fetchSMSCode = function () {
        var _this = this;
        if (this.phoneNumber == null || this.phoneNumber == '') {
            this.error = '请输入手机号';
            return;
        }
        else if (!__WEBPACK_IMPORTED_MODULE_5__common__["d" /* REGEX_PHONE_NUMBER */].test(this.phoneNumber)) {
            this.error = '手机号格式不正确';
            return;
        }
        //获取SMSCode
        this.userService.fetchRegisterSMSCode(this.phoneNumber)
            .then(function (res) {
            // Toast
            var smsToast = _this.toastCtrl.create({
                message: '已发送,请查收！',
                duration: 2000,
                position: 'middle'
            });
            smsToast.present();
            _this.fetchingCode = true;
            _this.timeCount = 60;
            _this._interval_id = setInterval(_this.timeCounter.bind(_this), 1000);
        })
            .catch(this.handleError);
    };
    RegisterPage.prototype.timeCounter = function () {
        this.timeCount--;
        if (this.timeCount <= 0) {
            clearInterval(this._interval_id);
            this.fetchingCode = false;
        }
    };
    RegisterPage.prototype.register = function () {
        if (!this.validate(true))
            return;
        return this.userService.register(this.phoneNumber, this.password, this.code)
            .then(this.handleSuccess).catch(this.handleError);
    };
    RegisterPage.prototype.handleError = function (error) {
        var errorMessage = __WEBPACK_IMPORTED_MODULE_5__common__["a" /* MAP_ERROR_CODE */][error.error_code];
        if (error.error_fields.code) {
            errorMessage = '验证码不正确或已经过期';
        }
        this.error = errorMessage || '系统错误';
    };
    RegisterPage.prototype.handleSuccess = function () {
        var toast = this.toastCtrl.create({
            message: '恭喜你注册成功，已经为你登录',
            duration: 2000,
            position: 'top'
        });
        toast.present();
        setTimeout(this.toLoginPage.bind(this), 1000);
    };
    RegisterPage.prototype.toLoginPage = function () {
        // this.navCtrl.push(LoginPage)
        this.navCtrl.pop();
    };
    RegisterPage.prototype.toHomePage = function () {
        var currentNav = this.navCtrl;
        var rootNav = currentNav.parent || this.navCtrl;
        rootNav.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs__["a" /* TabsPage */]);
        if (currentNav.parent) {
            currentNav.remove(0, currentNav.length() - 1).then(function () {
                currentNav.pop({
                    direction: 'forward',
                    easing: 'linear',
                });
            });
        }
    };
    RegisterPage.prototype.toPasswordLoginPage = function () {
        var previous = this.navCtrl.getPrevious();
        if (previous.instance instanceof __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]) {
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]);
        }
    };
    RegisterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'register-page',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/landing/register.html"*/'<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-title>\n        <img src="../../assets/image/logo.png">\n    </ion-title>\n    <ion-list class="ion-list">\n        <ion-item>\n            <ion-label PingFang><span>手机号</span></ion-label>\n            <ion-input type="number" [(ngModel)]="phoneNumber" (ngModelChange)="validate()" placeholder="请输入您的手机号码"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label PingFang><span>验证码</span></ion-label>\n            <ion-input type="number" [(ngModel)]="code" (ngModelChange)="validate()" placeholder="请输入验证码"></ion-input>\n            <button ion-button PingFang item-right (click)="fetchSMSCode()"  [disabled]="fetchingCode">{{fetchingCode?timeCount+\'秒\':\'获取验证码\'}}</button>\n        </ion-item>\n        <ion-item>\n            <ion-label PingFang><span>密码</span></ion-label>\n            <ion-input type="password" [(ngModel)]="password" (ngModelChange)="validate()" placeholder="6-12位英文数字组合"></ion-input>\n        </ion-item>\n    </ion-list>\n    <div class="error" padding>\n        {{error}}\n    </div>\n    <button ion-button full PingFang (click)="register()" [disabled]="!canSubmit" class="stand-button">注册</button> \n</ion-content>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/landing/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services__["g" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REGEX_PHONE_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REGEX_PASSWORD_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REGEX_PHONE_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAP_ERROR_CODE; });
var REGEX_PHONE_NUMBER = new RegExp('^1[3|4|5|7|8][0-9]\\d{8}$|^0{6}\\d{5}$');
var REGEX_PASSWORD_NUMBER = new RegExp('^(?=.*\\d)(?=.*[a-zA-Z])\\w{8,}$');
var REGEX_PHONE_CODE = new RegExp('^\\d{6}$');
var MAP_ERROR_CODE = {
    phone_unregistered: '手机号没有注册',
    login_failed_error: '手机,验证码有误,请重试',
    serializer_validation_error: '提交的数据有误',
    phone_registered: '该手机号已被注册过了',
    user_has_active_phone: '您已经用这个手机号注册过了一次',
    phone_verification_error: '验证码不正确或已经过期，请尝试重新发送验证码',
    phone_not_found: '请先发送验证码到这个手机号',
    phone_verification_send_failed: '无法发送短信，请联系弥财支持团队',
    incorrect_password: '密码不正确',
    invalid_invite_code: '输入的邀请码不存在',
    account_inactive: '您的试用账户已过期，如果需要重新获得授权登录，请与弥财公司联系(support@micaiapp.com)',
};
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(420);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_landing__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_products__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_clients__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_user__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_search_search__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_graphics_graphics__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_archives_archives__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_manager__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_historical_historicalData__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_portfolios_portfolios__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_pk__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule(translate) {
        this.translate = translate;
        //translate
        var browserLang = translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|cn/) ? browserLang : 'cn');
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_graphics_graphics__["a" /* Graphics */],
            __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing__["a" /* LandingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing__["b" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing__["d" /* SMSLoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing__["c" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_products__["b" /* ProductListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_products__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pk__["b" /* PkSingleFundPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pk__["a" /* PkDoubleFundPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pk__["c" /* ReviewPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_clients__["a" /* ClientListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_user__["b" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_user__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_26__component__["a" /* DonutComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["i" /* RadarGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["e" /* MeterGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["c" /* MeterCompareGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["d" /* MeterComparesGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["g" /* PolyLineGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["b" /* ExpectGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["h" /* PortfolioHisotryGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["f" /* NetWorthGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["r" /* TransAssetPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["o" /* RaPercentPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["e" /* FormatNumberPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["f" /* FormatNumberWithSymbolPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["c" /* FormatMoneyPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["d" /* FormatMoneyWithSymbolPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["b" /* FormatDatePipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["g" /* FormatPercentPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["h" /* FormatPercentWithSymbolPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["s" /* TransTradeTypePipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["j" /* FractionPartPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["m" /* FundsTypeSymbolPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["p" /* SplitSymbolFirstPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["q" /* SplitSymbolLastPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["a" /* DecimalPointOnePipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["n" /* IntegerPipe */],
            __WEBPACK_IMPORTED_MODULE_19__pages_archives_archives__["a" /* ArchivesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_manager__["b" /* ManagerListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_manager__["a" /* ManagerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_historical_historicalData__["a" /* HistoricalDataPage */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["k" /* FundDetailPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["l" /* FundDetailtwoPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes__["i" /* FormatbounsPipe */],
            __WEBPACK_IMPORTED_MODULE_22__pages_portfolios_portfolios__["a" /* PortfoliosPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                backButtonText: ''
            }, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_8__pages_landing__["a" /* LandingPage */], name: 'Landing', segment: 'landing' },
                    { component: __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                    { component: __WEBPACK_IMPORTED_MODULE_9__pages_products__["b" /* ProductListPage */], name: 'ProductList', segment: 'product-list' },
                    { component: __WEBPACK_IMPORTED_MODULE_10__pages_clients__["a" /* ClientListPage */], name: 'ClientList', segment: 'client-list' },
                    { component: __WEBPACK_IMPORTED_MODULE_11__pages_user__["b" /* UserPage */], name: 'User', segment: 'user' },
                    { component: __WEBPACK_IMPORTED_MODULE_11__pages_user__["a" /* ProfilePage */], name: 'Profile', segment: 'profile' },
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_graphics_graphics__["a" /* Graphics */],
            __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing__["a" /* LandingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing__["b" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing__["d" /* SMSLoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing__["c" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_products__["b" /* ProductListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_products__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pk__["b" /* PkSingleFundPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pk__["a" /* PkDoubleFundPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pk__["c" /* ReviewPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_clients__["a" /* ClientListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_user__["b" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_user__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_26__component__["a" /* DonutComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["i" /* RadarGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["e" /* MeterGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["c" /* MeterCompareGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["d" /* MeterComparesGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["g" /* PolyLineGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["b" /* ExpectGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["h" /* PortfolioHisotryGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component__["f" /* NetWorthGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_archives_archives__["a" /* ArchivesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_manager__["b" /* ManagerListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_manager__["a" /* ManagerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_historical_historicalData__["a" /* HistoricalDataPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_portfolios_portfolios__["a" /* PortfoliosPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6__services__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["g" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["e" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* LoadingControllers */],
            __WEBPACK_IMPORTED_MODULE_6__services__["b" /* InjectableService */]
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(apiService) {
        this.apiService = apiService;
    }
    UserService.isLogin = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */].getUserToken() != null);
    };
    //获取注册SMSCode
    UserService.prototype.fetchRegisterSMSCode = function (phoneNumber) {
        var url = '/v1/users/register/';
        return this.apiService.postJSON(url, {
            phone: phoneNumber
        });
    };
    //获取登录SMSCode
    UserService.prototype.fetchLoginSMSCode = function (phoneNumber) {
        var url = '/v1/users/login/';
        return this.apiService.postJSON(url, {
            phone: phoneNumber
        });
    };
    //SMS登录接口
    UserService.prototype.smsLogin = function (phone, code) {
        return this.apiService.postJSON('/v1/users/login/', { phone: phone, code: code }).then(function (res) {
            var token = res.token, user_id = res.user_id;
            __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */].setUserToken(token);
            return { token: token, user_id: user_id };
        });
    };
    //登录接口
    UserService.prototype.login = function (phone, password) {
        return this.apiService.postJSON('/v1/users/password_login/', { phone: phone, password: password }).then(function (res) {
            var token = res.token, user_id = res.user_id;
            __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */].setUserToken(token);
            return { token: token, user_id: user_id };
        });
    };
    //注册接口
    UserService.prototype.register = function (phone, password, code) {
        return this.apiService.postJSON('/v1/users/register/', { phone: phone, password: password, code: code }).then(function (res) {
            var token = res.token, user_id = res.user_id;
            __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */].setUserToken(token);
            return { token: token, user_id: user_id };
        });
    };
    //退出登录
    UserService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */].clearUserToken();
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
], UserService);

//# sourceMappingURL=UserService.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(apiService) {
        this.apiService = apiService;
    }
    //搜索
    ProductService.prototype.fetchSearchList = function (key) {
        return this.apiService.getJSON("/v1/products/?search=" + key);
    };
    //获取产品详情
    ProductService.prototype.fetchDetail = function (productId) {
        return this.apiService.getJSON("/v1/products/" + productId + "/");
    };
    //产品列表
    ProductService.prototype.fetchProductList = function () {
        return this.apiService.getJSON("/v1/products/").then(function (res) {
            return res;
        });
    };
    //高收益Top10
    ProductService.prototype.fetchHighReturns = function () {
        return this.apiService.getJSON("/v1/products/high_returns").then(function (res) {
            return res;
        });
    };
    //低风险Top10
    ProductService.prototype.fetchLowRisks = function () {
        return this.apiService.getJSON("/v1/products/low_risks").then(function (res) {
            return res;
        });
    };
    //热门搜索
    ProductService.prototype.fetchHotSearches = function () {
        return this.apiService.getJSON("/v1/products/hot_searches").then(function (res) {
            return res;
        });
    };
    //评测页、PK
    ProductService.prototype.fetchFundInfo = function (productId) {
        return this.apiService.getJSON("/v1/products/" + productId + "/evaluating/").then(function (res) {
            return res;
        });
    };
    //基金档案  概括
    ProductService.prototype.fetchFundArchives = function (productId) {
        return this.apiService.getJSON("/v1/products/" + productId + "/archive/general/").then(function (res) {
            return res;
        });
    };
    //基金档案  分红
    ProductService.prototype.fetchFundArchivesDividend = function (productId) {
        return this.apiService.getJSON("/v1/products/" + productId + "/archive/dividend/").then(function (res) {
            return res;
        });
    };
    //基金经理详情
    ProductService.prototype.fetchFundManagerDetail = function (managerId) {
        return this.apiService.getJSON("/v1/manager/" + managerId + "/").then(function (res) {
            return res;
        });
    };
    //基金经理列表
    ProductService.prototype.fetchFundManagerList = function (productId) {
        return this.apiService.getJSON("/v1/products/" + productId + "/managers").then(function (res) {
            return res;
        });
    };
    //投资组合
    ProductService.prototype.fetchFundPortfolios = function (productId) {
        return this.apiService.getJSON("/v1/products/" + productId + "/portfolio/").then(function (res) {
            return res;
        });
    };
    //收藏借口
    ProductService.prototype.fetchFundClientList = function (productId) {
        return this.apiService.getJSON("/v1/products/" + productId + "/collections/").then(function (res) {
            return res;
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
], ProductService);

//# sourceMappingURL=ProductService.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingControllers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingControllers = (function () {
    function LoadingControllers(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    // Loading Module
    LoadingControllers.prototype.loading = function (keyWord) {
        var loader = this.loadingCtrl.create({
            content: keyWord,
            duration: 500
        });
        loader.present();
    };
    // Toast Module
    LoadingControllers.prototype.showToast = function (keyWord, position) {
        var toast = this.toastCtrl.create({
            message: keyWord,
            duration: 2000,
            position: position || 'middle'
        });
        toast.present();
    };
    return LoadingControllers;
}());
LoadingControllers = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], LoadingControllers);

//# sourceMappingURL=LoadingControllers.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InjectableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InjectableService = (function () {
    function InjectableService(apiService) {
        this.apiService = apiService;
    }
    InjectableService.prototype.global = function () {
        return { "dome": "111" };
    };
    return InjectableService;
}());
InjectableService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
], InjectableService);

//# sourceMappingURL=InjectableService.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_products__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_landing__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, toastCtrl) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        __WEBPACK_IMPORTED_MODULE_4__services__["f" /* UnauthorizationSubject */].subscribe({
            next: function (res) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_landing__["a" /* LandingPage */];
            }
        });
        __WEBPACK_IMPORTED_MODULE_4__services__["d" /* OfflineSubject */].subscribe({
            next: function (res) {
                var toast = _this.toastCtrl.create({
                    position: 'top',
                    message: '连接失败，请检查你的网络设置',
                    cssClass: 'offline',
                    duration: 2000,
                });
                toast.present();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            __WEBPACK_IMPORTED_MODULE_4__services__["g" /* UserService */].isLogin().then(function (f) {
                // console.log(f)
                if (f) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_products__["b" /* ProductListPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_landing__["a" /* LandingPage */];
                }
            });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphics_graphics__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_detail__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductListPage = (function () {
    function ProductListPage(navCtrl, loadingCtrl, loadingCtrls, translate, productService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loadingCtrls = loadingCtrls;
        this.translate = translate;
        this.productService = productService;
        this.param = "";
        this.pet = "puppies";
        this.loaderModule = Object;
        this.translateLoading = "";
        // translate
        translate.get('prompt.loading').subscribe(function (res) {
            // Loading
            var loaderModule = _this.loadingCtrl.create({ content: res });
            loaderModule.present();
            // Get Product List
            _this.productService.fetchHighReturns().then(function (res) {
                // console.log(res)
                _this.highReturnsList = res.results;
            }).catch(function (err) {
                //  console.log(err)
                if (err.http_status == 500) {
                    _this.loadingCtrls.showToast('服务器错误，请稍后重试！', false);
                    return false;
                }
            });
            // Close Loading
            loaderModule.dismiss();
            _this.translateLoading = res;
        });
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        // this.loadingCtrls.loading("努力加载...");
        // this.loadingCtrl.showToast("删除成功！",false)
        // this.presentLoading();
    };
    ProductListPage.prototype.goSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    ProductListPage.prototype.graphicsDemoShow = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__graphics_graphics__["a" /* Graphics */]);
    };
    ProductListPage.prototype.goDetailPage = function (productId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detail_detail__["a" /* DetailPage */], { 'productId': productId });
    };
    //加载低风险Top10
    ProductListPage.prototype.loadLowRisks = function () {
        var _this = this;
        //是否已经加载
        if (!this.lowRisksList) {
            this.loadingCtrls.loading(this.translateLoading);
            this.productService.fetchLowRisks().then(function (res) {
                _this.lowRisksList = res.results;
            }).catch(function (err) {
                if (err.http_status == 500) {
                    _this.loadingCtrls.showToast('服务器错误，请稍后重试！', false);
                    return false;
                }
            });
        }
    };
    return ProductListPage;
}());
ProductListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-list',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/products/product-list.html"*/'\n\n<ion-content >\n    <!--Banner-->\n    <div class="top-box">\n        <div class="input" (click)="goSearchPage()"><label>基金名称／代码</label></div>\n        <h1>基站 · 即将上线</h1>\n        <p><span>一个有态度的投资助手</span></p>\n        <div class="review-box">\n            <ion-row>\n                <ion-col col-7>\n                    <h2>投资先评测</h2>\n                    <h3>理财更放心</h3>\n                </ion-col>\n                <ion-col col-5>\n                        <img src="assets/image/home-banner-modified.png"/>\n                </ion-col>\n            </ion-row>\n            <h4 (click)="goSearchPage()">去评测 <img src="assets/image/icon-add.png" /></h4>\n        </div>\n    </div>\n\n\n    \n\n  <!--Tabs-->\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="puppies">\n          高收益Top10\n      </ion-segment-button>\n      <ion-segment-button value="kittens" (click)="loadLowRisks()">\n          低风险Top10\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n\n  <!--list-->\n  <div class="tab-con" [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'" >\n      <ion-item item-list *ngFor="let item of highReturnsList" (click)="goDetailPage(item.id)">\n          <ion-title>{{item.name}}（{{item.code}}）</ion-title>\n          <ion-row>\n            <ion-col col-4>\n                <h1 main-col font-family="Geometric415BT-BlackA, Geometr415 Blk BT" >{{item.recommendation | SplitSymbolFirst}} <span *ngIf = " item.recommendation.length != 1" symbol>{{item.recommendation | SplitSymbolLast}}</span></h1>\n                <p>推荐度</p>\n            </ion-col>\n            <ion-col col-4>\n                <h1 red-col><label>{{item.annual_return | formatPercent}}</label></h1>\n                <p>历史年化收益</p>\n            </ion-col>\n            <ion-col col-4>\n                <h1 [ngClass]="{\'red-col\' : item.invest_opportunity ==\'风险\' ,\n                                \'orange-col\' : item.invest_opportunity ==\'观望\' ,\n                                \'green-col\' : item.invest_opportunity ==\'机会\'}">{{item.invest_opportunity}}</h1>\n                <p>投资时机</p>\n            </ion-col>\n          </ion-row>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n        <ion-item item-list *ngFor="let item of lowRisksList" (click)="goDetailPage(item.id)">\n            <ion-title>{{item.name}}（{{item.code}}）</ion-title>\n            <ion-row>\n                <ion-col col-4>\n                        <h1 main-col font-family="Geometric415BT-BlackA, Geometr415 Blk BT" >{{item.recommendation | SplitSymbolFirst}} <span *ngIf = " item.recommendation.length != 1" symbol>{{item.recommendation | SplitSymbolLast}}</span></h1>\n                        <p>推荐度</p>\n                </ion-col>\n                <ion-col col-4>\n                    <h1 red-col><label>{{item.annual_return | formatMoney}}</label>%</h1>\n                    <p>历史年化收益</p>\n                </ion-col>\n                <ion-col col-4>\n                    <h1 [ngClass]="{\'red-col\' : item.invest_opportunity ==\'风险\' ,\n                    \'orange-col\' : item.invest_opportunity ==\'观望\' ,\n                    \'green-col\' : item.invest_opportunity ==\'机会\'}">{{item.invest_opportunity}}</h1>\n                    <p>投资时机</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/products/product-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services__["c" /* LoadingControllers */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__services__["e" /* ProductService */]])
], ProductListPage);

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PkSingleFundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PkSingleFundPage = (function () {
    function PkSingleFundPage(navCtrl, navParams, productService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.fundInfoData = {};
        this.radar_graph = {};
        this.retRisk = [];
        this.incomeRangeChartVal = 50;
        this.incomeRangeChartVal1 = 100;
        this.productId = this.navParams.get('productId');
        this.productService.fetchFundInfo(this.productId).then(function (res) {
            var name = res.name;
            var historical_score = res.historical_score;
            // let radar_graph_datas = res.radar_graph;
            var expect_ret = res.expect_ret < 8 ? res.expect_ret * 10 : 80;
            var expect_risk = res.expect_risk < 8 ? res.expect_risk * 10 : 80;
            _this.retRisk = Object.assign([expect_ret, expect_risk]);
            _this.radar_graph = Object.assign({}, res.radar_graph, { name: name, historical_score: historical_score });
            _this.performance_return = Object.assign({}, res.performance, { name: name });
            _this.fundInfoData = res;
            _this.invest_return = res.invest_opportunity_value;
            _this.line_return = res.historical_point_positions;
        });
        this.lengthPercentage(100);
    }
    PkSingleFundPage.prototype.ionViewDidLoad = function () {
        this.loadingCtrl.loading("努力加载...");
    };
    PkSingleFundPage.prototype.lengthPercentage = function (num) {
        if (num > 80) {
            this.incomeRangeChartVal1 = 80;
        }
    };
    PkSingleFundPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    PkSingleFundPage.prototype.goSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */], { "productId": this.productId, "form": "pkOne" });
    };
    PkSingleFundPage.prototype.goPkTwoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    return PkSingleFundPage;
}());
PkSingleFundPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-single-fund',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/pk/pkSingleFund.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n            基金PK\n    </ion-title>\n  </ion-navbar>\n</ion-header> \n\n<ion-content style="background: #F1F1F1">\n    <div ionItem padding>\n        <ion-grid class="title-box">\n            <ion-row>\n                <ion-col col-6>\n                    <div PingFang>\n                        <h6>{{fundInfoData.name}}</h6>\n                        <p>{{ fundInfoData.code }}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-6 (click)="goSearchPage()">\n                    <div>\n                        <ion-icon name="ios-add" style="font-size:20rem;"></ion-icon>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <h6 mainTitle>基站推荐度</h6>\n        <ion-grid class="recommended-degree-box"> \n            <ion-item>\n                <ion-row>\n                    <ion-col col-6><label level>{{fundInfoData.recommendation | SplitSymbolFirst}}<span>{{fundInfoData.recommendation | SplitSymbolLast}}</span></label></ion-col>                        \n                    <ion-col col-6><label text>--</label></ion-col>                        \n                </ion-row> \n            </ion-item>\n        </ion-grid>\n        <h6 mainTitle>投资时机</h6>\n        <div>\n            <meter-compare-graph [invest-return]="invest_return"></meter-compare-graph>\n        </div>\n        <h6 mainTitle>预期表现</h6>\n        <div>\n            <expect-graph [performance-return]="performance_return" ></expect-graph>                \n        </div>\n    </div>\n    <div ionItem padding marginTop>\n        <div class="today-indicator">\n            <h6 mainTitle>今日指标</h6>\n            <h6 center font14rem gray-col>收益</h6>\n            <ion-row>\n                <ion-col col-6 paddingLeftClear paddingRightClear>\n                    <label class="oneProgress" [ngStyle]="{\'width\': retRisk[0] +\'%\'}"></label>\n                    <span>{{ fundInfoData.expect_ret }}分</span>                  \n                </ion-col>                        \n                <ion-col col-6>\n                    <label class="noneProgress" style="width:70%"></label>\n                    <span gray-col>--</span> \n                </ion-col>                        \n            </ion-row>\n            <h6 center font14rem gray-col>风险</h6>\n            <ion-row>\n                <ion-col col-6 paddingLeftClear paddingRightClear>\n                    <label class="oneProgress" [ngStyle]="{\'width\': retRisk[1] +\'%\'}"></label>\n                    <span>{{ fundInfoData.expect_risk }}分</span>                    \n                </ion-col>                        \n                <ion-col col-6>\n                    <label class="noneProgress" style="width:70%"></label>\n                    <span gray-col>--</span> \n                </ion-col>                        \n            </ion-row>\n        </div>\n        <div paddingtop>\n            <h6 center font14rem gray-col>点位</h6>\n            <poly-line-graph [line-return]="line_return"></poly-line-graph>\n        </div>\n    </div>\n    <div ionItem padding marginTop>\n        <div paddingtop>\n            <h6 mainTitle>历史评分</h6>  \n        </div>\n        <div class="historical-score-box">\n            <ion-row>\n                <ion-col col-6>\n                    <label>{{fundInfoData.historical_score | formatNumber}}</label>分\n                </ion-col>                        \n                <ion-col col-6>\n                    <label class="gray">--&nbsp;分</label>\n                </ion-col>                        \n            </ion-row>\n        </div>\n        <radar-graph [portfolio]="radar_graph" ></radar-graph>\n    </div>\n        \n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/pk/pkSingleFund.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services__["e" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services__["c" /* LoadingControllers */]])
], PkSingleFundPage);

//# sourceMappingURL=pkSingleFund.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PkDoubleFundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PkDoubleFundPage = (function () {
    function PkDoubleFundPage(navCtrl, translate, loadingCtrl, navParams, productService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.oneFundInfoData = {};
        this.twoFundInfoData = {};
        this.radar_graph = {};
        this.radar_rebalance = {};
        this.firstRetRisk = [];
        this.lastRetRisk = [];
        this.incomeRangeChartVal = 50;
        this.incomeRangeChartVal1 = 100;
        // translate
        translate.get('prompt.loading').subscribe(function (res) {
            // Loading
            var loaderModule = _this.loadingCtrl.create({ content: res });
            loaderModule.present();
            _this.pkOneProductId = _this.navParams.get('pkOneProductId');
            _this.pkTwoProductId = _this.navParams.get('pkTwoProductId');
            // pkOneProduct
            _this.productService.fetchFundInfo(_this.pkOneProductId).then(function (res) {
                var name = res.name;
                var radar_graph_data = res.radar_graph;
                var expect_ret = res.expect_ret < 8 ? res.expect_ret * 10 : 80;
                var expect_risk = res.expect_risk < 8 ? res.expect_risk * 10 : 80;
                _this.firstRetRisk = Object.assign([], [expect_ret, expect_risk]);
                _this.radar_graph = Object.assign({}, radar_graph_data, { name: name });
                _this.invest_return = res.invest_opportunity_value;
                _this.performance_return = Object.assign({}, res.performance, { name: name });
                _this.line_return = res.historical_point_positions;
                _this.oneFundInfoData = res;
                console.log(res);
                // pkTwoProduct
                _this.productService.fetchFundInfo(_this.pkTwoProductId).then(function (response) {
                    var name = response.name;
                    var performance = response.performance;
                    console.log(performance.historical.days);
                    var radar_rebalance_data = response.radar_graph;
                    var expect_ret1 = response.expect_ret < 8 ? response.expect_ret * 10 : 80;
                    var expect_risk1 = response.expect_risk < 8 ? response.expect_risk * 10 : 80;
                    _this.t_invest_return = response.invest_opportunity_value;
                    _this.lastRetRisk = Object.assign([], [expect_ret1, expect_risk1]);
                    _this.radar_rebalance = Object.assign({}, radar_rebalance_data, { name: name });
                    _this.performance_second_return = Object.assign({}, performance, { name: name });
                    _this.line_second_return = response.historical_point_positions;
                    _this.twoFundInfoData = response;
                    console.log(response);
                    // Close Loading
                    loaderModule.dismiss();
                });
            });
            console.log(_this.firstRetRisk);
            console.log(_this.lastRetRisk);
            _this.lengthPercentage(100);
        });
    }
    PkDoubleFundPage.prototype.ionViewDidEnter = function () {
    };
    PkDoubleFundPage.prototype.ionViewDidLoad = function () {
    };
    PkDoubleFundPage.prototype.lengthPercentage = function (num) {
        if (num > 80) {
            this.incomeRangeChartVal1 = 80;
        }
    };
    PkDoubleFundPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    PkDoubleFundPage.prototype.goDetailPage = function () {
        this.navCtrl.pop();
        // this.navCtrl.push(DetailPage,{'productId': this.pkOneProductId})    
    };
    PkDoubleFundPage.prototype.goSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */], { "productId": this.pkOneProductId, "form": "pkOne" });
    };
    PkDoubleFundPage.prototype.goPkTwoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    return PkDoubleFundPage;
}());
PkDoubleFundPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-double-fund',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/pk/pkDoubleFund.html"*/'<ion-header>\n        <ion-navbar hideBackButton="true">\n          <button ion-button clear small style="padding: 0;" (click)="goDetailPage()">  \n                <ion-icon name="arrow-back"></ion-icon>                \n          </button>  \n          <ion-title>\n                  基金PK\n          </ion-title>\n        </ion-navbar>\n      </ion-header> \n      \n      <ion-content style="background: #F1F1F1">\n          <div ionItem padding>\n              <ion-grid class="title-box">\n                  <ion-row>\n                      <ion-col col-6>\n                          <div PingFang>\n                              <h6>{{oneFundInfoData.name}}</h6>\n                              <p>{{ oneFundInfoData.code }}</p>\n                          </div>\n                      </ion-col>\n                      <ion-col col-6 >\n                            <div PingFang>\n                                <h6>{{twoFundInfoData.name}}</h6>\n                                <p>{{ twoFundInfoData.code }}</p>\n                                <img src="assets/image/icon-exchange.png" (click)="goback()">\n                            </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-grid>\n              <h6 mainTitle>基站推荐度</h6>\n              <ion-grid class="recommended-degree-box"> \n                  <ion-item>\n                      <ion-row>\n                          <ion-col col-6><label level main-col>{{oneFundInfoData.recommendation | SplitSymbolFirst}}<span>{{oneFundInfoData.recommendation | SplitSymbolLast}}</span></label></ion-col>                        \n                          <ion-col col-6><label level red-col>{{twoFundInfoData.recommendation | SplitSymbolFirst}}<span>{{twoFundInfoData.recommendation | SplitSymbolLast}}</span></label></ion-col>                        \n                        </ion-row>\n                  </ion-item>\n              </ion-grid>\n              <h6 mainTitle>投资时机</h6>\n              <div>\n                   <meter-compares-graph [invest-return]="invest_return" [t-invest-return]="t_invest_return"></meter-compares-graph>                    \n              </div>\n              <h6 mainTitle>预期表现</h6>\n              <div>\n                    <expect-graph [performance-return]="performance_return" [performance-second-return]="performance_second_return"></expect-graph>                    \n              </div>\n          </div>\n          <div ionItem padding marginTop>\n              <div class="today-indicator">\n                  <h6 mainTitle>今日指标</h6>\n                  <h6 center font14rem gray-col>收益</h6>\n                  <ion-row>\n                      <ion-col col-6 paddingLeftClear paddingRightClear>\n                          <label class="oneProgress" [ngStyle]="{\'width\': firstRetRisk[0] +\'%\'}"></label>\n                          <span>{{oneFundInfoData.expect_ret}}分</span>                        \n                      </ion-col>                        \n                      <ion-col col-6>\n                          <label class="twoProgress" [ngStyle]="{\'width\': lastRetRisk[0] +\'%\'}"></label>\n                          <span>{{twoFundInfoData.expect_ret}}分</span> \n                      </ion-col>                        \n                  </ion-row>\n                  <h6 center font14rem gray-col>风险</h6>\n                  <ion-row>\n                      <ion-col col-6 paddingLeftClear paddingRightClear>\n                          <label class="oneProgress" [ngStyle]="{\'width\': firstRetRisk[1] +\'%\'}"></label>\n                          <span>{{oneFundInfoData.expect_risk}}分</span>                        \n                      </ion-col>                        \n                      <ion-col col-6>\n                          <label class="twoProgress" [ngStyle]="{\'width\': lastRetRisk[1] +\'%\'}"></label>\n                          <span>{{twoFundInfoData.expect_risk}}分</span> \n                        </ion-col>                        \n                  </ion-row>\n                  <h6 center font14rem gray-col>点位</h6>\n                  <div>\n                        <poly-line-graph [line-return]="line_return" [line-second-return] = "line_second_return"></poly-line-graph>                        \n                  </div>\n              </div>\n            </div>\n            <div ionItem padding marginTop>\n                <div>\n                    <h6 mainTitle>历史评分</h6>  \n                </div>\n                <div class="historical-score-box">\n                    <ion-row>\n                        <ion-col col-6>\n                            <label>{{oneFundInfoData.historical_score | formatNumber }}</label>分\n                        </ion-col>                        \n                        <ion-col col-6>\n                            <label red-col>{{twoFundInfoData.historical_score | formatNumber}}</label>分\n                        </ion-col>                        \n                    </ion-row>\n                </div>\n                <radar-graph [portfolio]="radar_graph" [rebalance]="radar_rebalance"></radar-graph>\n          </div>                \n              \n      </ion-content>\n      '/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/pk/pkDoubleFund.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services__["e" /* ProductService */]])
], PkDoubleFundPage);

//# sourceMappingURL=pkDoubleFund.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewPage = (function () {
    function ReviewPage(navCtrl, translate, loadingCtrl, navParams, productService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.productResults = {};
        this.incomeRangeChartVal = 50;
        this.riskRangeChartVal = 23;
        this.expect_ret = 0;
        this.expect_risk = 0;
        // translate
        translate.get('prompt.loading').subscribe(function (res) {
            // Loading
            var loaderModule = _this.loadingCtrl.create({ content: res });
            loaderModule.present();
            _this.productId = _this.navParams.get('productId');
            _this.productService.fetchFundInfo(_this.productId).then(function (res) {
                console.log(res);
                var name = res.name;
                var historical_score = res.historical_score;
                _this.productResults = res;
                _this.invest_return = res.invest_opportunity_value;
                _this.radar_graph = Object.assign({}, res.radar_graph, { name: name, historical_score: historical_score });
                _this.line_return = res.historical_point_positions;
                _this.performance_return = Object.assign({}, res.performance, { name: name });
                _this.expect_ret = res.expect_ret * 10;
                _this.expect_risk = res.expect_risk * 10;
            });
            // Close Loading
            loaderModule.dismiss();
        });
    }
    ReviewPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    ReviewPage.prototype.ionViewDidLoad = function () {
    };
    return ReviewPage;
}());
ReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-review',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/pk/review.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n            基金评测\n    </ion-title>\n  </ion-navbar>\n</ion-header> \n\n<ion-content style="background: #F1F1F1">\n        <div ionItem padding>\n            <h6 center paddingbottom>{{ productResults.name }} ( {{ productResults.code }} )</h6>\n            <ion-row>\n                <ion-col col-6 center>\n                    <h5>基站推荐度</h5>\n                    <h1 main-col Geometr415 class="fontSize">{{productResults.recommendation | SplitSymbolFirst}} <span symbol>{{productResults.recommendation | SplitSymbolLast}}</span></h1>                    \n                </ion-col>\n                <ion-col col-6>\n                    <meter-graph [invest-return]="invest_return"></meter-graph> \n                </ion-col>\n            </ion-row>\n            <h5>预期表现</h5>\n            <expect-graph [performance-return]="performance_return" ></expect-graph>\n            <!-- [performance-second-return]="performance_second_return"  -->\n        </div>\n   \n        <div ionItem padding marginTop>\n            <h5> 今日指标</h5>\n            <ion-row paddingtop>\n                <ion-col col-2  style="padding-left:0" font14rem light-gray-col>收益</ion-col>\n                <ion-col col-10>\n                    <div class="range-chart">\n                        <div [ngStyle]="{\'width\': expect_ret +\'%\'}">{{ productResults.expect_ret  }}分</div>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row paddingtop>\n                <ion-col col-2  style="padding-left:0" font14rem light-gray-col>风险</ion-col>\n                <ion-col col-10>\n                    <div class="range-chart">\n                        <div [ngStyle]="{\'width\': expect_risk +\'%\'}">{{ productResults.expect_risk  }}分</div>\n                    </div>\n                </ion-col>\n            </ion-row>\n            \n            <h6 font14rem light-gray-col>点位</h6>\n            <poly-line-graph [line-return]="line_return"></poly-line-graph>\n\n        </div>\n\n        <div ionItem padding marginTop>\n            <h5>历史评分</h5>\n            <radar-graph [portfolio]="radar_graph" ></radar-graph>\n        </div>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/pk/review.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services__["e" /* ProductService */]])
], ReviewPage);

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managerDetail__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagerListPage = (function () {
    function ManagerListPage(navCtrl, navParams, productService, loadingCtrl, loadingCtrls) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.loadingCtrls = loadingCtrls;
        this.listModule = Object;
        this.translateLoading = '';
        this.productId = this.navParams.get('productId');
        var listModule = this.loadingCtrl.create({ content: '努力加载...' });
        listModule.present();
        this.productService.fetchFundManagerList(this.productId).then(function (res) {
            console.log(res);
            _this.managers_list = res.current_managers_overview;
        }).catch(function (err) {
            if (err.http_status == 500) {
                _this.loadingCtrls.showToast('服务器错误，请稍后重试！', false);
                return false;
            }
        });
        // Close Loading
        listModule.dismiss();
        this.translateLoading = '努力加载...';
    }
    //跳转基金经理详情页
    ManagerListPage.prototype.goManagerDetailPage = function (managerId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__managerDetail__["a" /* ManagerDetailPage */], { 'managerId': managerId, 'productId': this.productId });
    };
    return ManagerListPage;
}());
ManagerListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-manager-list',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/manager/managerList.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        基金经理\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item-sliding *ngFor = "let managers of managers_list" >\n            <button ion-item (click)= "goManagerDetailPage(managers.id,productId)">\n                <ion-avatar item-start>\n                    <img *ngIf= "managers.gender == \'m\' " src="assets/image/icon-image-man.png" style="width:58px;height:58px;"/>\n                    <img *ngIf= "managers.gender == \'f\' " src="assets/image/icon-image-woman.png" style="width:58px;height:58px;"/>\n                </ion-avatar>\n                <h2>{{managers.name}}</h2>\n                <p>\n                    <span *ngIf=\'managers.office_date != null\'>\n                        {{managers.office_date | FundDetail | date:\'yyyy.MM.dd\'}}\n                    </span>\n                    <span *ngIf=\'managers.office_date == null\'>\n                        {{managers.office_date | FundDetail}} \n                    </span>\n                    -\n                    <span *ngIf=\'managers.departure_date != null\'>\n                        {{managers.departure_date | FundDetailTwo | date:\'yyyy.MM.dd\'}}\n                    </span>\n                    <span *ngIf=\'managers.departure_date == null\'>\n                        {{managers.departure_date | FundDetailTwo}}\n                    </span>\n                </p>\n                <!-- <p *ngIf="!date_full">{{managers.office_date}} {{managers.departure_date}}</p> -->\n            </button>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/manager/managerList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services__["e" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__services__["c" /* LoadingControllers */]])
], ManagerListPage);

//# sourceMappingURL=managerList.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDetailPage = (function () {
    function ProductDetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ProductDetailPage;
}());
ProductDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-detail',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/products/product-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Procuct Detail\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  Product Detail Test\n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/products/product-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ProductDetailPage);

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPage = (function () {
    function UserPage(app, navCtrl, userService, alertCtrl, modalCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        // nav: any;
        this.phone = localStorage.getItem("PHOME");
    }
    UserPage.prototype.goProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */]);
    };
    UserPage.prototype.confirmLogout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '确认',
            message: '您确定要退出吗？',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        _this.userService.logout();
                        // this.navCtrl.setRoot(LandingPage);
                        var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__landing__["b" /* LoginPage */]);
                        profileModal.present();
                    }
                }
            ]
        });
        confirm.present();
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/user/user.html"*/'<ion-content style="background:#F5F5F5">\n\n    <svg width="100%" height="201px">\n      <defs>\n          <rect x="241" y="158" width="18" height="18" id="rect-1"></rect>\n          <circle id="path-2" cx="35" cy="35" r="35"></circle>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172" id="path-4"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172" id="path-6"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172" id="path-8"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172" id="path-10"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172 C64.9740878,14.5579815 50.4298986,0.0263278443 32.4868243,0.0263278443 Z" id="path-12"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172 C64.9740878,14.5579815 50.4298986,0.0263278443 32.4868243,0.0263278443 Z" id="path-14"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172 C64.9740878,14.5579815 50.4298986,0.0263278443 32.4868243,0.0263278443 Z" id="path-16"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172 C64.9740878,14.5579815 50.4298986,0.0263278443 32.4868243,0.0263278443 Z" id="path-18"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172" id="path-20"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172" id="path-22"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172" id="path-24"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172" id="path-26"></path>\n          <path d="M32.4868243,0.0263278443 C14.5450676,0.0263278443 0,14.5579815 0,32.484172 C0,50.4108012 14.5450676,64.9420161 32.4868243,64.9420161 C50.4298986,64.9420161 64.9740878,50.4108012 64.9740878,32.484172 C64.9740878,32.484172 50.4298986,0.0263278443 32.4868243,0.0263278443 Z" id="path-28"></path>\n      </defs>\n      <g id="理财" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n          <g id="个人中心">\n              <g id="list-grzx-imag-bj">\n                  <rect id="Rectangle" fill="#296DEB" x="0" y="0" width="100%" height="200"></rect>\n                  <polygon id="Rectangle" fill="#226AF5" transform="translate(133.715438, 147.617391) rotate(-270.000000) translate(-133.715438, -147.617391) " points="81.2483527 13.9019522 186.182524 178.250009 186.182524 281.332829 102.082864 281.332829"></polygon>\n                  <polygon id="Rectangle" fill="#1963EC" points="374.727043 33.150305 374.727043 199.798913 83 199.798913"></polygon>\n                  <polygon id="Rectangle" fill="#1963EC" transform="translate(84.587292, 63.654463) rotate(-270.000000) translate(-84.587292, -63.654463) " points="124.06765 -20.9328289 135.09145 148.241755 34.0831339 148.241755"></polygon>\n              </g>\n              <text id="1381****236" font-family="PingFangSC-Regular, PingFang SC" font-size="16" font-weight="normal" fill="#FFFFFF">\n                  <tspan x="141" y="175">{{phone}}</tspan>\n              </text>\n              <g id="list-grzx-imag-tx" transform="translate(151.000000, 75.000000)">\n                  <mask id="mask-3" fill="white">\n                      <use xlink:href="#path-2"></use>\n                  </mask>\n                  <use id="Mask" fill="#FFFFFF" opacity="0.9" xlink:href="#path-2"></use>\n                  <g id="Page-1" mask="url(#mask-3)">\n                      <g transform="translate(3.000000, 5.000000)">\n                          <g id="Group-15">\n                              <mask id="mask-5" fill="white">\n                                  <use xlink:href="#path-4"></use>\n                              </mask>\n                              <g id="Clip-14"></g>\n                              <path d="M37.8235,41.2610854 C36.3873514,41.2610854 34.5594459,41.3115471 32.5466419,41.3541105 L32.4280608,49.8773113 L32.4280608,41.3541105 C30.4152568,41.3115471 28.5869122,41.2610854 27.1507635,41.2610854 C24.6280608,41.2610854 16.6611689,44.9289929 16.6611689,49.2072676 L16.6611689,64.9421038 L32.2181284,64.9421038 L32.4280608,64.9421038 L48.3130946,64.9421038 L48.3130946,49.2072676 C48.3130946,44.9289929 40.3462027,41.2610854 37.8235,41.2610854" id="Fill-13" fill-opacity="0.1" fill="#0167F0" mask="url(#mask-5)"></path>\n                          </g>\n                          <g id="Group-18">\n                              <mask id="mask-7" fill="white">\n                                  <use xlink:href="#path-6"></use>\n                              </mask>\n                              <g id="Clip-17"></g>\n                              <path d="M36.7606622,42.1202507 C36.4312703,38.9543275 36.8445473,32.2587178 36.8445473,32.2587178 L28.1367432,32.2587178 C28.1367432,32.2587178 28.7643446,39.1877677 28.2829932,42.1079644 C25.0123514,42.7551906 26.9302905,43.8886043 26.9302905,45.4849492 C26.9302905,47.7043865 27.1129932,49.7487436 32.4908649,49.7487436 C37.8687365,49.7487436 39.5670811,46.3283179 39.5670811,44.1088806 C39.5670811,42.522628 39.9983649,42.7731813 36.7606622,42.1202507" id="Fill-16" fill="#E9F1F3" mask="url(#mask-7)"></path>\n                          </g>\n                          <g id="Group-21">\n                              <mask id="mask-9" fill="white">\n                                  <use xlink:href="#path-8"></use>\n                              </mask>\n                              <g id="Clip-20"></g>\n                              <path d="M44.3156824,21.5460935 C44.1246351,21.5460935 43.9397365,21.5772481 43.7605473,21.6347306 C42.2391959,16.8119083 37.7515608,14.3002319 32.4505473,14.3002319 C27.1855473,14.3002319 22.7238243,16.7653958 21.1734865,21.5386339 C21.112,21.532052 21.0496351,21.527664 20.9872703,21.527664 C19.5757162,21.527664 18.43075,23.1915838 18.43075,25.244278 C18.43075,27.2206215 19.4922703,28.8362736 20.8317973,28.9534325 C21.5705135,33.7244767 24.2543986,37.1725467 32.4505473,37.1725467 C40.6427432,37.1725467 43.3279459,33.7293035 44.0684189,28.9613309 C44.1496689,28.9731784 44.2322365,28.9793216 44.3156824,28.9793216 C45.7272365,28.9793216 46.8713243,27.3154018 46.8713243,25.2627075 C46.8713243,23.2104521 45.7272365,21.5460935 44.3156824,21.5460935" id="Fill-19" fill="#FFFFFF" mask="url(#mask-9)"></path>\n                          </g>\n                          <g id="Group-24">\n                              <mask id="mask-11" fill="white">\n                                  <use xlink:href="#path-10"></use>\n                              </mask>\n                              <g id="Clip-23"></g>\n                              <path d="M21.9247635,26.9339991 C20.857973,26.9339991 21.1601351,21.7904159 21.1733108,21.5385462 C20.8013176,21.4841353 20.4381081,21.6135805 20.4381081,21.6135805 C20.4381081,21.6135805 19.6418581,18.1821848 22.2102365,14.497603 C23.5242905,12.6134069 27.5925,9.26231116 32.4516892,9.26231116 C37.3104392,9.26231116 42.110777,11.6809625 43.5056419,15.0421506 C44.9005068,18.4033387 44.6716892,21.5819871 44.6716892,21.5819871 C44.6716892,21.5819871 44.2412838,21.4845741 43.7608108,21.6346428 C43.7608108,22.474501 43.5996284,26.6452704 42.9021959,26.5864715 C42.2043243,26.5285503 42.2284797,24.7571252 42.2284797,22.8716127 C42.2284797,21.7210859 38.8902027,18.3419071 32.7973311,18.3419071 C26.7048986,18.3419071 22.8782432,21.1958454 22.7539527,22.7483106 C22.5879392,24.8168016 22.3248649,26.9339991 21.9247635,26.9339991" id="Fill-22" fill-opacity="0.1" fill="#0167F0" mask="url(#mask-11)"></path>\n                          </g>\n                          <g id="Group-27">\n                              <mask id="mask-13" fill="white">\n                                  <use xlink:href="#path-12"></use>\n                              </mask>\n                              <g id="Clip-26"></g>\n                              <path d="M26.5006318,41.2512564 L32.4872196,60.6829607 L38.4742466,41.2512564 L36.6634696,40.6079794 C36.6634696,40.6079794 33.8899899,41.9998447 32.4204628,41.9998447 C30.6452601,41.9998447 28.2710034,40.459227 28.2710034,40.459227 L26.5006318,41.2512564 Z" id="Fill-25" fill="#FFFFFF" mask="url(#mask-13)"></path>\n                          </g>\n                          <g id="Group-30">\n                              <mask id="mask-15" fill="white">\n                                  <use xlink:href="#path-14"></use>\n                              </mask>\n                              <g id="Clip-29"></g>\n                              <polygon id="Fill-28" fill-opacity="0.2" fill="#0167F0" mask="url(#mask-15)" points="38.4741149 41.2512564 32.4870878 60.6829607 37.9343514 57.8922092 40.3182703 41.8892678"></polygon>\n                          </g>\n                          <g id="Group-33">\n                              <mask id="mask-17" fill="white">\n                                  <use xlink:href="#path-16"></use>\n                              </mask>\n                              <g id="Clip-32"></g>\n                              <polygon id="Fill-31" fill-opacity="0.2" fill="#0167F0" mask="url(#mask-17)" points="26.5006318 41.2512564 32.4872196 60.6829607 27.0399561 57.8922092 24.6560372 41.8892678"></polygon>\n                          </g>\n                          <g id="Group-36">\n                              <mask id="mask-19" fill="white">\n                                  <use xlink:href="#path-18"></use>\n                              </mask>\n                              <g id="Clip-35"></g>\n                              <polygon id="Fill-34" fill="#EEEFEF" mask="url(#mask-19)" points="32.5638535 60.4846242 32.4935177 60.6829607 32.424152 60.4846242 32.424152 43.4728876 32.5638535 43.4728876"></polygon>\n                          </g>\n                          <g id="Group-39">\n                              <mask id="mask-21" fill="white">\n                                  <use xlink:href="#path-20"></use>\n                              </mask>\n                              <g id="Clip-38"></g>\n                              <path d="M33.7000845,45.5380876 C33.7000845,45.7482716 33.5292399,45.918525 33.3188682,45.918525 C33.1084966,45.918525 32.937652,45.7482716 32.937652,45.5380876 C32.937652,45.3283425 33.1084966,45.1576503 33.3188682,45.1576503 C33.5292399,45.1576503 33.7000845,45.3283425 33.7000845,45.5380876" id="Fill-37" fill="#EEEFEF" mask="url(#mask-21)"></path>\n                          </g>\n                          <g id="Group-42">\n                              <mask id="mask-23" fill="white">\n                                  <use xlink:href="#path-22"></use>\n                              </mask>\n                              <g id="Clip-41"></g>\n                              <path d="M33.7000845,47.51996 C33.7000845,47.7297051 33.5292399,47.9003973 33.3188682,47.9003973 C33.1084966,47.9003973 32.937652,47.7297051 32.937652,47.51996 C32.937652,47.309776 33.1084966,47.138645 33.3188682,47.138645 C33.5292399,47.138645 33.7000845,47.309776 33.7000845,47.51996" id="Fill-40" fill="#EEEFEF" mask="url(#mask-23)"></path>\n                          </g>\n                          <g id="Group-45">\n                              <mask id="mask-25" fill="white">\n                                  <use xlink:href="#path-24"></use>\n                              </mask>\n                              <g id="Clip-44"></g>\n                              <path d="M33.7000845,49.5009986 C33.7000845,49.7116214 33.5292399,49.881436 33.3188682,49.881436 C33.1084966,49.881436 32.937652,49.7116214 32.937652,49.5009986 C32.937652,49.2908147 33.1084966,49.1205613 33.3188682,49.1205613 C33.5292399,49.1205613 33.7000845,49.2908147 33.7000845,49.5009986" id="Fill-43" fill="#EEEFEF" mask="url(#mask-25)"></path>\n                          </g>\n                          <g id="Group-48">\n                              <mask id="mask-27" fill="white">\n                                  <use xlink:href="#path-26"></use>\n                              </mask>\n                              <g id="Clip-47"></g>\n                              <path d="M33.7000845,51.4819934 C33.7000845,51.6926161 33.5292399,51.8633083 33.3188682,51.8633083 C33.1084966,51.8633083 32.937652,51.6926161 32.937652,51.4819934 C32.937652,51.2722482 33.1084966,51.101556 33.3188682,51.101556 C33.5292399,51.101556 33.7000845,51.2722482 33.7000845,51.4819934" id="Fill-46" fill="#EEEFEF" mask="url(#mask-27)"></path>\n                          </g>\n                          <g id="Group-51">\n                              <mask id="mask-29" fill="white">\n                                  <use xlink:href="#path-28"></use>\n                              </mask>\n                              <g id="Clip-50"></g>\n                              <path d="M33.7000845,53.4638658 C33.7000845,53.6740497 33.5292399,53.8443031 33.3188682,53.8443031 C33.1084966,53.8443031 32.937652,53.6740497 32.937652,53.4638658 C32.937652,53.2536818 33.1084966,53.0825508 33.3188682,53.0825508 C33.5292399,53.0825508 33.7000845,53.2536818 33.7000845,53.4638658" id="Fill-49" fill="#EEEFEF" mask="url(#mask-29)"></path>\n                          </g>\n                          <g id="Group-57" transform="translate(27.000000, 40.000000)" fill-opacity="0.3">\n                              <path d="M8.07716842,0.1798125 L6.31411579,0.9609375 C6.30653684,0.9646875 6.29848421,0.9691875 6.29090526,0.9729375 C5.95269474,0.5263125 5.16874737,0.2139375 4.25595789,0.2139375 C3.51085263,0.2139375 2.85432632,0.4224375 2.45311579,0.7408125 C2.44458947,0.7378125 2.43748421,0.7348125 2.42895789,0.7318125 L0.723694737,0.1584375 C0.358957895,0.0361875 0.0605368421,0.2195625 0.0605368421,0.5675625 L0.0605368421,2.3975625 C0.0605368421,2.7455625 0.346642105,2.9026875 0.6948,2.7485625 L2.29348421,2.0405625 C2.66201053,2.4406875 3.40190526,2.7144375 4.25595789,2.7144375 C5.05743158,2.7144375 5.75801053,2.4721875 6.14548421,2.1118125 C6.20848421,2.1440625 6.27385263,2.1736875 6.34301053,2.1965625 L8.04827368,2.7695625 C8.41348421,2.8918125 8.71143158,2.7084375 8.71143158,2.3604375 L8.71143158,0.5308125 C8.71143158,0.1835625 8.4258,0.0256875 8.07716842,0.1798125" id="Fill-55" fill="#0167F0"></path>\n                          </g>\n                      </g>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n\n  <!-- <div class="photo">\n        <img src="assets/image/user-photo.png">\n  </div> -->\n\n  <ion-list class="basic-list">\n      <button ion-item>\n        账户\n      </button>\n      <button ion-item>\n        关于我们\n      </button>\n  </ion-list>\n\n</ion-content>\n\n\n<ion-footer>\n    <button (click)="confirmLogout()" style="width:100%; background:#fff; text-align:center; padding:15px 0px; margin-bottom:20px; ">\n        安全退出\n    </button>\n</ion-footer>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/user/user.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services__["g" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingPage = (function () {
    function LandingPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    LandingPage.prototype.ionViewDidEnter = function () {
    };
    LandingPage.prototype.login = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]);
        profileModal.present();
        // this.navCtrl.push(ProductListPage)
    };
    return LandingPage;
}());
LandingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-landing',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/landing/landing.html"*/'<ion-content>\n  <div class="container">\n    <div style="text-align:center; width:100%">\n    <img class="landing-bg" src="assets/image/welcome.png" >\n  </div>\n    <div class="bottom-block">\n      <div class="text-rect">\n        <div class="title">{{ \'landing.slogan\' | translate }}</div>\n      </div>\n      <div class="button-center" (click)="login()">\n        <button ion-button color="#0088FF">  立即体验</button>\n      </div>\n    </div>\n  </div>    \n</ion-content>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/landing/landing.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], LandingPage);

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphics_graphics__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var REGEX_PHONE_NUMBER = new RegExp('^1[3|4|5|7|8]\\d{9}$|^0{6}\\d{5}$');
var REGEX_PASSWORD_NUMBER = new RegExp('^(?=.*\\d)(?=.*[a-zA-Z])\\w{8,}$');
var SMSLoginPage = (function () {
    function SMSLoginPage(viewCtrl, navCtrl, userService, translateService, toastCtrl, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.translateService = translateService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.canSubmit = false;
        this.fetchingCode = false;
        this._interval_id = null;
        this.timeCount = 0;
    }
    SMSLoginPage.prototype.login = function () {
        var _this = this;
        if (!this.validate(true))
            return;
        return this.userService.smsLogin(this.phoneNumber, this.code)
            .then(function (res) {
            _this.canSubmit = false;
            _this.handleSuccess();
            _this.savePhone();
        }).catch(function (error) {
            _this.error = _this.translateService.instant('login.incorrect_phone_number_password');
        });
    };
    SMSLoginPage.prototype.savePhone = function () {
        localStorage.setItem("PHOME", this.phoneNumber);
    };
    // login Success
    SMSLoginPage.prototype.handleSuccess = function () {
        var toast = this.toastCtrl.create({
            message: '恭喜您登录成功',
            duration: 2000,
            position: 'top'
        });
        toast.present();
        setTimeout(this.toHomePage.bind(this), 1200);
    };
    // login Success
    SMSLoginPage.prototype.smsSuccess = function () {
        var smsToast = this.toastCtrl.create({
            message: '已发送,请查收！',
            duration: 2000,
            position: 'bottom'
        });
        smsToast.present();
    };
    SMSLoginPage.prototype.validate = function (showError) {
        if (showError === void 0) { showError = false; }
        this.error = null;
        var error = null;
        if (this.phoneNumber == null || this.phoneNumber == '' || this.code == null || this.code == '') {
            this.canSubmit = false;
            return false;
        }
        this.canSubmit = true;
        if (!REGEX_PHONE_NUMBER.test(this.phoneNumber)) {
            error = '手机号格式不正确';
        }
        else if (!__WEBPACK_IMPORTED_MODULE_7__common__["c" /* REGEX_PHONE_CODE */].test(this.code)) {
            error = '验证码格式不正确';
        }
        if (error) {
            if (showError)
                this.error = error;
            return false;
        }
        else {
            return true;
        }
    };
    SMSLoginPage.prototype.fetchSMSCode = function () {
        var _this = this;
        if (this.phoneNumber == null || this.phoneNumber == '') {
            this.error = '请输入手机号';
            return;
        }
        else if (!REGEX_PHONE_NUMBER.test(this.phoneNumber)) {
            this.error = '手机号格式不正确';
            return;
        }
        //获取SMSCode
        // let loaderModule = this.loadingCtrl.create({content: "努力加载..."});  loaderModule.present();
        this.userService.fetchLoginSMSCode(this.phoneNumber)
            .then(function (res) {
            // loaderModule.dismiss();
            // Toast
            var smsToast = _this.toastCtrl.create({
                message: '已发送,请查收！',
                duration: 2000,
                position: 'middle'
            });
            smsToast.present();
            _this.fetchingCode = true;
            _this.timeCount = 60;
            _this._interval_id = setInterval(_this.timeCounter.bind(_this), 1000);
        })
            .catch(this.handleError);
    };
    SMSLoginPage.prototype.timeCounter = function () {
        this.timeCount--;
        if (this.timeCount <= 0) {
            clearInterval(this._interval_id);
            this.fetchingCode = false;
        }
    };
    SMSLoginPage.prototype.register = function () {
        if (!this.validate(true))
            return;
        return this.userService.register(this.phoneNumber, this.password, this.code)
            .then(this.handleSuccess).catch(this.handleError);
    };
    SMSLoginPage.prototype.handleError = function (error) {
        var errorMessage = __WEBPACK_IMPORTED_MODULE_7__common__["a" /* MAP_ERROR_CODE */][error.error_code];
        if (error.error_fields.code) {
            errorMessage = '验证码不正确或已经过期';
        }
        this.error = errorMessage || '系统错误';
    };
    SMSLoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SMSLoginPage.prototype.toHomePage = function () {
        var currentNav = this.navCtrl;
        var rootNav = currentNav.parent || this.navCtrl;
        rootNav.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs__["a" /* TabsPage */]);
        if (currentNav.parent) {
            currentNav.remove(0, currentNav.length() - 1).then(function () {
                currentNav.pop({
                    direction: 'forward',
                    easing: 'linear',
                });
            });
        }
    };
    SMSLoginPage.prototype.toRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register__["a" /* RegisterPage */]);
    };
    SMSLoginPage.prototype.toLoginPage = function () {
        this.navCtrl.pop();
    };
    SMSLoginPage.prototype.graph = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__graphics_graphics__["a" /* Graphics */]);
    };
    return SMSLoginPage;
}());
SMSLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sms-login',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/landing/sms-login.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="padding:0px 15px;">\n  <ion-list class="ion-list">\n    <div center><img src="assets/image/logo.png" class="logo"  /></div>\n    <ion-item>\n      <ion-label PingFang><span>手机号</span></ion-label>\n      <ion-input type="number" [(ngModel)]="phoneNumber" (ngModelChange)="validate()" placeholder="{{ \'login.phone_number_placeholder\' | translate }}"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label PingFang><span>验证码</span></ion-label>\n        <ion-input type="number" [(ngModel)]="code" (ngModelChange)="validate()" placeholder="请输入验证码"></ion-input>\n        <button ion-button PingFang  item-right (click)="fetchSMSCode()"  [disabled]="fetchingCode">{{fetchingCode?timeCount+\'秒\':\'获取验证码\'}}</button>\n    </ion-item>\n  </ion-list>\n  <div class="error" padding>\n    {{error}}\n  </div>\n  <button ion-button full PingFang (click)="login()" [disabled]="!canSubmit">{{ \'login.login\' | translate }}</button>\n  <ion-row class="login-links">\n    <ion-col ico-6 (click)="toLoginPage()">\n        密码登录\n    </ion-col>\n    <ion-col ico-6 right (click)="toRegisterPage()">\n        {{ \'login.register\' | translate }}\n    </ion-col>\n    <!-- <ion-col ico-6 blue-color style="text-align:right; " (click)="graph()">\n      {{ \'login.forget_password\' | translate }}？\n    </ion-col> -->\n  </ion-row>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/landing/sms-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services__["g" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], SMSLoginPage);

//# sourceMappingURL=sms-login.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>{{ \'HOME.TITLE\' | translate }}</h2>\n  <h2>Welcome to Ionic!  111</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransAssetPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransAssetPipe = (function () {
    function TransAssetPipe() {
    }
    TransAssetPipe.prototype.transform = function (code) {
        var translation = {
            FIXED_INCOME: '固收类',
            ALTERNATIVE: '另类投资',
            CASH: '现金类',
            STOCK: '股票类',
        };
        return translation[code] || code;
    };
    return TransAssetPipe;
}());
TransAssetPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: "transAsset"
    })
], TransAssetPipe);

//# sourceMappingURL=trans-asset.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaPercentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RaPercentPipe = (function () {
    function RaPercentPipe() {
    }
    RaPercentPipe.prototype.transform = function (value, withSymbol) {
        if (withSymbol === void 0) { withSymbol = false; }
        if (value === undefined || value === null) {
            return '';
        }
        var symbol = '';
        if (withSymbol) {
            if (value > 0) {
                symbol = '+ ';
            }
        }
        if (value < 0) {
            symbol = '- ';
        }
        return symbol + (Math.abs(value) * 100).toFixed(2) + '%';
    };
    return RaPercentPipe;
}());
RaPercentPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: "raPercent"
    })
], RaPercentPipe);

//# sourceMappingURL=ra-percent.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormatNumberWithSymbolPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FractionPartPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IntegerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatNumberPipe = (function () {
    function FormatNumberPipe() {
    }
    FormatNumberPipe.prototype.transform = function (value, decimalDigits, zero) {
        if (decimalDigits === void 0) { decimalDigits = 10; }
        if (zero === void 0) { zero = 0; }
        var num = Number(value);
        console.log(num);
        if (isNaN(num))
            return value || "0";
        var result = Math.floor(num * decimalDigits) / 10;
        return result;
    };
    return FormatNumberPipe;
}());
FormatNumberPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatNumber' })
], FormatNumberPipe);

var FormatNumberWithSymbolPipe = (function () {
    function FormatNumberWithSymbolPipe() {
    }
    FormatNumberWithSymbolPipe.prototype.transform = function (value, decimalDigits) {
        if (decimalDigits === void 0) { decimalDigits = 2; }
        var symbol = value >= 0 ? '+' : '';
        return symbol + value.toFixed(decimalDigits);
    };
    return FormatNumberWithSymbolPipe;
}());
FormatNumberWithSymbolPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatNumberWithSymbol' })
], FormatNumberWithSymbolPipe);

var FractionPartPipe = (function () {
    function FractionPartPipe() {
    }
    FractionPartPipe.prototype.transform = function (value, decimalDigits) {
        if (decimalDigits === void 0) { decimalDigits = 2; }
        var v = value % 1;
        return v.toFixed(decimalDigits).substr(decimalDigits);
    };
    return FractionPartPipe;
}());
FractionPartPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'fractionPart' })
], FractionPartPipe);

var IntegerPipe = (function () {
    function IntegerPipe() {
    }
    IntegerPipe.prototype.transform = function (value) {
        return parseInt(value + '').toString();
    };
    return IntegerPipe;
}());
IntegerPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'integer' })
], IntegerPipe);

//# sourceMappingURL=formatNumber.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatMoneyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormatMoneyWithSymbolPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_numeral__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_numeral__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormatMoneyPipe = (function () {
    function FormatMoneyPipe() {
    }
    FormatMoneyPipe.prototype.transform = function (value, decimalDigits) {
        if (decimalDigits === void 0) { decimalDigits = 2; }
        var money = Number(value);
        if (isNaN(money))
            return value;
        var pattern = '0,0.00';
        if (decimalDigits == 0)
            pattern = '0,0';
        else if (decimalDigits == 1)
            pattern = '0,0.0';
        return __WEBPACK_IMPORTED_MODULE_1_numeral___default()(money).format(pattern);
    };
    return FormatMoneyPipe;
}());
FormatMoneyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatMoney' })
], FormatMoneyPipe);

var FormatMoneyWithSymbolPipe = (function (_super) {
    __extends(FormatMoneyWithSymbolPipe, _super);
    function FormatMoneyWithSymbolPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatMoneyWithSymbolPipe.prototype.transform = function (value, decimalDigits) {
        if (decimalDigits === void 0) { decimalDigits = 2; }
        var money = Number(value);
        var symbol = '';
        if (!isNaN(money)) {
            symbol = money > 0 ? '+' : '';
        }
        return symbol + _super.prototype.transform.call(this, value, decimalDigits);
    };
    return FormatMoneyWithSymbolPipe;
}(FormatMoneyPipe));
FormatMoneyWithSymbolPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatMoneyWithSymbol' })
], FormatMoneyWithSymbolPipe);

//# sourceMappingURL=formatMoney.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormatDatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FundsTypeSymbolPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SplitSymbolFirstPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SplitSymbolLastPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecimalPointOnePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FundDetailPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FundDetailtwoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatDatePipe = (function () {
    function FormatDatePipe() {
    }
    FormatDatePipe.prototype.transform = function (value, withTime) {
        if (withTime === void 0) { withTime = false; }
        if (value == null) {
            return '';
        }
        var result = value.getFullYear() + '/' + (value.getMonth() + 1) +
            '/' + value.getDate();
        if (withTime) {
            result += ' ' + this.formatNumber(value.getHours()) + ':' + this.formatNumber(value.getMinutes());
        }
        return result;
    };
    FormatDatePipe.prototype.formatNumber = function (value) {
        var result = '';
        if (value > 10) {
            result += value;
        }
        else {
            result = '0' + value;
        }
        return result;
    };
    return FormatDatePipe;
}());
FormatDatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatDate' })
], FormatDatePipe);

//基金类型
var FundsTypeSymbolPipe = (function () {
    function FundsTypeSymbolPipe() {
    }
    FundsTypeSymbolPipe.prototype.transform = function (type) {
        var translation = {
            EQUITY: "股票型",
            BOND: "债券型",
            MONEY_MARKET: "货币市场型",
            HYBRID: "混合型"
        };
        return translation[type] || type;
    };
    return FundsTypeSymbolPipe;
}());
FundsTypeSymbolPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'FundsTypeSymbol' })
], FundsTypeSymbolPipe);

//推荐度符号 1
var SplitSymbolFirstPipe = (function () {
    function SplitSymbolFirstPipe() {
    }
    SplitSymbolFirstPipe.prototype.transform = function (symbol) {
        if (symbol == null || symbol == "") {
            return "-";
        }
        else {
            return symbol.substr(0, 1);
        }
    };
    return SplitSymbolFirstPipe;
}());
SplitSymbolFirstPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'SplitSymbolFirst' })
], SplitSymbolFirstPipe);

//推荐度符号 2
var SplitSymbolLastPipe = (function () {
    function SplitSymbolLastPipe() {
    }
    SplitSymbolLastPipe.prototype.transform = function (symbol) {
        if (symbol == null || symbol == "") {
            return "";
        }
        else {
            //return symbol.substr(1,1)
            var str = symbol.substr(1, 1);
            if (str == '-') {
                str = '－';
            }
            return str;
        }
    };
    return SplitSymbolLastPipe;
}());
SplitSymbolLastPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'SplitSymbolLast' })
], SplitSymbolLastPipe);

//收益与风险
var DecimalPointOnePipe = (function () {
    function DecimalPointOnePipe() {
    }
    DecimalPointOnePipe.prototype.transform = function (value) {
        if (value == null)
            return "";
        if (value == 10) {
            return value;
        }
        else {
            return value * 10;
        }
    };
    return DecimalPointOnePipe;
}());
DecimalPointOnePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'DecimalPointOne' })
], DecimalPointOnePipe);

//基金经理 时间容错
var FundDetailPipe = (function () {
    function FundDetailPipe() {
    }
    FundDetailPipe.prototype.transform = function (startDate) {
        if (startDate == null) {
            return startDate = '--';
        }
        if (startDate) {
            return startDate;
        }
    };
    return FundDetailPipe;
}());
FundDetailPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'FundDetail' })
], FundDetailPipe);

var FundDetailtwoPipe = (function () {
    function FundDetailtwoPipe() {
    }
    FundDetailtwoPipe.prototype.transform = function (startDate) {
        if (startDate == null) {
            return startDate = ' 至今';
        }
        if (startDate) {
            return startDate;
        }
    };
    return FundDetailtwoPipe;
}());
FundDetailtwoPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'FundDetailTwo' })
], FundDetailtwoPipe);

//# sourceMappingURL=formatDate.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatPercentPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormatPercentWithSymbolPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FormatbounsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatPercentPipe = (function () {
    function FormatPercentPipe() {
    }
    FormatPercentPipe.prototype.transform = function (value, decimalDigits) {
        if (decimalDigits === void 0) { decimalDigits = 2; }
        var money = Number(value);
        if (isNaN(money))
            return value;
        if (value != null || value != '') {
            return (money * 100).toFixed(decimalDigits) + '%';
        }
        else {
            return "--";
        }
    };
    return FormatPercentPipe;
}());
FormatPercentPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatPercent' })
], FormatPercentPipe);

var FormatPercentWithSymbolPipe = (function () {
    function FormatPercentWithSymbolPipe() {
    }
    FormatPercentWithSymbolPipe.prototype.transform = function (value, decimalDigits, zero) {
        if (decimalDigits === void 0) { decimalDigits = 2; }
        if (zero === void 0) { zero = 0; }
        var money = Number(value);
        if (isNaN(money))
            return value || "0";
        return (money * 100).toFixed(decimalDigits);
    };
    return FormatPercentWithSymbolPipe;
}());
FormatPercentWithSymbolPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatPercentWithSymbol' })
], FormatPercentWithSymbolPipe);

//分红 保留四位小数
var FormatbounsPipe = (function () {
    function FormatbounsPipe() {
    }
    FormatbounsPipe.prototype.transform = function (value, decimalDigits) {
        if (decimalDigits === void 0) { decimalDigits = 4; }
        var money = Number(value);
        return money.toFixed(decimalDigits);
    };
    return FormatbounsPipe;
}());
FormatbounsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatBonus' })
], FormatbounsPipe);

//# sourceMappingURL=formatPercent.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransTradeTypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransTradeTypePipe = (function () {
    function TransTradeTypePipe() {
    }
    TransTradeTypePipe.prototype.transform = function (code) {
        var translation = {
            NEW: '购买',
            APPEND: '追加',
            REBALANCE: '优化',
            REDEEM: '赎回',
            REDEEM_ALL: '赎回'
        };
        return translation[code] || code;
    };
    return TransTradeTypePipe;
}());
TransTradeTypePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: "transTradeType"
    })
], TransTradeTypePipe);

//# sourceMappingURL=trans-trade-type.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__donut__ = __webpack_require__(512);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__donut__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_history_graph__ = __webpack_require__(804);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__portfolio_history_graph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__net_worth_graph__ = __webpack_require__(805);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__net_worth_graph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radar_graph__ = __webpack_require__(806);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__radar_graph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meter_graph__ = __webpack_require__(807);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__meter_graph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meter_compare_graph__ = __webpack_require__(808);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__meter_compare_graph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meter_compares_graph__ = __webpack_require__(809);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__meter_compares_graph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__poly_line_graph__ = __webpack_require__(810);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__poly_line_graph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__expect_graph__ = __webpack_require__(811);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__expect_graph__["a"]; });

// export { HisotryGraphComponent } from './history-graph'
 //折线图
 //折线图
 //饼图
 //仪表图
 //比较仪表图
 //比较两个仪表图
 //点位图
 //预期表现图
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonutComponent = (function () {
    function DonutComponent(element, raPercentPipe) {
        this.element = element;
        this.raPercentPipe = raPercentPipe;
    }
    DonutComponent.prototype.ngOnInit = function () {
    };
    DonutComponent.prototype.ngOnChanges = function (changes) {
        var data = changes.data;
        if (data && data.currentValue) {
            this.setupDOM();
            this.draw(data.currentValue);
        }
    };
    DonutComponent.prototype.setupDOM = function () {
        var container = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](this.element.nativeElement);
        container.select('svg').remove();
        var size = container.node().clientHeight;
        var innerRadius = size * 0.3125;
        var outerRadius = size * 0.5;
        var arc = __WEBPACK_IMPORTED_MODULE_2_d3__["arc"]()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        this.labelArc = arc;
        this.svg = container.append('svg')
            .attr('width', size)
            .attr('height', size);
        this.group = this.svg.append('g')
            .attr('transform', "translate(" + size / 2 + ", " + size / 2 + ")");
        this.pie = __WEBPACK_IMPORTED_MODULE_2_d3__["pie"]().sort(null).value(function (d) { return d.percentage; });
        this.arcTween = function arcTween(a) {
            var i = __WEBPACK_IMPORTED_MODULE_2_d3__["interpolate"](this.current, a);
            return function (t) { return arc(i(t)); };
        };
    };
    DonutComponent.prototype.draw = function (data) {
        var _this = this;
        var t = __WEBPACK_IMPORTED_MODULE_2_d3__["transition"]()
            .delay(500)
            .duration(1000);
        this.group.selectAll('.arc').remove();
        var arc = this.group.selectAll('.arc')
            .data(this.pie(data))
            .enter().append('g')
            .attr('class', 'arc');
        var path = arc
            .append('path')
            .attr('class', function (d) { return d.data.code; })
            .each(function setupCurrent() {
            this.current = { startAngle: 0, endAngle: 0 };
        });
        var text = arc.append('text')
            .each(function setupCurrent() {
            this.current = { startAngle: 0, endAngle: 0 };
        })
            .attr('opacity', 0)
            .attr('transform', function (d) { return "translate(" + _this.labelArc.centroid(d) + ")"; });
        text.append('tspan').text(function (d) { return _this.transAsset(d.data.code); });
        var percentageText = text.append('tspan')
            .text(function (d) {
            if (d.data.percentage < 0.02) {
                return '';
            }
            return _this.raPercentPipe.transform(d.data.percentage);
            ;
        });
        percentageText.attr('x', 0).attr('dy', '1.1em');
        path.transition(t)
            .attrTween('d', this.arcTween);
        text.transition(t)
            .attr('opacity', 1);
    };
    DonutComponent.prototype.transAsset = function (text) {
        var translation = {
            FIXED_INCOME: '固收类',
            STOCK: '股票类',
            ALTERNATIVE: '另类投资',
            CASH: '现金类',
        };
        return translation[text] || text;
    };
    return DonutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], DonutComponent.prototype, "data", void 0);
DonutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'donut',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/component/donut.html"*/''/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/component/donut.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__pipes__["o" /* RaPercentPipe */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__pipes__["o" /* RaPercentPipe */]])
], DonutComponent);

//# sourceMappingURL=donut.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trans_asset__ = __webpack_require__(503);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0__trans_asset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ra_percent__ = __webpack_require__(504);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__ra_percent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumber__ = __webpack_require__(505);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__formatNumber__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__formatNumber__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__formatNumber__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__formatNumber__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatMoney__ = __webpack_require__(506);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__formatMoney__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__formatMoney__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatDate__ = __webpack_require__(508);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__formatDate__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__formatDate__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__formatDate__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_4__formatDate__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__formatDate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__formatDate__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__formatDate__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatPercent__ = __webpack_require__(509);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__formatPercent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__formatPercent__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__formatPercent__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trans_trade_type__ = __webpack_require__(510);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_6__trans_trade_type__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients_client_list__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pk__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_outils__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_outils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_outils__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import * as oclazyload from 'oclazyload';
var SearchPage = (function () {
    function SearchPage(navCtrl, translate, navParams, loadingCtrl, ProductService, loadingCtrls) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.ProductService = ProductService;
        this.loadingCtrls = loadingCtrls;
        this.items = [];
        this.searchHistoricalData = JSON.parse(localStorage.getItem("SEARCH_KEYWORD")) || undefined; // 历史搜索
        this.searchHlaceholder = "输入基金名称/代码";
        this.debounce = __WEBPACK_IMPORTED_MODULE_7_outils__["debounce"]();
        this.clearInput = '';
        this.searchValue = '';
        this.fetchHotSearches();
        console.log(this.debounce);
        this.form = this.navParams.get("form");
        this.pkOneProductId = this.navParams.get("productId");
        console.log(this.form);
        console.log(this.pkOneProductId);
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        // this.loadingCtrl.loading("努力加载...");
    };
    // hot searches
    SearchPage.prototype.fetchHotSearches = function () {
        var _this = this;
        this.ProductService.fetchHotSearches().then(function (res) {
            _this.hotSearchesData = res.results;
            console.log(res);
        });
    };
    // load search list
    SearchPage.prototype.fetchSearchListData = function () {
        var _this = this;
        this.delayTime = setTimeout((function () {
            // Loading
            var loaderModule = _this.loadingCtrl.create({ content: "正在加载" });
            loaderModule.present();
            _this.ProductService.fetchSearchList(_this.searchValue).then(function (res) {
                _this.items = res.results;
            });
            // Close Loading
            loaderModule.dismiss();
        }), 2000);
    };
    SearchPage.prototype.gotoDetail = function (productId, name) {
        //PK 二
        if (this.form == "pkOne") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pk__["a" /* PkDoubleFundPage */], { 'pkTwoProductId': productId, 'pkOneProductId': this.pkOneProductId }); //popTo      
        }
        else if (this.form == "addfund") {
            // this.navCtrl.push( ClientListPage ,{ 'productId': productId });   
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__clients_client_list__["a" /* ClientListPage */], { 'productId': productId });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], { 'productId': productId });
        }
        this.localstorageSave(productId, name);
    };
    // localstorage save data
    SearchPage.prototype.localstorageSave = function (id, name) {
        // combination param
        var param = {
            "id": id,
            "name": name
        };
        // getItem
        var storage = localStorage.getItem('SEARCH_KEYWORD');
        var storageArr = storage ? JSON.parse(storage) : [];
        var storageArrayLen = storageArr.length;
        var itemStatus = false;
        //去重 and 不超过10条item
        if (storageArrayLen != 0) {
            for (var _i = 0, storageArr_1 = storageArr; _i < storageArr_1.length; _i++) {
                var item = storageArr_1[_i];
                if (item.id == id) {
                    itemStatus = true;
                }
            }
            if (storageArrayLen >= 10) {
                storageArr.pop();
            }
            else if (!itemStatus) {
                storageArr.unshift(param);
            }
        }
        else {
            storageArr.unshift(param);
        }
        //setItem
        localStorage.setItem('SEARCH_KEYWORD', JSON.stringify(storageArr));
    };
    SearchPage.prototype.goDetailPage = function (productId) {
        if (this.form) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pk__["a" /* PkDoubleFundPage */], { 'pkTwoProductId': productId, 'pkOneProductId': this.pkOneProductId });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], { 'productId': productId });
        }
    };
    SearchPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    SearchPage.prototype.clearLocalStorageHistory = function () {
        localStorage.removeItem("SEARCH_KEYWORD");
        this.searchHistoricalData = undefined;
    };
    SearchPage.prototype.unique = function (arr) {
        var newArr = [];
        for (var i in arr) {
            if (newArr.indexOf(arr[i]) == -1) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    };
    SearchPage.prototype.getItems = function (ev) {
        // set val to the value of the ev target
        var val = ev.target.value;
        this.searchValue = val;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            clearTimeout(this.delayTime);
            this.fetchSearchListData();
        }
    };
    //add back clear data
    SearchPage.prototype.ionViewDidEnter = function () {
        this.searchValue = '';
        this.clearInput = '';
        //add hostory go hot search page
        this.searchHistoricalData = JSON.parse(localStorage.getItem("SEARCH_KEYWORD")) || undefined;
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/search/search.html"*/'<ion-header>\n  <ion-toolbar>\n      <ion-searchbar (input)="getItems($event)" *ngIf="!form" placeholder="输入基金名称/代码" [(ngModel)]="clearInput"></ion-searchbar>\n      <ion-searchbar (input)="getItems($event)" *ngIf="form" placeholder="输入PK基金名称/代码"></ion-searchbar>\n      <ion-buttons end>\n          <button ion-button icon-only (click)="cancel()" style="font-size:1.5rem;color:#9B9B9B">\n            取消 \n          </button>\n      </ion-buttons>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n  <div class="search-list">\n      <ion-list *ngIf="searchValue != \'\'">\n        <ion-grid *ngIf="items != \'\'">\n          <ion-row *ngFor="let item of items" (click)="gotoDetail(item.id,item.name)">\n            <ion-col col-4>{{item.code}}</ion-col>\n            <ion-col col-8>{{item.name}}</ion-col>\n          </ion-row>       \n        </ion-grid>\n        <ion-grid *ngIf="items == \'\'" >\n          <div style="text-align:center;"> 暂无数据，敬请关注！ </div>\n        </ion-grid>\n      </ion-list>\n      <div class="labelGroud" *ngIf="searchValue == \'\'" > \n          <h6>热门搜索</h6>\n          <div>\n              <ion-badge *ngFor="let item of hotSearchesData" (click)="gotoDetail(item.id,item.name)">{{item.name}}</ion-badge>\n              <div center padding *ngIf="hotSearchesData == undefinded">给点时间，我们为您推荐最热门的基金~ {{searchHistoricalData}}</div>\n          </div>\n          <ion-row>\n            <ion-col col-6>\n              <h6>历史搜索</h6>\n            </ion-col>\n            <ion-col col-6 right>\n                <ion-icon name="trash-outline" (click)="clearLocalStorageHistory()"></ion-icon>\n            </ion-col>\n          </ion-row> \n          <div>\n              <ion-badge *ngFor="let item of searchHistoricalData" (click)="goDetailPage(item.id)">{{item.name}}</ion-badge>\n              <div center padding *ngIf="searchHistoricalData == undefinded">快去开启搜索体验吧~ {{searchHistoricalData}}</div>\n          </div>\n      </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/search/search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__services__["e" /* ProductService */], __WEBPACK_IMPORTED_MODULE_6__services__["c" /* LoadingControllers */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landing__ = __webpack_require__(498);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__landing__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sms_login__ = __webpack_require__(499);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__sms_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register__ = __webpack_require__(321);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__register__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioHisotryGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



window.d3 = __WEBPACK_IMPORTED_MODULE_1_d3__;
var COLORS = ['#FA374F', '#0088FF'];
var time_now = __WEBPACK_IMPORTED_MODULE_1_d3__["timeDay"].offset(new Date(), -1);
var PortfolioHisotryGraphComponent = (function () {
    function PortfolioHisotryGraphComponent(element, formatMoney) {
        this.element = element;
        this.formatMoney = formatMoney;
        this.ready = false;
        this.X_TICKS_COUNT = 4;
        this.period_list = [
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -1), label: '月', index: 1 },
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -3), label: '季', index: 3 },
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -6), label: '半年', index: 6 },
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -12), label: '年', index: 12 },
        ];
        this.legend = [{
                label: '本基金',
                color: COLORS[1],
                yield: ''
            }, {
                label: '',
                color: COLORS[0],
                yield: ''
            }];
        this.current_period = this.period_list[0];
    }
    PortfolioHisotryGraphComponent.prototype.ngOnInit = function () {
        this.container = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.element.nativeElement).select('.container').node();
        var options = {
            top: 25,
            bottom: 15,
            left: 55,
            right: 15,
        };
        this.init(options);
        this.ready = true;
        this.legend[1].label = this.benchmark_name;
        if (this.ready) {
            var daily_return = Object.assign({}, this.daily_return);
            this.legend[1].label = daily_return.benchmark_name;
        }
    };
    PortfolioHisotryGraphComponent.prototype.ngOnChanges = function (changes) {
        if (this.ready) {
            this.legend[1].label = this.daily_return.benchmark_name;
            this.benchmark_name = this.daily_return.benchmark_name;
            console.log('ngOnChanges');
            // this.draw(this.daily_return);
            // console.log(this.period_list[0])
            this.timeTabPeriod(this.period_list[0], this.daily_return);
        }
    };
    PortfolioHisotryGraphComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
        // this.timeTabPeriod(this.period_list[0])
        this.draw(this.daily_return);
    };
    PortfolioHisotryGraphComponent.prototype.changePeriod = function (item) {
        if (this.current_period == item)
            return;
        this.current_period = item;
        this.timeTabPeriod(item, this.daily_return);
        // this.draw(this.daily_return);
    };
    PortfolioHisotryGraphComponent.prototype.init = function (options) {
        this.margin = {
            left: options.left || 15,
            top: options.top || 15,
            bottom: options.bottom || 0,
            right: options.right || 15,
        };
        this.width = this.container.clientWidth;
        this.height = options.height || 200;
        this.XAXIS_HEIGHT = 15;
        console.log('init');
    };
    //时间
    PortfolioHisotryGraphComponent.prototype.timeTabPeriod = function (item, data) {
        // let
        var index = 0;
        var returnValue = Object.assign({}, data);
        var itemValue = Object.assign(item.value);
        // 清除净值数据
        delete returnValue.navs;
        //年
        if (item.index == 12) {
            index = 0;
        }
        else {
            index = this.searchPeriodData(item);
        }
        //赋值
        console.log(returnValue);
        item.value = itemValue;
        if (index > 0) {
            returnValue.days = returnValue.days.slice(index);
            returnValue.product_returns = returnValue.product_returns.slice(index);
            returnValue.benchmark_returns = returnValue.benchmark_returns.slice(index);
        }
        this.draw(returnValue);
    };
    //根据tab周期查找
    PortfolioHisotryGraphComponent.prototype.searchPeriodData = function (item) {
        var dateFormat = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d');
        var curPeriodDate = dateFormat(item.value);
        console.log(item.value);
        console.log(curPeriodDate);
        //Format
        if (dateFormat) {
            var x_index = this.daily_return.days.findIndex(function (p) { return curPeriodDate == p; });
            //是否找到对应下标
            if (x_index > 0) {
                return x_index;
            }
            else {
                var _loop_1 = function (i) {
                    var thisValue = new Date(item.value.getTime() + (24 * 60 * 60 * 1000) * i + 1);
                    var unPeriodDate = dateFormat(thisValue);
                    var un_index = this_1.daily_return.days.findIndex(function (p) { return unPeriodDate == p; });
                    //是否找到
                    if (un_index > 0) {
                        return { value: un_index };
                    }
                };
                var this_1 = this;
                //迭代向内查找
                for (var i = 0; i < 3; i++) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
        }
    };
    //两个时间相差天数 sDate1和sDate2是2018-12-18格式  
    PortfolioHisotryGraphComponent.prototype.datedifference = function (sDate1, sDate2) {
        var dateSpan, tempDate, iDays;
        sDate1 = Date.parse(sDate1);
        sDate2 = Date.parse(sDate2);
        dateSpan = sDate2 - sDate1;
        dateSpan = Math.abs(dateSpan);
        iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
        return iDays;
    };
    ;
    PortfolioHisotryGraphComponent.prototype.createSVG = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.container).selectAll('svg').remove();
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.container).append('svg')
            .attr('class', 'd3-line-chart')
            .attr('width', this.width)
            .attr('height', this.height);
        svg.append("linearGradient")
            .attr("id", "portfolio-history-graph-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "offset-0" },
            { offset: "80%", class: "offset-100" },
            { offset: "100%", class: "offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "benchmark-history-graph-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "benchmark-offset-0" },
            { offset: "70%", class: "benchmark-offset-100" },
            { offset: "100%", class: "benchmark-offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "rebalance-graph-gradient")
            .attr("gradientUnits", "objectBoundingBox")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", 1)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "offset-0" },
            { offset: "80%", class: "offset-80" },
            { offset: "100%", class: "offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "today-graph-gradient")
            .attr("gradientUnits", "objectBoundingBox")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", 1)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "offset-0" },
            { offset: "80%", class: "offset-80" },
            { offset: "100%", class: "offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        return svg;
    };
    PortfolioHisotryGraphComponent.prototype.draw = function (daily_return, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 0; }
        // console.log(daily_return)
        if (daily_return == null)
            return;
        var svg = this.createSVG();
        var margin = this.margin, availableWidth = this.width - this.margin.left - this.margin.right, chartViewHeight = this.height - margin.top - margin.bottom - this.XAXIS_HEIGHT;
        var startDate = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d')(this.current_period.value);
        // data = rebuildData(data, this.X_TICKS_COUNT, startDate)
        var startIndex = daily_return.days.findIndex(function (d) { return d > startDate; });
        var data = {
            //     date: rebuild_data(daily_return.days, this.X_TICKS_COUNT, startIndex),
            //     historical_data: rebuild_data(daily_return.product_returns, this.X_TICKS_COUNT, startIndex),
            //     benchmark_data: rebuild_data(daily_return.benchmark_returns, this.X_TICKS_COUNT, startIndex),
            date: daily_return.days,
            historical_data: daily_return.product_returns,
            benchmark_data: daily_return.benchmark_returns,
        };
        data = {
            date: data.date,
            historical_data: convert_log_ret(data.historical_data),
            benchmark_data: convert_log_ret(data.benchmark_data),
        };
        var valuesDomain = generateYAxisTickValues(data);
        var x = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([0, availableWidth]).domain([0, data.date.length - 1]);
        var y = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([chartViewHeight, 0]).domain(valuesDomain);
        var xTickValues = generateXAxisTickValues(data.date.length, this.X_TICKS_COUNT);
        var g_axis = svg.append('g').attr('class', 'g-axis');
        // --- lines view
        var g_chart = svg.append('g').attr('class', 'g-chart').attr('transform', "translate(" + margin.left + "," + margin.top + ")");
        var line = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
            .x(function (_, index) { return x(index); })
            .y(function (d) { return y(d); });
        var area = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
            .x(function (_, index) { return x(index); })
            .y0(chartViewHeight)
            .y1(function (d) { return y(d); });
        // const lineTransition = d3.transition()
        //     .duration(transitionDuration)
        //     .ease(d3.easeLinear);
        // render the lines with inverse order
        var historical_data = data.historical_data;
        var benchmark_data = data.benchmark_data;
        if (benchmark_data) {
            g_chart.append('path')
                .datum(benchmark_data)
                .attr('class', 'benchmark-area')
                .attr('d', area);
            g_chart.append('path')
                .datum(benchmark_data)
                .attr('class', 'benchmark-line')
                .attr('d', line);
        }
        g_chart.append('path')
            .datum(historical_data)
            .attr('class', 'area')
            .attr('d', area);
        g_chart.append('path')
            .datum(historical_data)
            .attr('class', 'line')
            .attr('d', line);
        //--- axis view x-axis
        var dateFormat = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d');
        var xAxisTextFormatter = function (index) { return dateFormat(new Date(data.date[index])); };
        // const xAxisTickScale = d3.scaleLinear().domain([10, 100]).range([])
        var xAxisMarginTop = this.height - margin.bottom - this.XAXIS_HEIGHT;
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]().scale(x).tickPadding(10).ticks(3).tickSizeInner(-xAxisMarginTop).tickSizeOuter(0).tickFormat(xAxisTextFormatter).tickValues(xTickValues);
        var xAxisView = g_axis.append('g')
            .attr('class', 'x axis')
            .attr('transform', "translate(" + margin.left + "," + xAxisMarginTop + ")")
            .call(xAxis);
        //xAxisView.selectAll('.tick text').attr('x', 26);
        //--- axis view y-axis
        var yAxisTextFormatter = __WEBPACK_IMPORTED_MODULE_1_d3__["format"]('.2%');
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisRight"]().scale(y).ticks(5).tickSize(availableWidth + 41).tickFormat(function (v) { return yAxisTextFormatter(v); });
        // const yAxisMarginLeft = this.width - margin.right;
        var yAxisView = g_axis.append('g')
            .attr('class', 'y axis')
            .attr('transform', "translate(" + (margin.left - 41) + "," + margin.top + ")")
            .call(yAxis);
        yAxisView.selectAll('g.tick').selectAll('text').attr('x', 40);
        yAxisView.selectAll('g.tick').selectAll('line').attr('x1', 40);
        // 当前市值
        // if (this.current_value) {
        //     const txt = numeral(this.current_value).format('0,0.00')
        //     g_chart.append('text').attr('class', 'current-value').text('￥' + txt).attr('x', availableWidth).attr('y', -10)
        // }
        //---- operations
        var g_operations = svg.append('g').attr('class', 'g-operations');
        var operations = getValidOperations(daily_return.operations, startDate);
        // console.log(operations)
        // operations = [
        // { "date": "2016-09-14", "action": "首次买入" },
        // { "date": "2016-11-30", "action": "卖出" },
        // { "date": "2017-01-05", "action": "优化" },
        // { "date": "2017-02-01", "action": "卖出" },
        // { "date": "2017-03-10", "action": "买入" },
        // { "date": "2017-03-15", "action": "优化" },
        // { "date": "2017-04-12", "action": "今日" },
        // ]
        // const operation_box = `
        //     <path d="M27,10.5 L27,2.00276013 C27,0.893542647 26.1012878,0 24.9926701,0 L2.00732994,0 C0.898338318,0 0,0.896666251 0,2.00276013 L0,10.9972399 C0,12.1064574 0.898712226,13 2.00732994,13 L23.5,13 L29,15 L27,10.5 Z"></path>
        // `
        // const operation_flag = {
        //     'buy_first': true,
        //     'sell_first': true,
        //     'rebalance_first': true,
        // }
        // for (let { date, action } of operations) {
        //     const x_index = data.date.findIndex(p => date == p)
        //     if (x_index < 0) continue
        //     const pos_x = x(x_index) + margin.left
        //     const pos_y = y(data.historical_data[x_index]) + margin.top
        //     const pos_y_bottom = this.height - margin.bottom - this.XAXIS_HEIGHT - pos_y
        //     const g_operation = g_operations.append('g').attr('class', 'operation')
        //         .attr('transform', `translate(${pos_x},${pos_y})`)
        //     const tips = g_operation.append('g').html(operation_box)
        //     const operation_circle = g_operation.append('circle').attr('cx', -0.1).attr('cy', 0)
        //     const text = tips.append('text').attr('x', '-5px').attr('y', '-7px')
        //     let show_tips = false
        //     if (action == '首次买入' || action == '买入') {
        //         operation_circle.attr('r', 2.5).attr('fill', '#FF2D55')
        //         if (operation_flag.buy_first) {
        //             text.text('买入')
        //             operation_circle.attr('r', 2)
        //             operation_flag.buy_first = false
        //             show_tips = true
        //         }
        //     } else if (action == '卖出') {
        //         operation_circle.attr('r', 2.5).attr('fill', '#4CD964')
        //         if (operation_flag.sell_first) {
        //             text.text('卖出')
        //             operation_circle.attr('r', 2)
        //             operation_flag.sell_first = false
        //             show_tips = true
        //         }
        //     } else if (action == '优化') {
        //         operation_circle.attr('r', 2.5).attr('fill', '#1580F3')
        //         g_operation.append('line').attr('class', 'rebalance').attr('x1', -0.1).attr('y1', '2').attr('x2', 0).attr('y2', pos_y_bottom)
        //         if (operation_flag.rebalance_first) {
        //             text.text('优化')
        //             operation_circle.attr('r', 2)
        //             operation_flag.rebalance_first = false
        //             show_tips = true
        //         }
        //     } else if (action == '今日') {
        //         g_operation.select('path').style('display', 'none')
        //         operation_circle.attr('r', 2.5).attr('fill', '#5AC8FA')
        //         g_operation.append('line').attr('class', 'today').attr('x1', -0.1).attr('y1', '2.5').attr('x2', 0).attr('y2', pos_y_bottom)
        //         g_operation.append('text').attr('class', 'today-text').attr('x', -2).attr('y', pos_y_bottom - 16).text('今日')
        //     }
        //     if (!show_tips) {
        //         tips.style('display', 'none')
        //     }
        // }
    };
    return PortfolioHisotryGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("daily-return"),
    __metadata("design:type", Object)
], PortfolioHisotryGraphComponent.prototype, "daily_return", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("current-value"),
    __metadata("design:type", Number)
], PortfolioHisotryGraphComponent.prototype, "current_value", void 0);
PortfolioHisotryGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'portfolio-history-graph',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/component/portfolio-history-graph.html"*/'<ion-grid marginTop class="item-title">\n    <ion-row>\n        <ion-col col-3 *ngFor="let item of this.period_list" [ngClass]="{\'current\':item == this.current_period}" (click)="this.changePeriod(item)"> {{item.label}}</ion-col>\n    </ion-row>\n</ion-grid>\n<div class="legend">\n    <div class="item" *ngFor="let item of this.legend">\n        <span [ngStyle]="{\'background-color\':item.color}"></span>{{item.label}}&nbsp; <label style="color:#FF831F">{{item.yield}}</label>\n    </div>\n</div>\n<div class="container">\n</div>\n<!-- <div class="container" *ngIf="daily_return != null || daily_return != []">\n</div>\n<div class="container" *ngIf="daily_return == null || daily_return == []">\n        本基金暂无收益率估算        \n</div> -->\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/component/portfolio-history-graph.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__pipes__["c" /* FormatMoneyPipe */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__pipes__["c" /* FormatMoneyPipe */]])
], PortfolioHisotryGraphComponent);

function getValidOperations(operations, startDate) {
    var result = [];
    for (var date in operations) {
        if (date > startDate) {
            result.push({ date: date, action: operations[date] });
        }
    }
    result.sort(function (first, second) { return first.date < second.date ? -1 : (first.date == second.date ? 0 : 1); });
    var today = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d')(new Date);
    result.push({ date: today, action: '今日' });
    return result;
}
function generateXAxisTickValues(total, count) {
    var mid = Math.round(total / 2) - 1;
    var last = total - 1;
    // if (total % 3 == 0) {
    //     return [0, mid, last]
    // } else if (total > 14) {
    //     return [0, mid, last]
    // } else {
    //     return [0, total - 1]
    // }
    return [0, total - 1];
    // switch (total) {
    //     case 3: return [1];
    //     case 4: return [1, 2];
    //     case 5: return [1, 2, 3];
    //     case 6: return [1, 2, 3, 4];
    //     case 7: return [2, 4];
    //     case 8: return [2, 5];
    //     case 9: return [1, 3, 5, 7];
    //     case 10: return [3, 6];
    //     case 11: return [2, 5, 8];
    //     case 12: return [3, 7];
    //     case 13: return [3, 6, 9];
    //     case 14: return [4, 9];
    // }
    // const values = [];
    // for (let i = 0; i < count; i++) {
    //     values.push(Math.round(total / (count + 1) * (i + 1)));
    // }
    // return values;
}
function generateYAxisTickValues(_a) {
    var historical_data = _a.historical_data, benchmark_data = _a.benchmark_data;
    var _b = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](historical_data), start1 = _b[0], end1 = _b[1];
    var _c = [0, 0], start2 = _c[0], end2 = _c[1];
    if (benchmark_data) {
        _d = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](benchmark_data), start2 = _d[0], end2 = _d[1];
    }
    var start = Math.min(start1, start2), end = Math.max(end1, end2);
    var getStart = start * 100;
    var num = Math.ceil(getStart);
    var startVal = fiveMultiple(num);
    if (start === 0 && end === 0) {
        return [-1, 1];
    }
    else if (start === end) {
        return [start / 2, end * 1.5];
    }
    else {
        return [Number(startVal), end];
    }
    var _d;
}
//5的倍数
function fiveMultiple(numVal) {
    var getNum = parseInt(numVal);
    var num = Math.abs(getNum);
    for (var i = 0; i < 9; i++) {
        if (getNum > 0) {
            //正数越小越向下
            var contrastNum = num - i;
            if (contrastNum % 5 == 0) {
                return contrastNum / 100;
            }
        }
        else {
            //负数越大越向下
            var contrastNum1 = num + i;
            if (contrastNum1 % 5 == 0) {
                return "-" + contrastNum1 / 100;
            }
        }
    }
}
/*
    为了数据更好的显示，特别是少量数据时，需要对原数据形式进行调整
*/
function rebuild_data(data, xTickCount, startIndex) {
    if (data == null || data.length == 0)
        return null;
    if (startIndex > 0) {
        data = data.slice(startIndex);
    }
    var first = data[0];
    var last = data[data.length - 1];
    if (data.length <= xTickCount) {
        //填充首尾
        return [first].concat(data).concat([last]);
    }
    else if (data.length === xTickCount + 1) {
        //填充首部
        return [first].concat(data);
    }
    else {
        //不填充
        return data;
    }
}
function convert_log_ret(data) {
    if (data == null || data.length == 0)
        return null;
    var total = 0;
    var result = data.map(function (item, index) {
        if (index == 0)
            return 0;
        total += item;
        return Math.exp(total) - 1;
    });
    // np.exp(log_ret.cumsum()) -1
    // console.log(result)
    return result;
}
//# sourceMappingURL=portfolio-history-graph.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetWorthGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



window.d3 = __WEBPACK_IMPORTED_MODULE_1_d3__;
var COLORS = ['#FA374F', '#0088FF'];
var time_now = __WEBPACK_IMPORTED_MODULE_1_d3__["timeDay"].offset(new Date(), -1);
var NetWorthGraphComponent = (function () {
    function NetWorthGraphComponent(element, formatMoney) {
        this.element = element;
        this.formatMoney = formatMoney;
        this.ready = false;
        this.X_TICKS_COUNT = 4;
        this.period_list = [
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -1), label: '月' },
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -3), label: '季' },
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -6), label: '半年' },
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -12), label: '年' },
        ];
        this.legend = [{
                label: '本基金',
                color: COLORS[0],
                yield: ''
            }, {
                label: '沪深300',
                color: COLORS[1],
                yield: ''
            }];
        this.current_period = this.period_list[0];
    }
    NetWorthGraphComponent.prototype.ngOnInit = function () {
        this.container = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.element.nativeElement).select('.container').node();
        var options = {
            top: 25,
            bottom: 15,
            left: 55,
            right: 15,
        };
        this.init(options);
        this.ready = true;
    };
    NetWorthGraphComponent.prototype.ngOnChanges = function (changes) {
        if (this.ready) {
            this.draw(this.daily_return);
        }
    };
    NetWorthGraphComponent.prototype.ngAfterViewInit = function () {
        this.draw(this.daily_return);
    };
    NetWorthGraphComponent.prototype.changePeriod = function (item) {
        if (this.current_period == item)
            return;
        this.current_period = item;
        this.draw(this.daily_return);
    };
    NetWorthGraphComponent.prototype.init = function (options) {
        this.margin = {
            left: options.left || 15,
            top: options.top || 15,
            bottom: options.bottom || 0,
            right: options.right || 15,
        };
        this.width = this.container.clientWidth;
        this.height = options.height || 200;
        this.XAXIS_HEIGHT = 15;
    };
    NetWorthGraphComponent.prototype.createSVG = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.container).selectAll('svg').remove();
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.container).append('svg')
            .attr('class', 'd3-line-chart')
            .attr('width', this.width)
            .attr('height', this.height);
        svg.append("linearGradient")
            .attr("id", "portfolio-history-graph-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "offset-0" },
            { offset: "80%", class: "offset-100" },
            { offset: "100%", class: "offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "benchmark-history-graph-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "benchmark-offset-0" },
            { offset: "70%", class: "benchmark-offset-100" },
            { offset: "100%", class: "benchmark-offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "rebalance-graph-gradient")
            .attr("gradientUnits", "objectBoundingBox")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", 1)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "offset-0" },
            { offset: "80%", class: "offset-80" },
            { offset: "100%", class: "offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "today-graph-gradient")
            .attr("gradientUnits", "objectBoundingBox")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", 1)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "offset-0" },
            { offset: "80%", class: "offset-80" },
            { offset: "100%", class: "offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        return svg;
    };
    NetWorthGraphComponent.prototype.draw = function (daily_return, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 0; }
        console.log(daily_return);
        if (daily_return == null)
            return;
        var svg = this.createSVG();
        var margin = this.margin, availableWidth = this.width - this.margin.left - this.margin.right, chartViewHeight = this.height - margin.top - margin.bottom - this.XAXIS_HEIGHT;
        var startDate = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d')(this.current_period.value);
        // data = rebuildData(data, this.X_TICKS_COUNT, startDate)
        var startIndex = daily_return.days.findIndex(function (d) { return d > startDate; });
        var navs = daily_return.navs;
        var data = {
            //     date: rebuild_data(daily_return.days, this.X_TICKS_COUNT, startIndex),
            //     historical_data: rebuild_data(daily_return.product_returns, this.X_TICKS_COUNT, startIndex),
            //     benchmark_data: rebuild_data(daily_return.benchmark_returns, this.X_TICKS_COUNT, startIndex),
            date: daily_return.days,
            historical_data: navs,
            benchmark_data: daily_return.benchmark_data,
        };
        data = {
            date: data.date,
            historical_data: data.historical_data,
            benchmark_data: convert_log_ret(data.benchmark_data),
        };
        var valuesDomain = generateYAxisTickValues(data);
        var valuesDomainNet = generateYAxisTickValuesNet(daily_return.navs);
        var x = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([0, availableWidth]).domain([0, data.date.length - 1]);
        var y = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([chartViewHeight, 0]).domain(valuesDomain);
        var y1 = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([chartViewHeight, 0]).domain(valuesDomainNet);
        var xTickValues = generateXAxisTickValues(data.date.length, this.X_TICKS_COUNT);
        var g_axis = svg.append('g').attr('class', 'g-axis');
        // --- lines view
        var g_chart = svg.append('g').attr('class', 'g-chart').attr('transform', "translate(" + margin.left + "," + margin.top + ")");
        var line = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
            .x(function (_, index) { return x(index); })
            .y(function (d) { return y(d); });
        var area = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
            .x(function (_, index) { return x(index); })
            .y0(chartViewHeight)
            .y1(function (d) { return y(d); });
        // const lineTransition = d3.transition()
        //     .duration(transitionDuration)
        //     .ease(d3.easeLinear);
        // render the lines with inverse order
        var historical_data = data.historical_data;
        g_chart.append('path')
            .datum(historical_data)
            .attr('class', 'line')
            .attr('d', line);
        //--- axis view x-axis
        var dateFormat = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d');
        var xAxisTextFormatter = function (index) { return dateFormat(new Date(data.date[index])); };
        // const xAxisTickScale = d3.scaleLinear().domain([10, 100]).range([])
        var xAxisMarginTop = this.height - margin.bottom - this.XAXIS_HEIGHT;
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]().scale(x).tickPadding(10).ticks(3).tickSizeInner(-xAxisMarginTop).tickSizeOuter(0).tickFormat(xAxisTextFormatter).tickValues(xTickValues);
        var xAxisView = g_axis.append('g')
            .attr('class', 'x axis')
            .attr('transform', "translate(" + margin.left + "," + xAxisMarginTop + ")")
            .call(xAxis);
        //xAxisView.selectAll('.tick text').attr('x', 26);
        //--- axis view y-axis
        var yAxisTextFormatter = __WEBPACK_IMPORTED_MODULE_1_d3__["format"](".4f");
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisRight"]().scale(y).ticks(5).tickSize(availableWidth + 41).tickFormat(function (v) { return yAxisTextFormatter(v); });
        // const yAxisMarginLeft = this.width - margin.right;
        var yAxisView = g_axis.append('g')
            .attr('class', 'y axis')
            .attr('transform', "translate(" + (margin.left - 41) + "," + margin.top + ")")
            .call(yAxis);
        yAxisView.selectAll('g.tick').selectAll('text').attr('x', 33);
        yAxisView.selectAll('g.tick').selectAll('line').attr('x1', 40);
        // 当前市值
        // if (this.current_value) {
        //     const txt = numeral(this.current_value).format('0,0.00')
        //     g_chart.append('text').attr('class', 'current-value').text('￥' + txt).attr('x', availableWidth).attr('y', -10)
        // }
        //---- operations
        var g_operations = svg.append('g').attr('class', 'g-operations');
        var operations = getValidOperations(daily_return.operations, startDate);
        // console.log(operations)
        // operations = [
        // { "date": "2016-09-14", "action": "首次买入" },
        // { "date": "2016-11-30", "action": "卖出" },
        // { "date": "2017-01-05", "action": "优化" },
        // { "date": "2017-02-01", "action": "卖出" },
        // { "date": "2017-03-10", "action": "买入" },
        // { "date": "2017-03-15", "action": "优化" },
        // { "date": "2017-04-12", "action": "今日" },
        // ]
        // const operation_box = `
        //     <path d="M27,10.5 L27,2.00276013 C27,0.893542647 26.1012878,0 24.9926701,0 L2.00732994,0 C0.898338318,0 0,0.896666251 0,2.00276013 L0,10.9972399 C0,12.1064574 0.898712226,13 2.00732994,13 L23.5,13 L29,15 L27,10.5 Z"></path>
        // `
        // const operation_flag = {
        //     'buy_first': true,
        //     'sell_first': true,
        //     'rebalance_first': true,
        // }
        // for (let { date, action } of operations) {
        //     const x_index = data.date.findIndex(p => date == p)
        //     if (x_index < 0) continue
        //     const pos_x = x(x_index) + margin.left
        //     const pos_y = y(data.historical_data[x_index]) + margin.top
        //     const pos_y_bottom = this.height - margin.bottom - this.XAXIS_HEIGHT - pos_y
        //     const g_operation = g_operations.append('g').attr('class', 'operation')
        //         .attr('transform', `translate(${pos_x},${pos_y})`)
        //     const tips = g_operation.append('g').html(operation_box)
        //     const operation_circle = g_operation.append('circle').attr('cx', -0.1).attr('cy', 0)
        //     const text = tips.append('text').attr('x', '-5px').attr('y', '-7px')
        //     let show_tips = false
        //     if (action == '首次买入' || action == '买入') {
        //         operation_circle.attr('r', 2.5).attr('fill', '#FF2D55')
        //         if (operation_flag.buy_first) {
        //             text.text('买入')
        //             operation_circle.attr('r', 2)
        //             operation_flag.buy_first = false
        //             show_tips = true
        //         }
        //     } else if (action == '卖出') {
        //         operation_circle.attr('r', 2.5).attr('fill', '#4CD964')
        //         if (operation_flag.sell_first) {
        //             text.text('卖出')
        //             operation_circle.attr('r', 2)
        //             operation_flag.sell_first = false
        //             show_tips = true
        //         }
        //     } else if (action == '优化') {
        //         operation_circle.attr('r', 2.5).attr('fill', '#1580F3')
        //         g_operation.append('line').attr('class', 'rebalance').attr('x1', -0.1).attr('y1', '2').attr('x2', 0).attr('y2', pos_y_bottom)
        //         if (operation_flag.rebalance_first) {
        //             text.text('优化')
        //             operation_circle.attr('r', 2)
        //             operation_flag.rebalance_first = false
        //             show_tips = true
        //         }
        //     } else if (action == '今日') {
        //         g_operation.select('path').style('display', 'none')
        //         operation_circle.attr('r', 2.5).attr('fill', '#5AC8FA')
        //         g_operation.append('line').attr('class', 'today').attr('x1', -0.1).attr('y1', '2.5').attr('x2', 0).attr('y2', pos_y_bottom)
        //         g_operation.append('text').attr('class', 'today-text').attr('x', -2).attr('y', pos_y_bottom - 16).text('今日')
        //     }
        //     if (!show_tips) {
        //         tips.style('display', 'none')
        //     }
        // }
    };
    return NetWorthGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("daily-return"),
    __metadata("design:type", Object)
], NetWorthGraphComponent.prototype, "daily_return", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("current-value"),
    __metadata("design:type", Number)
], NetWorthGraphComponent.prototype, "current_value", void 0);
NetWorthGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'net-worth-graph',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/component/net-worth-graph.html"*/'<!-- <ion-grid class="item-title">\n    <ion-row>\n        <ion-col col-3 *ngFor="let item of this.period_list" [ngClass]="{\'current\':item == this.current_period}" (click)="this.changePeriod(item)"> {{item.label}}</ion-col>\n    </ion-row>\n</ion-grid> -->\n<!-- <div class="legend">\n    <div class="item" *ngFor="let item of this.legend">\n        <span [ngStyle]="{\'background-color\':item.color}"></span>{{item.label}}&nbsp; <label style="color:#FF831F">{{item.yield}}</label>\n    </div>\n</div> -->\n<div class="container">\n    </div>\n<!-- <div class="container" *ngIf="daily_return != null || daily_return != []">\n</div>\n<div class="container" *ngIf="daily_return == null || daily_return == []">\n        本基金暂无收益率估算        \n</div> -->\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/component/net-worth-graph.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__pipes__["c" /* FormatMoneyPipe */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__pipes__["c" /* FormatMoneyPipe */]])
], NetWorthGraphComponent);

function getValidOperations(operations, startDate) {
    var result = [];
    for (var date in operations) {
        if (date > startDate) {
            result.push({ date: date, action: operations[date] });
        }
    }
    result.sort(function (first, second) { return first.date < second.date ? -1 : (first.date == second.date ? 0 : 1); });
    var today = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d')(new Date);
    result.push({ date: today, action: '今日' });
    return result;
}
function generateXAxisTickValues(total, count) {
    var mid = Math.round(total / 2) - 1;
    var last = total - 1;
    // if (total % 3 == 0) {
    //     return [0, mid, last]
    // } else if (total > 14) {
    //     return [0, mid, last]
    // } else {
    //     return [0, total - 1]
    // }
    return [0, total - 1];
}
function generateYAxisTickValues(_a) {
    var historical_data = _a.historical_data, benchmark_data = _a.benchmark_data;
    var _b = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](historical_data), start = _b[0], end = _b[1];
    // console.log(start)
    // console.log(end)
    var getStart = start * 100;
    var num = Math.ceil(getStart);
    var startVal = fiveMultiple(num);
    // console.log(startVal)
    if (start == end) {
        return [0, end];
    }
    else {
        return [Number(startVal), end];
    }
}
//5的倍数
function fiveMultiple(numVal) {
    var getNum = parseInt(numVal);
    var num = Math.abs(getNum);
    for (var i = 0; i < 9; i++) {
        if (getNum > 0) {
            //正数越小越向下
            var contrastNum = num - i;
            if (contrastNum % 5 == 0) {
                return contrastNum / 100;
            }
        }
        else {
            //负数越大越向下
            var contrastNum1 = num + i;
            if (contrastNum1 % 5 == 0) {
                return "-" + contrastNum1 / 100;
            }
        }
    }
}
function generateYAxisTickValuesNet(historical_data) {
    var _a = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](historical_data), start = _a[0], end = _a[1];
    if (start == end) {
        return [1, end];
    }
    else {
        return [start, end];
    }
}
/*
    为了数据更好的显示，特别是少量数据时，需要对原数据形式进行调整
*/
function rebuild_data(data, xTickCount, startIndex) {
    if (data == null || data.length == 0)
        return null;
    if (startIndex > 0) {
        data = data.slice(startIndex);
    }
    var first = data[0];
    var last = data[data.length - 1];
    if (data.length <= xTickCount) {
        //填充首尾
        return [first].concat(data).concat([last]);
    }
    else if (data.length === xTickCount + 1) {
        //填充首部
        return [first].concat(data);
    }
    else {
        //不填充
        return data;
    }
}
function convert_log_ret(data) {
    if (data == null || data.length == 0)
        return null;
    var total = 0;
    var result = data.map(function (item, index) {
        if (index == 0)
            return 0;
        total += item;
        return Math.exp(total) - 1;
    });
    // np.exp(log_ret.cumsum()) -1
    // console.log(result)
    return result;
}
//# sourceMappingURL=net-worth-graph.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadarGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VALUE_TEXT_COLORS = ['#0088FF', '#FA374F'];
var RADAR_COLORS = ['#F84145', '#0088FF'];
var RADAR_AREA_OPACITY = 0.9;
var AXIS_DATA = [
    { axis: "超额收益", label: '超额收益', dx: 0, dy: -20, text_anchor: 'middle' },
    { axis: "管理经验", label: '管理经验', dx: 20, dy: -5, text_anchor: 'start' },
    { axis: "抗风险", label: '抗风险', dx: 15, dy: 30, text_anchor: 'middle' },
    { axis: "稳定性", label: '稳定性', dx: -15, dy: 30, text_anchor: 'middle' },
    { axis: "历史收益", label: '历史收益', dx: -20, dy: -5, text_anchor: 'end' },
];
var RADAR_DATA_TEMPLATE_1 = {
    "超额收益": { dx: -5, dy: -5, },
    "管理经验": { dx: 5, dy: 5, },
    "抗风险": { dx: 5, dy: 10, },
    "稳定性": { dx: -15, dy: 5, },
    "历史收益": { dx: -15, dy: 10, }
};
var RADAR_DATA_TEMPLATE_2 = [
    {
        "超额收益": { dx: 10, dy: -5, },
        "管理经验": { dx: 6, dy: 10, },
        "抗风险": { dx: -10, dy: 15, },
        "稳定性": { dx: -20, dy: 10, },
        "历史收益": { dx: -5, dy: 15, }
    }, {
        "超额收益": { dx: -20, dy: -5, },
        "管理经验": { dx: 2, dy: -5, },
        "抗跌能力": { dx: 8, dy: 10, },
        "稳定性": { dx: -15, dy: -5, },
        "历史收益": { dx: -25, dy: 5, }
    }
];
var RadarGraphComponent = (function () {
    function RadarGraphComponent(element) {
        this.element = element;
    }
    RadarGraphComponent.prototype.ngOnInit = function () {
        // console.log('ngOnInit')
    };
    RadarGraphComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    RadarGraphComponent.prototype.ngOnChanges = function () {
        this.draw();
    };
    RadarGraphComponent.prototype.draw = function () {
        // console.log(this.portfolio_data)
        // console.log(this.rebalance_data) 
        // console.log("------")
        var margin = { top: 40, right: 75, bottom: 40, left: 75 }, width = this.element.nativeElement.offsetWidth - margin.left - margin.right, height = width;
        var options = {
            w: width,
            h: height,
            margin: margin,
        };
        var radar_data = [];
        if (this.rebalance_data && this.portfolio_data) {
            var model = Object.assign({}, RADAR_DATA_TEMPLATE_1);
            this.bind_data(model, this.rebalance_data);
            radar_data.push(model);
            var model1 = Object.assign({}, RADAR_DATA_TEMPLATE_2[0]);
            this.bind_data(model1, this.portfolio_data);
            radar_data.push(model1);
            this.legend = [{
                    label: this.portfolio_data.name,
                    pkText: 'VS',
                    color: VALUE_TEXT_COLORS[0],
                }, {
                    label: this.rebalance_data.name,
                    color: VALUE_TEXT_COLORS[1],
                }];
        }
        else if (this.portfolio_data) {
            var model = Object.assign({}, RADAR_DATA_TEMPLATE_1);
            this.bind_data(model, this.portfolio_data);
            var historical_score = Math.floor(this.portfolio_data.historical_score * 10) / 10;
            radar_data.push(model);
            this.legend = [{
                    label: this.portfolio_data.name,
                    pkText: historical_score,
                    color: VALUE_TEXT_COLORS[0],
                }];
        }
        if (radar_data.length > 0) {
            var container = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.element.nativeElement).select('.container');
            renderRadarChart(container.node(), AXIS_DATA, radar_data, options, this.legend);
        }
    };
    RadarGraphComponent.prototype.bind_data = function (radar_data, data) {
        radar_data['超额收益'].value = data.excess_ret_power;
        radar_data['管理经验'].value = data.management_experience;
        radar_data['抗风险'].value = data.risk_measure;
        radar_data['稳定性'].value = data.performance_stability;
        radar_data['历史收益'].value = data.hist_ret_power;
    };
    return RadarGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('portfolio'),
    __metadata("design:type", Object)
], RadarGraphComponent.prototype, "portfolio_data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('rebalance'),
    __metadata("design:type", Object)
], RadarGraphComponent.prototype, "rebalance_data", void 0);
RadarGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'radar-graph',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/component/radar-graph.html"*/'<ion-row class="legend">\n    <ion-col col-6 class="item" *ngFor="let item of this.legend">\n        <span [ngStyle]="{\'background-color\':item.color}"></span>{{item.label}}\n    </ion-col>\n</ion-row>\n<div class="container">\n</div>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/component/radar-graph.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], RadarGraphComponent);

/**
 * ref : http://bl.ocks.org/nbremer/21746a9668ffdf6d8242#index.html
 */
function renderRadarChart(id, axis_data, radar_data, options, legend) {
    var cfg = {
        w: 600,
        h: 600,
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        levels: 5,
    };
    //Put all of the options into a variable called cfg
    if ('undefined' !== typeof options) {
        for (var i in options) {
            if ('undefined' !== typeof options[i]) {
                cfg[i] = options[i];
            }
        } //for i
    } //if
    //If the supplied maxValue is smaller than the actual one, replace by the max in the data
    var maxValue = 10;
    var total = axis_data.length, //The number of different axes
    radius = Math.min(cfg.w / 2, cfg.h / 2), //Radius of the outermost circle
    format_value = function (v) { return v >= 10 ? v : v.toFixed(1); }, //Percentage formatting
    angleSlice = Math.PI * 2 / total; //The width in radians of each "slice"
    //Scale for the radius
    var rScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
        .range([0, radius])
        .domain([0, maxValue]);
    //Remove whatever chart with the same id/class was present before
    __WEBPACK_IMPORTED_MODULE_1_d3__["select"](id).select("svg").remove();
    //Initiate the radar chart SVG
    var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](id).append("svg")
        .attr("width", cfg.w + cfg.margin.left + cfg.margin.right)
        .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
        .attr("class", "radar" + id);
    //Append a g element		ß
    var g = svg.append("g")
        .attr('class', "g-class")
        .attr("transform", "translate(" + (cfg.w / 2 + cfg.margin.left) + "," + (cfg.h / 2 + cfg.margin.top) + ")");
    //Wrapper for the grid & axes
    var g_grid_circle = g.append("g").attr("class", "g-grid-circle");
    //Draw the background circles
    g_grid_circle.selectAll(".levels")
        .data(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](1, (cfg.levels + 1)).reverse())
        .enter()
        .append("circle")
        .attr("class", "grid-circle")
        .attr("r", function (d, i) { return radius / cfg.levels * d; })
        .style("fill", "transparent")
        .style("stroke", "#F1F1F1");
    //Text indicating at what % each level is
    g_grid_circle.selectAll(".axisLabel")
        .data(__WEBPACK_IMPORTED_MODULE_1_d3__["range"](1, (cfg.levels + 1)).reverse())
        .enter().append("text")
        .attr("class", "axisLabel")
        .attr("x", function (d, i) { return maxValue * d / cfg.levels > 9 ? -20 : -17; })
        .attr("y", function (d) { return -d * radius / cfg.levels; })
        .attr("dy", "0.4em")
        .style("font-size", "10px")
        .attr("fill", "#999CA7")
        .text(function (d, i) { return maxValue * d / cfg.levels; });
    //Create the straight lines radiating outward from the center
    var axis = g_grid_circle.selectAll(".axis")
        .data(axis_data)
        .enter()
        .append("g")
        .attr("class", "axis");
    //Append the lines
    axis.append("line")
        .attr("class", "axis-line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", function (d, i) { return rScale(maxValue * 1) * Math.cos(angleSlice * i - Math.PI / 2); })
        .attr("y2", function (d, i) { return rScale(maxValue * 1) * Math.sin(angleSlice * i - Math.PI / 2); });
    axis.append("rect")
        .attr('width', 5)
        .attr('height', 5)
        .style('fill', '#9AA0AA')
        .attr("x", function (d, i) { return rScale(maxValue) * Math.cos(angleSlice * i - Math.PI / 2) - 2; })
        .attr("y", function (d, i) { return rScale(maxValue) * Math.sin(angleSlice * i - Math.PI / 2); });
    //Append the labels at each axis
    axis.append("text")
        .attr("class", "axis-label")
        .attr("text-anchor", function (d) { return d.text_anchor; })
        .attr("x", function (d, i) { return rScale(maxValue) * Math.cos(angleSlice * i - Math.PI / 2) + d.dx; })
        .attr("y", function (d, i) { return rScale(maxValue) * Math.sin(angleSlice * i - Math.PI / 2) + d.dy; })
        .text(function (d) { return d.label; });
    //The radial line function
    var radarLine = __WEBPACK_IMPORTED_MODULE_1_d3__["radialLine"]()
        .curve(__WEBPACK_IMPORTED_MODULE_1_d3__["curveCatmullRomClosed"])
        .radius(function (d) { return rScale(d.value); })
        .angle(function (d, i) { return i * angleSlice; });
    //Create a wrapper for the blobs	
    var rador_areas = g.selectAll(".g-rador-area")
        .data(radar_data)
        .enter().append("g")
        .attr("class", "g-rador-area");
    //Append the backgrounds	
    if (radar_data.length > 1) {
        rador_areas
            .append("path")
            .attr("class", "radar-area")
            .attr("d", function (d, i) { return radarLine(build_radar_data(d, i)); })
            .style("fill", function (d, i) { return RADAR_COLORS[i]; })
            .style("fill-opacity", RADAR_AREA_OPACITY);
    }
    else {
        rador_areas
            .append("path")
            .attr("class", "radar-area")
            .attr("d", function (d, i) { return radarLine(build_radar_data(d, i)); })
            .style("fill", RADAR_COLORS[1])
            .style("fill-opacity", RADAR_AREA_OPACITY);
    }
    var g_axis_value = g.selectAll(".axis-value")
        .data(radar_data)
        .enter().append("g")
        .attr("class", "axis-value");
    // g_axis_value.selectAll("text")
    //     .data(build_radar_data)
    //     .enter().append("text")
    //     .attr("x", function (d, i) { return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2) + d.dx; })
    //     .attr("y", function (d, i) { return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2) + d.dy; })
    //     .attr("class", "text")
    //     .style("fill", (d) => VALUE_TEXT_COLORS[d.axis_index])
    //     .text(d => format_value(d.value));
    // helpers
    function build_radar_data(data, i) {
        return axis_data.map(function (item) {
            return Object.assign({ axis_index: i }, data[item.axis]);
        });
    }
    if (radar_data.length == 2) {
        g.append('text')
            .attr('class', 'origin_text Geometr415')
            .attr('x', -15)
            .attr('y', 10)
            .style('fill', '#ffffff')
            .style('font-size', '28px')
            .style('text-shadow', '0px 1px 15px #2f94ff')
            .text(legend[0].pkText);
    }
    else {
        if (String(legend[0].pkText).indexOf('.') > 0) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('.g-class').append('text').text('分')
                .attr('x', 20)
                .attr('y', 15)
                .style('fill', '#ffffff')
                .style('font-size', '15px')
                .style('text-shadow', '0px 1px 15px #2f94ff')
                .style('font-weight', '600');
            g.append('text')
                .attr('class', 'origin_text origin_text1 Geometr415')
                .attr('x', -20)
                .attr('y', 15)
                .style('fill', '#ffffff')
                .style('font-size', '28px')
                .style('text-shadow', '0px 1px 15px #2f94ff')
                .text(legend[0].pkText);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_d3__["selectAll"]('.g-class').append('text').text('分')
                .attr('x', 0)
                .attr('y', 10)
                .style('fill', '#ffffff')
                .style('font-size', '15px')
                .style('text-shadow', '0px 1px 15px #2f94ff')
                .style('font-weight', '600');
            g.append('text')
                .attr('class', 'origin_text origin_text1 Geometr415')
                .attr('x', -15)
                .attr('y', 10)
                .style('fill', '#ffffff')
                .style('font-size', '28px')
                .style('text-shadow', '0px 1px 15px #2f94ff')
                .text(legend[0].pkText);
        }
    }
    console.log(String(legend[0].pkText).indexOf('.'));
}
//# sourceMappingURL=radar-graph.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeterGraphComponent = (function () {
    function MeterGraphComponent(element) {
        this.element = element;
    }
    MeterGraphComponent.prototype.ngOnInit = function () {
        // console.log('ngOnInit')
        this.draw();
    };
    // ngAfterViewInit() {
    //     // console.log('ngAfterViewInit')
    //     this.draw()
    // }
    MeterGraphComponent.prototype.ngOnChanges = function () {
        this.draw();
    };
    MeterGraphComponent.prototype.draw = function () {
        var invest_return_val = this.invest_return / 10;
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.chart-gauge').selectAll('svg').remove();
        renderMeterChart(invest_return_val);
    };
    return MeterGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('invest-return'),
    __metadata("design:type", Number)
], MeterGraphComponent.prototype, "invest_return", void 0);
MeterGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'meter-graph',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/component/meter-graph.html"*/'<div class="chart-gauge">\n</div>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/component/meter-graph.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], MeterGraphComponent);

/*
 * http://bl.ocks.org/ameyms/9184728
*/
function renderMeterChart(invest_return) {
    var barWidth, chart, chartInset, degToRad, repaintGauge, height, margin, numSections, padRad, percToDeg, percToRad, percent, radius, svg, totalPercent, width, needle;
    // current value
    percent = null;
    if (invest_return == 0.8) {
        percent = 1;
    }
    else {
        percent = invest_return || 0;
    }
    numSections = 1;
    padRad = 0.025;
    chartInset = 10;
    // // Orientation of gauge:
    totalPercent = .75;
    var el = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.chart-gauge');
    console.log(screen.width);
    margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 20
    };
    var clientWidth = el._parents[0].clientWidth - margin.left - margin.right / 2;
    width = clientWidth / 2 - 20;
    height = 50;
    radius = Math.min(width) / 2.8;
    barWidth = 40 * width / 500;
    /*
      Utility methods
    */
    percToDeg = function (perc) {
        return perc * 360;
    };
    percToRad = function (perc) {
        return degToRad(percToDeg(perc));
    };
    degToRad = function (deg) {
        return deg * Math.PI / 180;
    };
    // // Create SVG element
    svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + 5 + margin.top + margin.bottom);
    // defs
    var defs = svg.append("defs");
    var linearGradient = defs.append('linearGradient').attr('id', 'blueGradient');
    linearGradient.append('stop').attr('offset', '0%').attr('stop-color', '#48D3F9');
    linearGradient.append('stop').attr('offset', '100%').attr('stop-color', '#046AF1');
    // Add layer for the panel
    chart = svg.append('g').attr('transform', "translate(" + ((width + margin.left) / 2) + ", " + ((height + margin.top + 10) / 1.1) + ")");
    chart.append('path').attr('class', "arc chart-filled");
    chart.append('path').attr('class', "arc chart-empty");
    var arc2 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20);
    var arc1 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20);
    repaintGauge = function (perc) {
        var next_start = totalPercent;
        var arcStartRad = percToRad(next_start);
        var arcEndRad = arcStartRad + percToRad(perc / 2);
        next_start += perc / 2;
        arc1.startAngle(arcStartRad).endAngle(arcEndRad);
        arcStartRad = percToRad(next_start);
        arcEndRad = arcStartRad + percToRad((1 - perc) / 2);
        arc2.startAngle(arcStartRad + padRad).endAngle(arcEndRad);
        chart.select(".chart-filled").attr('d', arc1).attr('fill', 'url(#blueGradient)').attr('stroke-linecap', 'round').attr('stroke-width', '0');
        chart.select(".chart-empty").attr('d', arc2);
    };
    var Needle = (function () {
        /**
          * Helper function that returns the `d` value
          * for moving the needle
        **/
        var recalcPointerPos = function (perc) {
            var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY, radius;
            thetaRad = percToRad(perc / 2);
            centerX = 0;
            centerY = 0;
            radius = this.radius - 3;
            topX = centerX - this.len * Math.cos(thetaRad) / 2.5;
            topY = centerY - this.len * Math.sin(thetaRad) / 2.5;
            leftX = centerX - radius * Math.cos(thetaRad - Math.PI / 2);
            leftY = centerY - radius * Math.sin(thetaRad - Math.PI / 2);
            rightX = centerX - radius * Math.cos(thetaRad + Math.PI / 2);
            rightY = centerY - radius * Math.sin(thetaRad + Math.PI / 2);
            return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
        };
        function Needle(el) {
            this.el = el;
            this.len = width / 3;
            this.radius = this.len / 10;
        }
        Needle.prototype.render = function () {
            this.el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', 4);
            // 文字
            this.el.append('g').attr('class', 'allText');
            this.el.select('g').append("text").text('风险').attr('x', -(this.len + 10)).attr('y', 20);
            this.el.select('g').append("text").text('投资时机').attr('x', -20).attr('y', 20);
            this.el.select('g').append("text").text('机会').attr('x', this.len - 10).attr('y', 20);
            this.el.select('g').append("text").text('观望').attr('x', -10).attr('y', -(height + 14));
            //平均线
            console.log(this.len * 2);
            var lineNum = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            var meanLine = this.el.append('g');
            var eachUnit = 180 / 8;
            var translateVal = this.len - 21;
            for (var _i = 0, lineNum_1 = lineNum; _i < lineNum_1.length; _i++) {
                var item = lineNum_1[_i];
                var meanLineVal = (item * eachUnit) - 90;
                meanLine.append('text').text('|').attr("transform", 'rotate(' + meanLineVal + ') translate(0,-' + translateVal + ')').attr('class', 'lineCol');
            }
            //  return this.el.append('path').attr('class', 'needle').attr('stroke-width',5).attr('fill','green').attr('d', recalcPointerPos.call(this, percent));
            this.el.append('path').attr('class', 'needle').attr('stroke-width', 5).attr('fill', 'green').attr('d', recalcPointerPos.call(this, percent));
            this.el.append('circle').attr('class', 'round-center').attr('fill', '#FFF').attr('cx', 0).attr('cy', 0).attr('r', 2);
        };
        Needle.prototype.moveTo = function (perc) {
            var self, oldValue = this.perc || 0;
            this.perc = perc;
            self = this;
            // Reset pointer position
            this.el.transition().delay(100).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeQuad"]).duration(200).select('.needle').tween('reset-progress', function () {
                return function (percentOfPercent) {
                    var progress = (1 - percentOfPercent) * oldValue;
                    repaintGauge(percent);
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('d', recalcPointerPos.call(self, progress));
                };
            });
            this.el.transition().delay(300).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeBounce"]).duration(1500).select('.needle').tween('progress', function () {
                return function (percentOfPercent) {
                    var progress = percentOfPercent * perc;
                    repaintGauge(progress);
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('d', recalcPointerPos.call(self, progress));
                };
            });
        };
        return Needle;
    })();
    needle = new Needle(chart);
    needle.render();
    needle.moveTo(percent);
    // needle.moveTo(.25)
    // setInterval(function(){
    //   needle.moveTo(Math.random());
    // }, 5000);
}
//# sourceMappingURL=meter-graph.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterCompareGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeterCompareGraphComponent = (function () {
    function MeterCompareGraphComponent(element) {
        this.element = element;
    }
    MeterCompareGraphComponent.prototype.ngOnInit = function () {
        this.draw();
    };
    MeterCompareGraphComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    MeterCompareGraphComponent.prototype.ngOnChanges = function () {
        this.draw();
    };
    MeterCompareGraphComponent.prototype.draw = function () {
        var invest_return_val = this.invest_return / 10;
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.chart-gauge-compare').selectAll('svg').remove();
        return renderMeterChart(invest_return_val);
    };
    return MeterCompareGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('invest-return'),
    __metadata("design:type", Number)
], MeterCompareGraphComponent.prototype, "invest_return", void 0);
MeterCompareGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'meter-compare-graph',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/component/meter-compare-graph.html"*/'<div class="chart-gauge-compare">\n</div>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/component/meter-compare-graph.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], MeterCompareGraphComponent);

/*
 * http://bl.ocks.org/ameyms/9184728
*/
function renderMeterChart(invest_return) {
    var barWidth, chart, chartInset, degToRad, repaintGauge, repaintGaugeTwo, height, margin, numSections, padRad, percToDeg, percToRad, percent, percentTwo, orientationPercentTwo, radius, radiusTwo, svg, totalPercent, width, needle;
    margin = { top: 20, right: 20, bottom: 30, left: 20 };
    var el = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.chart-gauge-compare');
    var clientWidth = el._parents[0].clientWidth - margin.left - margin.right / 2;
    // current value
    percent = null;
    if (invest_return == 0.8) {
        percent = 1;
    }
    else {
        percent = invest_return || 0;
    }
    percentTwo = 0;
    orientationPercentTwo = .5;
    numSections = 1;
    padRad = 0.025;
    chartInset = 10;
    // Orientation of gauge:
    totalPercent = .75;
    width = clientWidth - 20;
    height = 130;
    radius = Math.min(width) / 2.8;
    radiusTwo = Math.min(width) / 3.25;
    barWidth = 40 * width / 500;
    /*
      Utility methods
    */
    percToDeg = function (perc) {
        return perc * 360;
    };
    percToRad = function (perc) {
        return degToRad(percToDeg(perc));
    };
    degToRad = function (deg) {
        return deg * Math.PI / 180;
    };
    // // Create SVG element
    svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);
    // defs
    var defs = svg.append("defs");
    var linearGradient = defs.append('linearGradient').attr('id', 'blueGradient');
    linearGradient.append('stop').attr('offset', '0%').attr('stop-color', '#48D3F9');
    linearGradient.append('stop').attr('offset', '100%').attr('stop-color', '#046AF1');
    var linearGradientTwo = defs.append('linearGradient').attr('id', 'redGradient');
    linearGradientTwo.append('stop').attr('offset', '0%').attr('stop-color', '#F66937');
    linearGradientTwo.append('stop').attr('offset', '100%').attr('stop-color', '#FC211D');
    // Add layer for the panel
    chart = svg.append('g').attr('transform', "translate(" + ((width + margin.left) / 2) + ", " + ((height + margin.top) / 1.1) + ")");
    chart.append('path').attr('class', "arc chart-filled");
    chart.append('path').attr('class', "arc chart-empty");
    chart.append('path').attr('class', "arc chart-filled-2");
    chart.append('path').attr('class', "arc chart-empty-2");
    var arc2 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20);
    var arc1 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20);
    var arc4 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radiusTwo - chartInset).innerRadius(radiusTwo - chartInset - barWidth + 20);
    var arc3 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radiusTwo - chartInset).innerRadius(radiusTwo - chartInset - barWidth + 20);
    repaintGauge = function (perc) {
        var next_start = totalPercent;
        var arcStartRad = percToRad(next_start);
        var arcEndRad = arcStartRad + percToRad(perc / 2);
        next_start += perc / 2;
        arc1.startAngle(arcStartRad).endAngle(arcEndRad);
        arcStartRad = percToRad(next_start);
        arcEndRad = arcStartRad + percToRad((1 - perc) / 2);
        arc2.startAngle(arcStartRad + padRad).endAngle(arcEndRad);
        chart.select(".chart-filled").attr('d', arc1).attr('fill', 'url(#blueGradient)').attr('stroke-linecap', 'round').attr('stroke-width', '0');
        chart.select(".chart-empty").attr('d', arc2);
    };
    repaintGaugeTwo = function (perc) {
        var next_start = totalPercent;
        var arcStartRad = percToRad(next_start);
        var arcEndRad = arcStartRad + percToRad(perc / 2);
        next_start += perc / 2;
        arc3.startAngle(arcStartRad).endAngle(arcEndRad) / 2;
        arcStartRad = percToRad(next_start);
        arcEndRad = arcStartRad + percToRad((1 - perc) / 2);
        arc4.startAngle(arcStartRad + padRad).endAngle(arcEndRad);
        chart.select(".chart-filled-2").attr('d', arc3).attr('fill', 'url(#blueGradient)').attr('stroke-linecap', 'round').attr('stroke-width', '0');
        chart.select(".chart-empty-2").attr('d', arc4);
    };
    var Needle = (function () {
        /**
          * Helper function that returns the `d` value
          * for moving the needle
        **/
        var recalcPointerPos = function (perc) {
            var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY, radius;
            thetaRad = percToRad(perc / 2);
            centerX = 0;
            centerY = 0;
            radius = this.radius - 8;
            topX = centerX - this.len * Math.cos(thetaRad) / 3;
            topY = centerY - this.len * Math.sin(thetaRad) / 3;
            leftX = centerX - radius * Math.cos(thetaRad - Math.PI / 2);
            leftY = centerY - radius * Math.sin(thetaRad - Math.PI / 2);
            rightX = centerX - radius * Math.cos(thetaRad + Math.PI / 2);
            rightY = centerY - radius * Math.sin(thetaRad + Math.PI / 2);
            return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
        };
        function Needle(el) {
            this.el = el;
            this.len = width / 3;
            this.radius = this.len / 10;
        }
        Needle.prototype.render = function () {
            // 文字
            this.el.append('g').attr('class', 'allText');
            this.el.select('g').append("text").text('风险').attr('x', -(this.len)).attr('y', 20);
            this.el.select('g').append("text").text('投资时机').attr('x', -20).attr('y', 20);
            this.el.select('g').append("text").text('机会').attr('x', this.len - 20).attr('y', 20);
            if (el._parents[0].clientWidth <= 375) {
                this.el.select('g').append("text").text('观望').attr('x', -10).attr('y', -118);
            }
            else {
                this.el.select('g').append("text").text('观望').attr('x', -10).attr('y', -128);
            }
            //平均线
            console.log(this.len * 2);
            var lineNum = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            var meanLine = this.el.append('g');
            var eachUnit = 180 / 8;
            var translateVal = this.len - 44;
            for (var _i = 0, lineNum_1 = lineNum; _i < lineNum_1.length; _i++) {
                var item = lineNum_1[_i];
                var meanLineVal = (item * eachUnit) - 90;
                meanLine.append('text').text('|').attr("transform", 'rotate(' + meanLineVal + ') translate(0,-' + translateVal + ')').attr('class', 'lineCol');
            }
            //  return this.el.append('path').attr('class', 'needle').attr('stroke-width',5).attr('fill','green').attr('d', recalcPointerPos.call(this, percent));
            this.el.append('path').attr('class', 'needleTwo').attr('stroke-width', 5).attr('d', recalcPointerPos.call(this, orientationPercentTwo));
            this.el.append('path').attr('class', 'needle').attr('stroke-width', 5).attr('d', recalcPointerPos.call(this, percent));
            this.el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', 4);
            this.el.append('circle').attr('class', 'round-center').attr('fill', '#FFF').attr('cx', 0).attr('cy', 0).attr('r', 2);
        };
        Needle.prototype.moveTo = function (perc) {
            var self, oldValue = this.perc || 0;
            this.perc = perc;
            self = this;
            // Reset pointer position
            this.el.transition().delay(100).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeQuad"]).duration(200).select('.needle').tween('reset-progress', function () {
                return function (percentOfPercent) {
                    var progress = (1 - percentOfPercent) * oldValue;
                    repaintGauge(progress);
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('d', recalcPointerPos.call(self, progress));
                };
            });
            this.el.transition().delay(300).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeBounce"]).duration(1500).select('.needle').tween('progress', function () {
                return function (percentOfPercent) {
                    var progress = percentOfPercent * perc;
                    repaintGauge(progress);
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('d', recalcPointerPos.call(self, progress));
                };
            });
        };
        // 内线
        Needle.prototype.moveToTwo = function (perc) {
            var self, oldValue = this.perc || 0;
            this.perc = perc;
            self = this;
            // Reset pointer position
            this.el.transition().delay(100).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeQuad"]).duration(200).select('.needleTwo').tween('reset-progress', function () {
                return function (percentOfPercent) {
                    var progress = (1 - percentOfPercent) * oldValue;
                    repaintGaugeTwo(progress);
                };
            });
            this.el.transition().delay(300).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeBounce"]).duration(1500).select('.needleTwo').tween('progress', function () {
                return function (percentOfPercent) {
                    var progressTwo = percentOfPercent * perc / 2;
                    repaintGaugeTwo(progressTwo);
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('d', recalcPointerPos.call(self, progressTwo));
                };
            });
        };
        return Needle;
    })();
    //ready
    needle = new Needle(chart);
    needle.render();
    //画线
    needle.moveTo(percent);
    needle.moveToTwo(percentTwo);
}
//# sourceMappingURL=meter-compare-graph.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterComparesGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeterComparesGraphComponent = (function () {
    function MeterComparesGraphComponent(element) {
        this.element = element;
    }
    MeterComparesGraphComponent.prototype.ngOnInit = function () {
        this.draw();
    };
    MeterComparesGraphComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    MeterComparesGraphComponent.prototype.ngOnChanges = function () {
        this.draw();
    };
    MeterComparesGraphComponent.prototype.draw = function () {
        console.log(this.invest_return);
        console.log(this.tinvest_return);
        console.log('meter-compare-graph');
        var invest_return_val = this.invest_return / 10;
        var tinvest_return_val = this.tinvest_return / 10;
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.chart-gauge-compares').selectAll('svg').remove();
        return renderMeterChart(invest_return_val, tinvest_return_val);
    };
    return MeterComparesGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('invest-return'),
    __metadata("design:type", Number)
], MeterComparesGraphComponent.prototype, "invest_return", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('t-invest-return'),
    __metadata("design:type", Number)
], MeterComparesGraphComponent.prototype, "tinvest_return", void 0);
MeterComparesGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'meter-compares-graph',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/component/meter-compares-graph.html"*/'<div class="chart-gauge-compares">\n</div>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/component/meter-compares-graph.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], MeterComparesGraphComponent);

/*
 * http://bl.ocks.org/ameyms/9184728
*/
function renderMeterChart(invest_return, tinvest_return) {
    console.log(invest_return);
    console.log(tinvest_return);
    var barWidth, chart, chartInset, degToRad, repaintGauge, repaintGaugeTwo, height, margin, numSections, padRad, percToDeg, percToRad, percent, percentTwo, orientationPercentTwo, radius, radiusTwo, svg, totalPercent, width, needle;
    margin = { top: 20, right: 20, bottom: 30, left: 20 };
    var el = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]('.chart-gauge-compares');
    var clientWidth = el._parents[0].clientWidth - margin.left - margin.right / 2;
    orientationPercentTwo = tinvest_return || .5;
    // percent = invest_return || 0;
    // percentTwo = tinvest_return * 2 || 0;
    // current value
    percent = 0;
    if (invest_return == 0.8) {
        percent = 1;
    }
    else {
        percent = invest_return || 0;
    }
    // current value 2
    percentTwo = 0;
    if (tinvest_return == 0.8) {
        orientationPercentTwo = 1;
        percentTwo = 2;
    }
    else {
        percentTwo = tinvest_return * 2 || 0;
    }
    console.log(percent);
    console.log(percentTwo);
    numSections = 1;
    padRad = 0.025;
    chartInset = 10;
    // Orientation of gauge:
    totalPercent = .75;
    width = clientWidth - 20;
    height = 130;
    radius = Math.min(width) / 2.8;
    radiusTwo = Math.min(width) / 3.25;
    barWidth = 40 * width / 500;
    /*
      Utility methods
    */
    percToDeg = function (perc) {
        return perc * 360;
    };
    percToRad = function (perc) {
        return degToRad(percToDeg(perc));
    };
    degToRad = function (deg) {
        return deg * Math.PI / 180;
    };
    // // Create SVG element
    svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);
    // defs
    var defs = svg.append("defs");
    var linearGradient = defs.append('linearGradient').attr('id', 'blueGradient1');
    linearGradient.append('stop').attr('offset', '0%').attr('stop-color', '#48D3F9');
    linearGradient.append('stop').attr('offset', '100%').attr('stop-color', '#046AF1');
    var linearGradientTwo = defs.append('linearGradient').attr('id', 'redGradient1');
    linearGradientTwo.append('stop').attr('offset', '0%').attr('stop-color', '#F66937');
    linearGradientTwo.append('stop').attr('offset', '100%').attr('stop-color', '#FC211D');
    // Add layer for the panel
    chart = svg.append('g').attr('transform', "translate(" + ((width + margin.left) / 2) + ", " + ((height + margin.top) / 1.1) + ")");
    chart.append('path').attr('class', "arc chart-filled");
    chart.append('path').attr('class', "arc chart-empty");
    chart.append('path').attr('class', "arc chart-filled-2");
    chart.append('path').attr('class', "arc chart-empty-2");
    var arc2 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20);
    var arc1 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth + 20);
    var arc4 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radiusTwo - chartInset).innerRadius(radiusTwo - chartInset - barWidth + 20);
    var arc3 = __WEBPACK_IMPORTED_MODULE_1_d3__["arc"]().outerRadius(radiusTwo - chartInset).innerRadius(radiusTwo - chartInset - barWidth + 20);
    repaintGauge = function (perc) {
        var next_start = totalPercent;
        var arcStartRad = percToRad(next_start);
        var arcEndRad = arcStartRad + percToRad(perc / 2);
        next_start += perc / 2;
        arc1.startAngle(arcStartRad).endAngle(arcEndRad);
        arcStartRad = percToRad(next_start);
        arcEndRad = arcStartRad + percToRad((1 - perc) / 2);
        arc2.startAngle(arcStartRad + padRad).endAngle(arcEndRad);
        chart.select(".chart-filled").attr('d', arc1).attr('fill', 'url(#blueGradient)').attr('stroke-linecap', 'round').attr('stroke-width', '0');
        chart.select(".chart-empty").attr('d', arc2);
    };
    repaintGaugeTwo = function (perc) {
        var next_start = totalPercent;
        var arcStartRad = percToRad(next_start);
        var arcEndRad = arcStartRad + percToRad(perc / 2);
        next_start += perc / 2;
        arc3.startAngle(arcStartRad).endAngle(arcEndRad) / 2;
        arcStartRad = percToRad(next_start);
        arcEndRad = arcStartRad + percToRad((1 - perc) / 2);
        arc4.startAngle(arcStartRad + padRad).endAngle(arcEndRad);
        chart.select(".chart-filled-2").attr('d', arc3).attr('fill', 'url(#blueGradient)').attr('stroke-linecap', 'round').attr('stroke-width', '0');
        chart.select(".chart-empty-2").attr('d', arc4);
    };
    var Needle = (function () {
        /**
          * Helper function that returns the `d` value
          * for moving the needle
        **/
        var recalcPointerPos = function (perc) {
            var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY, radius;
            thetaRad = percToRad(perc / 2);
            centerX = 0;
            centerY = 0;
            radius = this.radius - 8;
            topX = centerX - this.len * Math.cos(thetaRad) / 3;
            topY = centerY - this.len * Math.sin(thetaRad) / 3;
            leftX = centerX - radius * Math.cos(thetaRad - Math.PI / 2);
            leftY = centerY - radius * Math.sin(thetaRad - Math.PI / 2);
            rightX = centerX - radius * Math.cos(thetaRad + Math.PI / 2);
            rightY = centerY - radius * Math.sin(thetaRad + Math.PI / 2);
            return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
        };
        function Needle(el) {
            this.el = el;
            this.len = width / 3;
            this.radius = this.len / 10;
        }
        Needle.prototype.render = function () {
            // 文字
            this.el.append('g').attr('class', 'allText');
            this.el.select('g').append("text").text('风险').attr('x', -(this.len)).attr('y', 20);
            this.el.select('g').append("text").text('投资时机').attr('x', -20).attr('y', 20);
            this.el.select('g').append("text").text('机会').attr('x', this.len - 20).attr('y', 20);
            if (el._parents[0].clientWidth <= 375) {
                this.el.select('g').append("text").text('观望').attr('x', -10).attr('y', -118);
            }
            else {
                this.el.select('g').append("text").text('观望').attr('x', -10).attr('y', -128);
            }
            //平均线
            console.log(this.len * 2);
            var lineNum = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            var meanLine = this.el.append('g');
            var eachUnit = 180 / 8;
            var translateVal = this.len - 44;
            for (var _i = 0, lineNum_1 = lineNum; _i < lineNum_1.length; _i++) {
                var item = lineNum_1[_i];
                var meanLineVal = (item * eachUnit) - 90;
                meanLine.append('text').text('|').attr("transform", 'rotate(' + meanLineVal + ') translate(0,-' + translateVal + ')').attr('class', 'lineCol');
            }
            //  return this.el.append('path').attr('class', 'needle').attr('stroke-width',5).attr('fill','green').attr('d', recalcPointerPos.call(this, percent));
            this.el.append('path').attr('class', 'needleTwo').attr('stroke-width', 5).attr('d', recalcPointerPos.call(this, orientationPercentTwo));
            this.el.append('path').attr('class', 'needle').attr('stroke-width', 5).attr('d', recalcPointerPos.call(this, percent));
            this.el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', 4);
            this.el.append('circle').attr('class', 'round-center').attr('fill', '#FFF').attr('cx', 0).attr('cy', 0).attr('r', 2);
        };
        Needle.prototype.moveTo = function (perc) {
            var self, oldValue = this.perc || 0;
            this.perc = perc;
            self = this;
            // Reset pointer position
            this.el.transition().delay(100).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeQuad"]).duration(200).select('.needle').tween('reset-progress', function () {
                return function (percentOfPercent) {
                    var progress = (1 - percentOfPercent) * oldValue;
                    repaintGauge(progress);
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('d', recalcPointerPos.call(self, progress));
                };
            });
            this.el.transition().delay(300).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeBounce"]).duration(1500).select('.needle').tween('progress', function () {
                return function (percentOfPercent) {
                    var progress = percentOfPercent * perc;
                    repaintGauge(progress);
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('d', recalcPointerPos.call(self, progress));
                };
            });
        };
        // 内线
        Needle.prototype.moveToTwo = function (perc) {
            var self, oldValue = this.perc || 0;
            this.perc = perc;
            self = this;
            // Reset pointer position
            this.el.transition().delay(100).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeQuad"]).duration(200).select('.needleTwo').tween('reset-progress', function () {
                return function (percentOfPercent) {
                    var progress = (1 - percentOfPercent) * oldValue;
                    repaintGaugeTwo(progress);
                };
            });
            this.el.transition().delay(300).ease(__WEBPACK_IMPORTED_MODULE_1_d3__["easeBounce"]).duration(1500).select('.needleTwo').tween('progress', function () {
                return function (percentOfPercent) {
                    var progressTwo = percentOfPercent * perc / 2;
                    repaintGaugeTwo(progressTwo);
                    return __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr('d', recalcPointerPos.call(self, progressTwo));
                };
            });
        };
        return Needle;
    })();
    //ready
    needle = new Needle(chart);
    needle.render();
    //画线
    needle.moveTo(percent);
    needle.moveToTwo(percentTwo);
}
//# sourceMappingURL=meter-compares-graph.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolyLineGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



window.d3 = __WEBPACK_IMPORTED_MODULE_1_d3__;
var GRADE = ['高', '中', '低'];
var COLORS = ['#F84145', '#0088FF'];
var time_now = __WEBPACK_IMPORTED_MODULE_1_d3__["timeDay"].offset(new Date(), -12);
var PolyLineGraphComponent = (function () {
    function PolyLineGraphComponent(element, formatMoney) {
        this.element = element;
        this.formatMoney = formatMoney;
        this.ready = false;
        this.X_TICKS_COUNT = 4;
        this.yAxisLineNum = [0, 1, 2, 3, 4];
        this.xAxisLineNum = [0, 1, 2, 3, 4, 5];
        this.period_list = [
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -12), label: '年' },
        ];
        this.current_period = this.period_list[0];
    }
    ;
    PolyLineGraphComponent.prototype.ngOnInit = function () {
        this.container = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.element.nativeElement).select('.container').node();
        var options = {
            top: 25,
            bottom: 15,
            left: 55,
            right: 15,
        };
        this.init(options);
        this.ready = true;
    };
    PolyLineGraphComponent.prototype.ngOnChanges = function (changes) {
        if (this.ready) {
            // this.line_return = {"days":["2018-01-02", "2018-01-03", "2018-01-04", "2018-01-05", "2018-01-06"],"values":[1,2,3,4,5,6]}
            // this.line_second_return = {"days":["2018-01-02", "2018-01-03", "2018-01-04", "2018-01-05", "2018-01-06"],"values":[4,2,3,7,5,2]}
            //如果为[]隐藏图表
            if (this.line_return.days.length != 0) {
                this.draw(this.line_return, this.line_second_return);
            }
        }
    };
    // ngAfterViewInit() {
    //     if(this.line_return.days.length != 0){
    //         this.draw(this.line_return,this.line_second_return);
    //     }
    // }
    // changePeriod(item) {
    //     this.draw(this.line_return,this.line_second_return);
    // }
    PolyLineGraphComponent.prototype.init = function (options) {
        this.margin = {
            left: options.left || 15,
            top: options.top || 15,
            bottom: options.bottom || 0,
            right: options.right || 15,
        };
        this.width = this.container.clientWidth;
        this.height = options.height || 150;
        this.XAXIS_HEIGHT = 15;
    };
    PolyLineGraphComponent.prototype.createSVG = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.container).selectAll('svg').remove();
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.container).append('svg')
            .attr('class', 'd3-line-chart')
            .attr('width', this.width)
            .attr('height', this.height);
        svg.append("linearGradient")
            .attr("id", "portfolio-history-graph-gradient")
            .attr("gradientUnits", "userSpaceOnUse");
        return svg;
    };
    PolyLineGraphComponent.prototype.draw = function (line_return, line_second_return, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 0; }
        if (line_return == null)
            return;
        var svg = this.createSVG();
        var margin = this.margin, availableWidth = this.width - this.margin.left - this.margin.right, chartViewHeight = this.height - margin.top - margin.bottom - this.XAXIS_HEIGHT;
        var startDate = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d')(this.current_period.value);
        // data = rebuildData(data, this.X_TICKS_COUNT, startDate)
        var startIndex = line_return.days.findIndex(function (d) { return d > startDate; });
        var merge_date = line_return.days;
        var line_second_return_values = [];
        var line_return_values = line_return.values;
        //是否有第二只基金
        if (line_second_return != undefined) {
            line_second_return_values = line_second_return.values;
            //是否哪个日期最长
            if (line_return.days.length < line_second_return.days.length) {
                merge_date = line_second_return.days;
            }
        }
        var data = {
            date: merge_date,
            historical_data: line_return_values,
            benchmark_data: line_second_return_values,
        };
        data = {
            date: data.date,
            historical_data: data.historical_data,
            benchmark_data: data.benchmark_data,
        };
        var valuesDomain = generateYAxisTickValues(data);
        var valuesDomainNet = generateYAxisTickValuesNet(data.historical_data);
        var x = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([0, availableWidth]).domain([0, data.date.length - 1]);
        var x1 = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range(15, availableWidth).domain([0, data.date.length - 1]);
        var y = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([chartViewHeight, 0]).domain(valuesDomain);
        var y1 = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([chartViewHeight, 0]).domain(valuesDomainNet);
        var xTickValues = generateXAxisTickValues(data.date.length, this.X_TICKS_COUNT);
        var g_axis = svg.append('g').attr('class', 'g-axis');
        // --- lines view
        var g_chart = svg.append('g').attr('class', 'g-chart').attr('transform', "translate(" + margin.left + "," + margin.top + ")");
        var line = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
            .x(function (_, index) { return x(index); })
            .y(function (d) { return y(d); });
        var area = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
            .x(function (_, index) { return x(index); })
            .y0(chartViewHeight)
            .y1(function (d) { return y(d); });
        // const lineTransition = d3.transition()
        //     .duration(transitionDuration)
        //     .ease(d3.easeLinear);
        // render the lines with inverse order
        var historical_data = data.historical_data;
        var benchmark_data = data.benchmark_data;
        var chartViewHeightEqual = chartViewHeight / 4;
        var availableWidthEqual = (availableWidth - 30) / 5;
        var xLineGroup = g_chart.append("g");
        var yLineGroup = g_chart.append("g");
        for (var _i = 0, _a = this.yAxisLineNum; _i < _a.length; _i++) {
            var value = _a[_i];
            var eaualTranslate = "translate(" + 0 + "," + chartViewHeightEqual * value + ")";
            if (value == 0) {
                var eaualTranslate_1 = "translate(" + 0 + "," + 0 + ")";
            }
            else if (value == 4) {
                var eaualTranslate_2 = "translate(" + 0 + "," + chartViewHeightEqual + ")";
            }
            yLineGroup.append("line")
                .attr("transform", eaualTranslate)
                .attr("x2", availableWidth)
                .attr("stroke", "#F1F1F1")
                .attr("stroke-dasharray", 2)
                .attr("stroke-width", 1);
        }
        for (var _b = 0, _c = this.xAxisLineNum; _b < _c.length; _b++) {
            var value = _c[_b];
            var eaualTranslate = "translate(" + (availableWidthEqual * value + 15) + "," + 0 + ")";
            if (value == 0) {
                var eaualTranslate_3 = "translate(" + 15 + "," + 0 + ")";
            }
            else if (value == 5) {
                var eaualTranslate_4 = "translate(" + (availableWidthEqual - 15) + "," + 0 + ")";
            }
            xLineGroup.append("line")
                .attr("transform", eaualTranslate)
                .attr("y2", chartViewHeight)
                .attr("stroke", "#F1F1F1")
                .attr("stroke-dasharray", 2)
                .attr("stroke-width", 1);
        }
        if (benchmark_data) {
            //是否两只基金都有值
            if (historical_data.length != 0 && benchmark_data.length != 0) {
                if (historical_data.length == benchmark_data.length) {
                    g_chart.append('path')
                        .datum(benchmark_data)
                        .attr('class', 'benchmark-line')
                        .attr('d', line);
                }
                else if (historical_data.length > benchmark_data.length) {
                    var date_1 = data.date[historical_data.length - benchmark_data.length];
                    var x_index = data.date.findIndex(function (p) { return date_1 == p; });
                    var pos_x = x(x_index);
                    var pos_y = y(data.historical_data[x_index]) + margin.top;
                    g_chart.append('path')
                        .datum(benchmark_data)
                        .attr('class', 'benchmark-line')
                        .attr('d', line)
                        .attr('transform', "translate(" + pos_x + ",0)");
                }
                else if (historical_data.length < benchmark_data.length) {
                    var date_2 = data.date[benchmark_data.length - historical_data.length];
                    var x_index = data.date.findIndex(function (p) { return date_2 == p; });
                    var pos_x = x(x_index);
                    var pos_y = y(data.benchmark_data[x_index]) + margin.top;
                    this.pos_x = pos_x;
                    g_chart.append('path')
                        .datum(benchmark_data)
                        .attr('class', 'benchmark-line')
                        .attr('d', line);
                }
            }
            if (this.pos_x) {
                g_chart.append('path')
                    .datum(historical_data)
                    .attr('class', 'line')
                    .attr('id', 'line')
                    .attr('d', line)
                    .attr('transform', "translate(" + this.pos_x + ",0)");
            }
            else {
                g_chart.append('path')
                    .datum(historical_data)
                    .attr('class', 'line')
                    .attr('id', 'line')
                    .attr('d', line);
            }
            //--- axis view x-axis
            var dateFormat_1 = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d');
            var xAxisTextFormatter = function (index) { return dateFormat_1(new Date(data.date[index])); };
            // const xAxisTickScale = d3.scaleLinear().domain([10, 100]).range([])
            var xAxisMarginTop = this.height - margin.bottom - this.XAXIS_HEIGHT;
            var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]().scale(x).tickPadding(10).ticks(0).tickSizeInner(-xAxisMarginTop).tickSizeOuter(0).tickFormat(xAxisTextFormatter).tickValues(xTickValues);
            var xAxisView = g_axis.append('g')
                .attr('class', 'x axis')
                .attr('transform', "translate(" + margin.left + "," + xAxisMarginTop + ")")
                .call(xAxis);
            //--- axis view y-axis
            var yAxisView = g_axis.append('g')
                .attr('class', "y axis")
                .attr('transform', "translate(" + (margin.left - 40) + "," + margin.top + ")");
            yAxisView.append("text").text(GRADE[0]).attr('x', 2).attr('y', 5);
            yAxisView.append("text").text(GRADE[1]).attr('x', 2).attr('y', 50);
            yAxisView.append("text").text(GRADE[2]).attr('x', 2).attr('y', 95);
            //--- axis view y-axis
            // const yAxisTextFormatter = d3.format(".2")
            // const yAxis = d3.axisRight().scale(y).ticks(4).tickSize(availableWidth + 41).tickFormat(v => yAxisTextFormatter(v));
            // // const yAxisMarginLeft = this.width - margin.right;
            // const yAxisView = g_axis.append('g')
            //     .attr('class', 'y axis')
            //     .attr('transform', `translate(${margin.left - 41},${margin.top})`)
            //     .call(yAxis);
            // yAxisView.selectAll('g.tick').selectAll('text').attr('x', 40);
            // yAxisView.selectAll('g.tick').selectAll('line').attr('x1', 40)
            // 当前市值
            // if (this.current_value) {
            //     const txt = numeral(this.current_value).format('0,0.00')
            //     g_chart.append('text').attr('class', 'current-value').text('￥' + txt).attr('x', availableWidth).attr('y', -10)
            // }
            //---- operations
            var g_operations = svg.append('g').attr('class', 'g-operations');
            var firstDate = data.date[0];
            var lastDate = data.date[data.date.length - 1];
            var operations = getValidOperations(line_return.operations, startDate);
            this.operations = operations;
            // console.log(operations)
            operations = [
                { "date": firstDate, "action": "开始" },
                { "date": lastDate, "action": "终点" },
            ];
            var operation_box = "\n            <path d=\"M27,10.5 L27,2.00276013 C27,0.893542647 26.1012878,0 24.9926701,0 L2.00732994,0 C0.898338318,0 0,0.896666251 0,2.00276013 L0,10.9972399 C0,12.1064574 0.898712226,13 2.00732994,13 L23.5,13 L29,15 L27,10.5 Z\"></path>\n        ";
            var operation_flag = {
                'buy_first': true,
                'sell_first': true,
                'rebalance_first': true,
            };
            // 第二只基金开始与结束点位
            if (line_second_return) {
                var firstDate_1;
                var lastDate_1;
                if (line_return.days.length > line_second_return.days.length) {
                    firstDate_1 = line_second_return.days[0];
                    lastDate_1 = line_second_return.days[line_second_return.days.length - 1];
                }
                else {
                    firstDate_1 = line_return.days[0];
                    lastDate_1 = line_return.days[line_return.days.length - 1];
                }
                var operationsTwo = [
                    { "date": firstDate_1, "action": "第二开始" },
                    { "date": lastDate_1, "action": "第二终点" },
                ];
                var _loop_1 = function (date, action) {
                    var x_index = line_return.days.findIndex(function (p) { return date == p; });
                    var x_index1 = line_second_return.days.findIndex(function (p) { return date == p; });
                    var pos_x = x(x_index) + margin.left;
                    var pos2_x = x(x_index) + margin.left + this_1.pos_x;
                    var pos_y = y(data.historical_data[x_index]) + margin.top;
                    var pos2_y = y(data.benchmark_data[x_index1]) + margin.top;
                    var pos_x_value = void 0;
                    var pos_y_value = void 0;
                    if (this_1.pos_x) {
                        pos_x_value = pos2_x;
                    }
                    else {
                        pos_x_value = pos_x;
                    }
                    var g_operation = g_operations.append('g').attr('class', 'operation1')
                        .attr('transform', "translate(" + pos_x_value + "," + pos2_y + ")");
                    var tips = g_operation.append('g').html(operation_box);
                    var operation_circle = g_operation.append('circle').attr('cx', -0.1).attr('cy', 0);
                    var text = tips.append('text').attr('x', '-5px').attr('y', '-7px');
                    var show_tips = false;
                    if (action == '第二开始') {
                        g_operation.append("circle").attr('r', 2).attr("fill", "#FFFFFF");
                        if (this_1.pos_x) {
                            operation_circle.attr('r', 5.5).attr('fill', COLORS[1]);
                        }
                        else {
                            operation_circle.attr('r', 5.5).attr('fill', COLORS[0]);
                        }
                    }
                    else if (action == '第二终点') {
                        if (this_1.pos_x) {
                            g_operation.append("circle").attr('r', 5).attr("fill", COLORS[1]).attr("stroke-width", "4").attr("stroke", "rgba(0,136,254,0.4)");
                            operation_circle.attr('r', 4).attr('fill', COLORS[1]);
                        }
                        else {
                            g_operation.append("circle").attr('r', 5).attr("fill", COLORS[0]).attr("stroke-width", "4").attr("stroke", "rgba(248,65,69,0.4)");
                            operation_circle.attr('r', 4).attr('fill', COLORS[0]);
                        }
                    }
                    if (!show_tips) {
                        tips.style('display', 'none');
                    }
                };
                var this_1 = this;
                for (var _d = 0, operationsTwo_1 = operationsTwo; _d < operationsTwo_1.length; _d++) {
                    var _e = operationsTwo_1[_d], date = _e.date, action = _e.action;
                    _loop_1(date, action);
                }
            }
            var _loop_2 = function (date, action) {
                var x_index = data.date.findIndex(function (p) { return date == p; });
                var x_index1 = void 0;
                if (this_2.pos_x) {
                    x_index1 = line_second_return.days.findIndex(function (p) { return date == p; });
                }
                if (x_index < 0)
                    return "continue";
                var pos_x = x(x_index) + margin.left;
                var pos1_x = x(x_index) + margin.left + this_2.pos_x;
                var pos_y = y(data.historical_data[x_index]) + margin.top;
                var pos1_y = y(data.benchmark_data[x_index1]) + margin.top;
                var pos_y_bottom = this_2.height - margin.bottom - this_2.XAXIS_HEIGHT - pos_y;
                var pos_x_v = void 0;
                var pos_x_x = void 0;
                if (this_2.pos_x) {
                    pos_x_x = pos1_x;
                    pos_x_v = pos1_y;
                }
                else {
                    pos_x_x = pos_x;
                    pos_x_v = pos_y;
                }
                var g_operation = g_operations.append('g').attr('class', 'operation')
                    .attr('transform', "translate(" + pos_x + "," + pos_x_v + ")");
                var tips = g_operation.append('g').html(operation_box);
                var operation_circle = g_operation.append('circle').attr('cx', -0.1).attr('cy', 0);
                var text = tips.append('text').attr('x', '-5px').attr('y', '-7px');
                var show_tips = false;
                if (action == '开始') {
                    g_operation.append("circle").attr('r', 2).attr("fill", "#FFFFFF");
                    if (this_2.pos_x) {
                        operation_circle.attr('r', 5.5).attr('fill', COLORS[0]);
                    }
                    else {
                        operation_circle.attr('r', 5.5).attr('fill', COLORS[1]);
                    }
                }
                else if (action == '终点') {
                    if (this_2.pos_x) {
                        operation_circle.attr('r', 4).attr('fill', COLORS[0]);
                        g_operation.append("circle").attr('r', 5).attr("fill", COLORS[0]).attr("stroke-width", "4").attr("stroke", "rgba(248,65,69,0.4)");
                    }
                    else {
                        operation_circle.attr('r', 4).attr('fill', COLORS[1]);
                        g_operation.append("circle").attr('r', 5).attr("fill", COLORS[1]).attr("stroke-width", "4").attr("stroke", "rgba(0,136,254,0.4)");
                    }
                }
                if (!show_tips) {
                    tips.style('display', 'none');
                }
            };
            var this_2 = this;
            // 第一只基金开始与结束点位
            for (var _f = 0, operations_1 = operations; _f < operations_1.length; _f++) {
                var _g = operations_1[_f], date = _g.date, action = _g.action;
                _loop_2(date, action);
            }
        }
    };
    return PolyLineGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("line-return"),
    __metadata("design:type", Object)
], PolyLineGraphComponent.prototype, "line_return", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("line-second-return"),
    __metadata("design:type", Object)
], PolyLineGraphComponent.prototype, "line_second_return", void 0);
PolyLineGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'poly-line-graph',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/component/poly-line-graph.html"*/'<div class="container">\n</div>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/component/poly-line-graph.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__pipes__["c" /* FormatMoneyPipe */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__pipes__["c" /* FormatMoneyPipe */]])
], PolyLineGraphComponent);

function getValidOperations(operations, startDate) {
    var result = [];
    for (var date in operations) {
        if (date > startDate) {
            result.push({ date: date, action: operations[date] });
        }
    }
    result.sort(function (first, second) { return first.date < second.date ? -1 : (first.date == second.date ? 0 : 1); });
    var today = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d')(new Date);
    result.push({ date: today, action: '今日' });
    return result;
}
function generateXAxisTickValues(total, count) {
    var mid = Math.round(total / 2) - 1;
    var last = total - 1;
    return [0, total - 1];
    // if (total % 3 == 0) {
    //     return [0, mid, last]
    // } else if (total > 14) {
    //     return [0, mid, last]
    // } else {
    //     return [0, total - 1]
    // }
    // switch (total) {
    //     case 3: return [1];
    //     case 4: return [1, 2];
    //     case 5: return [1, 2, 3];
    //     case 6: return [1, 2, 3, 4];
    //     case 7: return [2, 4];
    //     case 8: return [2, 5];
    //     case 9: return [1, 3, 5, 7];
    //     case 10: return [3, 6];
    //     case 11: return [2, 5, 8];
    //     case 12: return [3, 7];
    //     case 13: return [3, 6, 9];
    //     case 14: return [4, 9];
    // }
    // const values = [];
    // for (let i = 0; i < count; i++) {
    //     values.push(Math.round(total / (count + 1) * (i + 1)));
    // }
    // return values;
}
function generateYAxisTickValues(_a) {
    var historical_data = _a.historical_data, benchmark_data = _a.benchmark_data;
    // const [start1, end1] = d3.extent(historical_data);
    // let [start2, end2] = [0, 0];
    // if (benchmark_data) {
    //     [start2, end2] = d3.extent(benchmark_data);
    // }
    // const start = Math.min(start1, start2), end = Math.max(end1, end2)
    // if (start === 0 && end === 0) {
    //     return [-1, 1];
    // } else if (start === end) {
    //     return [start / 2, end * 1.5];
    // } else {
    //     return [start, end];
    // }
    return [0, 10];
}
function generateYAxisTickValuesNet(historical_data) {
    var _a = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](historical_data), start = _a[0], end = _a[1];
    if (parseInt(start) == parseInt(end)) {
        return [0, end];
    }
    else {
        return [start, end];
    }
}
/*
    为了数据更好的显示，特别是少量数据时，需要对原数据形式进行调整
*/
function rebuild_data(data, xTickCount, startIndex) {
    if (data == null || data.length == 0)
        return null;
    if (startIndex > 0) {
        data = data.slice(startIndex);
    }
    var first = data[0];
    var last = data[data.length - 1];
    if (data.length <= xTickCount) {
        //填充首尾
        return [first].concat(data).concat([last]);
    }
    else if (data.length === xTickCount + 1) {
        //填充首部
        return [first].concat(data);
    }
    else {
        //不填充
        return data;
    }
}
function convert_log_ret(data) {
    if (data == null || data.length == 0)
        return null;
    var total = 0;
    var result = data.map(function (item, index) {
        if (index == 0)
            return 0;
        total += item;
        return Math.exp(total) - 1;
    });
    // np.exp(log_ret.cumsum()) -1
    // console.log(result)
    return result;
}
//# sourceMappingURL=poly-line-graph.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpectGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



window.d3 = __WEBPACK_IMPORTED_MODULE_1_d3__;
var COLORS = ['#F84145', '#0088FF'];
var time_now = __WEBPACK_IMPORTED_MODULE_1_d3__["timeDay"].offset(new Date(), -1);
var ExpectGraphComponent = (function () {
    function ExpectGraphComponent(element, formatMoney) {
        this.element = element;
        this.formatMoney = formatMoney;
        this.ready = false;
        this.X_TICKS_COUNT = 4;
        this.period_list = [
            { value: __WEBPACK_IMPORTED_MODULE_1_d3__["timeMonth"].offset(time_now, -3), label: "半年" },
        ];
        this.legend = [{
                label: '',
                color: COLORS[1],
                yield: ''
            }, {
                label: '',
                color: '',
                yield: ''
            }];
        this.current_period = this.period_list[0];
    }
    ExpectGraphComponent.prototype.ngOnInit = function () {
        this.container = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.element.nativeElement).select('.container').node();
        var options = {
            top: 25,
            bottom: 15,
            left: 45,
            right: 15,
        };
        this.init(options);
        this.ready = true;
    };
    ExpectGraphComponent.prototype.ngOnChanges = function (changes) {
        if (this.ready) {
            this.draw(this.performance_return, this.performance_second_return);
            this.legend[0].label = this.performance_return.name;
            if (this.performance_second_return) {
                this.legend[1].label = this.performance_second_return.name;
                this.legend[1].color = COLORS[0];
            }
        }
    };
    ExpectGraphComponent.prototype.ngAfterViewInit = function () {
        this.draw(this.performance_return, this.performance_second_return);
    };
    ExpectGraphComponent.prototype.changePeriod = function (item) {
        if (this.current_period == item)
            return;
        this.current_period = item;
        this.draw(this.performance_return, this.performance_second_return);
    };
    ExpectGraphComponent.prototype.init = function (options) {
        this.margin = {
            left: options.left || 15,
            top: options.top || 15,
            bottom: options.bottom || 0,
            right: options.right || 15,
        };
        this.width = this.container.clientWidth;
        this.height = options.height || 200;
        this.XAXIS_HEIGHT = 15;
    };
    ExpectGraphComponent.prototype.createSVG = function () {
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.container).selectAll('svg').remove();
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.container).append('svg')
            .attr('class', 'd3-line-chart')
            .attr('width', this.width)
            .attr('height', this.height);
        svg.append("linearGradient")
            .attr("id", "portfolio-history-graph")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "asea-gradient-0" },
            { offset: "40%", class: "asea-gradient-p3" },
            { offset: "82%", class: "asea-gradient-0" },
            { offset: "100%", class: "asea-gradient-0" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "benchmark-history-graph")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "benchmark-asea-gradient-0" },
            { offset: "50%", class: "benchmark-asea-gradient-p3" },
            { offset: "82%", class: "benchmark-asea-gradient-0" },
            { offset: "100%", class: "benchmark-asea-gradient-0" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "profit-1-graph-gradients")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", -5).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "asea-gradient-0" },
            { offset: "20%", class: "asea-gradient-0" },
            { offset: "33%", class: "asea-gradient-50" },
            { offset: "45%", class: "asea-gradient-0" },
            { offset: "100%", class: "asea-gradient-0" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "profit-2-graph-gradients")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", -5).attr("y1", 0)
            .attr("x2", 0).attr("y2", this.height)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "benchmark-asea-gradient-0" },
            { offset: "20%", class: "benchmark-asea-gradient-0" },
            { offset: "33%", class: "benchmark-asea-gradient-50" },
            { offset: "45%", class: "benchmark-asea-gradient-0" },
            { offset: "100%", class: "benchmark-asea-gradient-0" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "expect-axea-graph")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 1).attr("y2", 0.8)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "offset-50" },
            { offset: "45%", class: "offset-0" },
            { offset: "50%", class: "offset-50" },
            { offset: "55%", class: "offset-0" },
            { offset: "100%", class: "offset-50" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "rebalance-graph-gradient")
            .attr("gradientUnits", "objectBoundingBox")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", 1)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "offset-0" },
            { offset: "100%", class: "offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "today-graph-gradient")
            .attr("gradientUnits", "objectBoundingBox")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", 1)
            .selectAll("stop")
            .data([
            { offset: "0%", class: "offset-0" },
            { offset: "80%", class: "offset-80" },
            { offset: "100%", class: "offset-100" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        svg.append("linearGradient")
            .attr("id", "prod-second-possibility-area")
            .attr("gradientUnits", "objectBoundingBox")
            .selectAll("stop")
            .data([
            { offset: "0%", class: "second-offset-50" },
            { offset: "100%", class: "second-offset-50" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("class", function (d) { return d.class; });
        return svg;
    };
    ExpectGraphComponent.prototype.draw = function (performance_return, performance_second_return, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 0; }
        console.log(performance_return);
        console.log(performance_second_return);
        console.log('performance_second_return');
        // if (daily_return == null) return;
        if (performance_return == null)
            return;
        var svg = this.createSVG();
        var margin = this.margin, availableWidth = this.width - this.margin.left - this.margin.right, chartViewHeight = this.height - margin.top - margin.bottom - this.XAXIS_HEIGHT;
        var startDate = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d')(this.current_period.value);
        // data = rebuildData(data, this.X_TICKS_COUNT, startDate)
        // const startIndex = daily_return.days.findIndex(d => d > startDate)
        var merge_date = [];
        var prod1_historical_values = performance_return.historical.values;
        var prod1_possibility_values = performance_return.possibility.other_values;
        var prod1_possibility_main_values = performance_return.possibility.main_values;
        var prod1_trading_days = performance_return.trading_days;
        var prod2_historical_values = null;
        var prod2_possibility_values = null;
        var prod2_possibility_main_values = null;
        var prod1_days = performance_return.historical.days;
        var prod1_possibility_days = performance_return.possibility.days;
        //判断是否有第二只基金
        if (performance_second_return != undefined) {
            var prod2_days = performance_second_return.historical.days;
            prod2_historical_values = performance_second_return.historical.values;
            prod2_possibility_values = performance_second_return.possibility.other_values;
            prod2_possibility_main_values = performance_second_return.possibility.main_values;
            var prod_one_len = prod1_days.length;
            var prod_two_len = prod2_days.length;
            // if(prod_one_len == prod_two_len){
            //     merge_date = prod1_days.concat(prod1_possibility_days)
            // }else{
            //     //取交  
            //     if(prod_one_len > prod_two_len){
            //         const set_prod1_days = prod1_days.splice(prod_one_len - prod_two_len,prod_two_len)
            //         prod1_historical_values = prod1_historical_values.splice(prod_one_len - prod_two_len,prod_two_len)
            //         merge_date = merge_date = set_prod1_days.concat(prod1_possibility_days)
            //     }else{
            //         const set_prod2_days = prod2_days.splice(prod_two_len - prod_one_len,prod_one_len)
            //         prod2_historical_values = prod2_historical_values.splice(prod_one_len - prod_two_len,prod_two_len)
            //         merge_date = merge_date = set_prod2_days.concat(prod1_possibility_days)
            //     }
            // }
        }
        // merge_date = prod1_days.concat(prod1_possibility_days);
        merge_date = prod1_trading_days;
        var data = {
            date: merge_date,
            historical_data: prod1_historical_values,
            benchmark_data: prod2_historical_values,
            pro1_possibility_data: prod1_possibility_main_values,
            pro1_possibility_y0_data: prod1_possibility_values,
            pro1_possibility_y2_data: prod1_possibility_values,
            pro1_possibility_area_data: prod1_possibility_values,
            pro1_possibility_small_area_data: prod1_possibility_values,
            pro2_possibility_data: prod2_possibility_main_values,
            pro2_possibility_y0_data: prod2_possibility_values,
            pro2_possibility_y2_data: prod2_possibility_values,
            pro2_possibility_area_data: prod2_possibility_values,
            pro2_possibility_small_area_data: prod2_possibility_values,
        };
        data = {
            date: data.date,
            historical_data: convert_log_ret(data.historical_data),
            benchmark_data: convert_log_ret(data.benchmark_data),
            pro1_possibility_data: convert_log_ret(data.pro1_possibility_data),
            pro1_possibility_y0_data: expected_log_ret(data.pro1_possibility_y0_data, 0),
            pro1_possibility_y2_data: expected_log_ret(data.pro1_possibility_y2_data, 3),
            pro1_possibility_area_data: area_log_set(data.pro1_possibility_area_data),
            pro1_possibility_small_area_data: small_area_log_set(data.pro1_possibility_area_data),
            pro2_possibility_data: convert_log_ret(data.pro2_possibility_data),
            pro2_possibility_y0_data: expected_log_ret(data.pro2_possibility_y0_data, 0),
            pro2_possibility_y2_data: expected_log_ret(data.pro2_possibility_y2_data, 3),
            pro2_possibility_area_data: area_log_set(data.pro2_possibility_area_data),
            pro2_possibility_small_area_data: small_area_log_set(data.pro2_possibility_small_area_data),
        };
        var valuesDomain;
        if (performance_second_return) {
            var min = data.benchmark_data.concat(data.historical_data);
            var max = data.pro2_possibility_small_area_data.concat(data.pro1_possibility_small_area_data).concat(data.pro1_possibility_y2_data);
            valuesDomain = generateYAxisTickValues(min, max);
        }
        else {
            var max = data.pro1_possibility_small_area_data.concat(data.pro1_possibility_y2_data);
            valuesDomain = generateYAxisTickValues(data.historical_data, max);
        }
        console.log(valuesDomain);
        //incomeHeight
        // const getV = incomeGradienteValues(data.historical_data);
        // const valuesDomain = generateYAxisTickValues(data.historical_data,data.pro1_possibility_y0_data); 
        var availableWidthHalf = availableWidth / 2;
        var x = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([0, availableWidth]).domain([0, data.date.length - 1]);
        var x2 = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([0, availableWidth / 2 + 30]).domain([0, data.date.length / 2 - 1]);
        var y = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().range([chartViewHeight, 0]).domain(valuesDomain);
        var g_axis = svg.append('g').attr('class', 'g-axis');
        // --- lines view
        var g_chart = svg.append('g').attr('class', 'g-chart').attr('transform', "translate(" + margin.left + "," + margin.top + ")");
        var line = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
            .x(function (_, index) { return x(index); })
            .y(function (d) { return y(d); });
        var lines = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
            .x(function (_, index) { return x2(index); })
            .y(function (d) { return y(d); });
        var exp_line = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
            .x(function (_, index) { return x2(index); })
            .y(function (d) { return y(d); });
        var area = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
            .x(function (_, index) { return x(index); })
            .y0(this.height)
            .y1(function (d) { return y(d); });
        // historical map
        var mapVals = performance_return.historical.days.map(function (item, i) {
            var x_index = data.date.findIndex(function (p) { return item == p; });
            return { date: x_index, value: performance_return.historical.values[i] };
        });
        var linexy = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.value); });
        //.interpolate('monotone');
        var areaxy = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]()
            .x(function (d) { return x(d.date); })
            .y0(this.height)
            .y1(function (d) { return y(d.value); });
        // const lineTransition = d3.transition()
        //     .duration(transitionDuration)
        //     .ease(d3.easeLinear);
        //--- axis view y-axis
        var yAxisTextFormatter = __WEBPACK_IMPORTED_MODULE_1_d3__["format"](".0%");
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisRight"]().scale(y).ticks(5).tickSize(availableWidth + 41).tickFormat(function (v) { return yAxisTextFormatter(v); });
        console.log(yAxis);
        // const yAxisMarginLeft = this.width - margin.right;
        var yAxisView = g_axis.append('g')
            .attr('class', 'y axis')
            .attr('transform', "translate(" + (margin.left - 41) + "," + margin.top + ")")
            .call(yAxis);
        yAxisView.selectAll('g.tick').selectAll('text').attr('x', 35);
        yAxisView.selectAll('g.tick').selectAll('line').attr('x1', 40).attr('stroke-dasharray', 2).attr('stroke-width', 0.5).attr('stroke', '#F1F1F1');
        var pos_y;
        var curDate1;
        if (performance_second_return) {
            curDate1 = performance_second_return.historical.days[performance_second_return.historical.days.length - 1];
        }
        else {
            curDate1 = performance_return.historical.days[performance_return.historical.days.length - 1];
        }
        var x_index = data.date.findIndex(function (p) { return curDate1 == p; });
        if (x_index < 0)
            return;
        var pos_x = x(x_index) + margin.left;
        var pos_y_1 = y(data.historical_data[x_index]) + margin.top;
        if (performance_second_return) {
            pos_y = y(data.benchmark_data[x_index]);
        }
        else {
            pos_y = y(data.historical_data[x_index]) / 3 + margin.top - 7;
        }
        var expect_chart = g_chart.append("g");
        var prod_two_expect_charta = expect_chart.append('g').attr("class", "prod_2");
        var prod_one_expect_charta = expect_chart.append('g').attr("class", "prod_1");
        if (performance_return.benchmark_data) {
            var prod_one_expect_charta_1 = expect_chart.append('g').attr("class", "prod_1");
        }
        var xTickValues = generateXAxisTickValues(data.date, this.X_TICKS_COUNT, performance_return.possibility.days[0]);
        // render the lines with inverse order
        var historical_data = data.historical_data;
        var benchmark_data = data.benchmark_data;
        var pro1_possibility_data = data.pro1_possibility_data;
        var pro1_possibility_area_data = data.pro1_possibility_area_data;
        var pro1_possibility_small_area_data = data.pro1_possibility_small_area_data;
        // prod_two Expect 
        if (benchmark_data) {
            // product 2 historical data map
            var prod2_map = performance_second_return.historical.days.map(function (item, i) {
                var x_index = data.date.findIndex(function (p) { return item == p; });
                return { date: x_index, value: performance_second_return.historical.values[i] };
            });
            g_chart.append('path')
                .attr('class', 'benchmark-line')
                .attr('d', linexy(prod2_map));
            var pos2_y = y(data.benchmark_data[x_index]) + margin.top;
            var pro2_possibility_data = data.pro2_possibility_data;
            var pro2_possibility_area_data = data.pro2_possibility_area_data;
            var pro2_possibility_small_area_data = data.pro2_possibility_small_area_data;
            // prod_two Expect  
            prod_two_expect_charta.append('path')
                .datum(pro2_possibility_area_data)
                .attr('class', 'prod-second-possibility-area-gradient')
                .attr("transform", "translate(" + (pos_x - 55) + ", -0)")
                .attr('d', function (d) { return lines(d) + "Z"; });
            // .attr('d', exp_line);
            prod_two_expect_charta.append('path')
                .datum(pro2_possibility_small_area_data)
                .attr('class', 'prod-second-possibility-area-gradient')
                .attr("transform", "translate(" + (pos_x - 55) + ",-0)")
                .attr('d', function (d) { return lines(d) + "Z"; });
            prod_two_expect_charta.append('path')
                .datum(pro2_possibility_data)
                .attr('class', 'prod-second-possibility-line')
                .attr("transform", "translate(" + (pos_x - 55) + ",-0)")
                .attr("stroke-dasharray", 4)
                .attr('d', lines);
        }
        // today
        var todayLine = g_chart.append("g");
        todayLine.append('line').attr("x1", "" + (pos_x - 45)).attr("x2", "" + (pos_x - 45)).attr("y2", chartViewHeight)
            .attr("stroke", "#CCCCCC") //#CCCCCC
            .attr("stroke-dasharray", 2);
        //圆点 X
        this.public_pos_x = pos_x;
        g_chart.append('path')
            .attr('class', 'area')
            .attr('d', areaxy(mapVals));
        g_chart.append('path')
            .attr('class', 'line')
            .attr('d', linexy(mapVals));
        // prod_one Expect  
        prod_one_expect_charta.append('path')
            .datum(pro1_possibility_area_data)
            .attr('class', 'prod-first-possibility-area-gradient')
            .attr('d', function (d) { return lines(d) + "Z"; })
            .attr("transform", "translate(" + (pos_x - 55) + ",-0)");
        prod_one_expect_charta.append('path')
            .datum(pro1_possibility_small_area_data)
            .attr('class', 'prod-first-small-possibility-area')
            .attr('d', function (d) { return lines(d) + "Z"; })
            .attr("transform", "translate(" + (pos_x - 55) + ", -0)");
        prod_one_expect_charta.append('path')
            .datum(pro1_possibility_data)
            .attr('class', 'prod-first-possibility-line')
            .attr("stroke-dasharray", 4)
            .attr('d', lines)
            .attr("transform", "translate(" + (pos_x - 55) + ",-0)");
        todayLine.append("text")
            .attr("x", availableWidthHalf - 17)
            .attr("y", "-5px")
            .attr("fill", COLORS[1])
            .attr("class", "buleCol");
        // 基线
        todayLine.append('line').attr("x1", 0).attr("x2", 0).attr("y2", chartViewHeight)
            .attr("stroke", "#F1F1F1")
            .attr("stroke-width", 1);
        //--- axis view x-axis
        var dateFormat = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d');
        var xAxisTextFormatter = function (index) { return dateFormat(new Date(data.date[index])); };
        // const xAxisTickScale = d3.scaleLinear().domain([10, 100]).range([])
        var xAxisMarginTop = this.height - margin.bottom - this.XAXIS_HEIGHT;
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"]().scale(x).tickPadding(10).ticks(3).tickSizeInner(-xAxisMarginTop).tickSizeOuter(0).tickFormat(xAxisTextFormatter).tickValues(xTickValues);
        var xAxisView = g_axis.append('g')
            .attr('class', 'x axis')
            .attr('transform', "translate(" + margin.left + "," + xAxisMarginTop + ")")
            .call(xAxis);
        //xAxisView.selectAll('.tick text').attr('x', 26);
        // 当前市值
        // if (this.current_value) {
        //     const txt = numeral(this.current_value).format('0,0.00')
        //     g_chart.append('text').attr('class', 'current-value').text('￥' + txt).attr('x', availableWidth).attr('y', -10)
        // }
        //---- operations
        var g_operations1 = svg.append('g').attr('class', 'g-operations');
        var g_operations = svg.append('g').attr('class', 'g-operations');
        // let operations = getValidOperations(daily_return.operations, startDate)
        var curDate = performance_return.possibility.days[0];
        var operations = [
            { "date": curDate, "action": "第一" },
            { "date": curDate, "action": "第二" },
        ];
        var operation_box = "\n            <path d=\"M27,10.5 L27,2.00276013 C27,0.893542647 26.1012878,0 24.9926701,0 L2.00732994,0 C0.898338318,0 0,0.896666251 0,2.00276013 L0,10.9972399 C0,12.1064574 0.898712226,13 2.00732994,13 L23.5,13 L29,15 L27,10.5 Z\"></path>\n        ";
        var operation_flag = {
            'buy_first': true,
            'sell_first': true,
            'rebalance_first': true,
        };
        var _loop_1 = function (date, action) {
            var x_index_1 = performance_return.possibility.days.findIndex(function (p) { return date == p; });
            if (x_index_1 < 0)
                return "continue";
            var concatData = data.historical_data;
            var pos_x_1 = x(x_index_1) + margin.left;
            var pos_y_2 = y(concatData[concatData.length - 1]) + margin.top;
            var pos_y_bottom = this_1.height - margin.bottom - this_1.XAXIS_HEIGHT - pos_y_2;
            var show_tips = false;
            //第一只基金圆点
            if (action == '第一') {
                var g_operation = g_operations.append('g').attr('class', 'operation')
                    .attr('transform', "translate(" + this_1.public_pos_x + "," + pos_y_2 + ")");
                var operation_circle = g_operation.append('circle').attr('cx', -0.1).attr('cy', 0);
                if (operation_flag.sell_first) {
                    operation_circle.attr('r', 4).attr('fill', "#FFF").attr('stroke', COLORS[1]).attr('stroke-width', '4');
                    operation_flag.sell_first = false;
                    show_tips = true;
                }
                //第二只基金圆点
            }
            else if (action == '第二') {
                if (benchmark_data) {
                    var pos2_y = y(data.benchmark_data[data.benchmark_data.length - 1]) + margin.top;
                    var g_operation1 = g_operations1.append('g').attr('class', 'operation1')
                        .attr('transform', "translate(" + this_1.public_pos_x + "," + pos2_y + ")");
                    var operation_circle1 = g_operation1.append('circle').attr('cx', -0.1).attr('cy', 0);
                    if (operation_flag.buy_first) {
                        operation_circle1.attr('r', 4).attr('fill', "#FFF").attr('stroke', COLORS[0]).attr('stroke-width', '4');
                        operation_flag.buy_first = false;
                        show_tips = true;
                    }
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
            var _a = operations_1[_i], date = _a.date, action = _a.action;
            _loop_1(date, action);
        }
    };
    return ExpectGraphComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("performance-return"),
    __metadata("design:type", Object)
], ExpectGraphComponent.prototype, "performance_return", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("performance-second-return"),
    __metadata("design:type", Object)
], ExpectGraphComponent.prototype, "performance_second_return", void 0);
ExpectGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'expect-graph',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/component/expect-graph.html"*/'<ion-row class="legend">\n    <ion-col col-6 class="item" *ngFor="let item of this.legend">\n        <span [ngStyle]="{\'background-color\':item.color}"></span>{{item.label}}\n    </ion-col>\n</ion-row>\n<div class="container">\n</div>\n'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/component/expect-graph.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__pipes__["c" /* FormatMoneyPipe */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__pipes__["c" /* FormatMoneyPipe */]])
], ExpectGraphComponent);

function getValidOperations(operations, startDate) {
    var result = [];
    for (var date in operations) {
        if (date > startDate) {
            result.push({ date: date, action: operations[date] });
        }
    }
    result.sort(function (first, second) { return first.date < second.date ? -1 : (first.date == second.date ? 0 : 1); });
    var today = __WEBPACK_IMPORTED_MODULE_1_d3__["timeFormat"]('%Y-%m-%d')(new Date);
    result.push({ date: today, action: '今日' });
    return result;
}
function generateXAxisTickValues(total, count, today) {
    var now_today = total.findIndex(function (p) { return today == p; });
    var mid = Math.round(total / 2) - 1;
    var last = total.length - 1;
    return [0, now_today, last];
    // if (total % 3 == 0) {
    //     return [0, mid, last]
    // } else if (total > 14) {
    //     return [0, mid, last]
    // } else {
    //     return [0, total - 1]
    // }
    // switch (total) {
    //     case 3: return [1];
    //     case 4: return [1, 2];
    //     case 5: return [1, 2, 3];
    //     case 6: return [1, 2, 3, 4];
    //     case 7: return [2, 4];
    //     case 8: return [2, 5];
    //     case 9: return [1, 3, 5, 7];
    //     case 10: return [3, 6];
    //     case 11: return [2, 5, 8];
    //     case 12: return [3, 7];
    //     case 13: return [3, 6, 9];
    //     case 14: return [4, 9];
    // }
    // const values = [];
    // for (let i = 0; i < count; i++) {
    //     values.push(Math.round(total / (count + 1) * (i + 1)));
    // }
    // return values;
}
function incomeGradienteValues(data) {
    var _a = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](data), start = _a[0], end = _a[1];
    if (start === 0 && end === 0) {
        return [-1, 1];
    }
    else if (start === end) {
        return [start / 2, end * 1.5];
    }
    else {
        return [start, end];
    }
}
function generateYAxisTickValues(historical_data, benchmark_data) {
    var _a = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](historical_data), start1 = _a[0], end1 = _a[1];
    var _b = [0, 0], start2 = _b[0], end2 = _b[1];
    if (benchmark_data) {
        _c = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](benchmark_data), start2 = _c[0], end2 = _c[1];
    }
    var start = Math.min(start1, start2), end = Math.max(end1, end2);
    if (start === 0 && end === 0) {
        return [-1, 1];
    }
    else if (start === end) {
        return [start / 2, end * 1.5];
    }
    else {
        return [start, end];
    }
    var _c;
}
/*
    为了数据更好的显示，特别是少量数据时，需要对原数据形式进行调整
*/
function rebuild_data(data, xTickCount, startIndex) {
    if (data == null || data.length == 0)
        return null;
    if (startIndex > 0) {
        data = data.slice(startIndex);
    }
    var first = data[0];
    var last = data[data.length - 1];
    if (data.length <= xTickCount) {
        //填充首尾
        return [first].concat(data).concat([last]);
    }
    else if (data.length === xTickCount + 1) {
        //填充首部
        return [first].concat(data);
    }
    else {
        //不填充
        return data;
    }
}
// 历史表现 line
function convert_log_ret(data) {
    if (data == null || data.length == 0)
        return null;
    var total = 0;
    var result = data.map(function (item, index) {
        if (index == 0)
            return 0;
        total += item;
        return Math.exp(total) - 1;
    });
    // np.exp(log_ret.cumsum()) -1
    // console.log(result)
    return data;
}
// 返回对应数组
function return_arr(data, key) {
    if (data == null || data.length == 0)
        return null;
    var arrData = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        arrData.push(item[key]);
    }
    return arrData;
}
// 预期表现 line
function expected_log_ret(data, key) {
    if (data == null || data.length == 0)
        return null;
    var arr = [];
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var item = data_2[_i];
        arr.push(item[key]);
    }
    var total = 0;
    var result = arr.map(function (item, index) {
        if (index == 0)
            return 0;
        total += item;
        if (index > arr.length - 1) {
            return false;
        }
        return Math.exp(total) - 1;
    });
    return arr;
}
// 预期表现 area
function area_log_set(data) {
    // console.log(data)
    if (data == null || data.length == 0)
        return null;
    var arrY1 = [];
    var arrY2 = [];
    for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
        var item = data_3[_i];
        arrY1.push(item[0]);
        arrY2.push(item[3]);
    }
    //let arrY2_sort = arrY2.sort();
    // console.log(arrY1.concat(arrY2))
    return arrY1.concat(arrY2);
}
// 预期表现 small area
function small_area_log_set(data) {
    if (data == null || data.length == 0)
        return null;
    var arrY3 = [];
    var arrY4 = [];
    for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
        var item = data_4[_i];
        arrY3.push(item[1]);
        arrY4.push(item[2]);
    }
    //let arrY4_sort = arrY4.sort();
    return arrY3.concat(arrY4);
}
//# sourceMappingURL=expect-graph.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UnauthorizationSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OfflineSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import APP_CONFIG from 'APP_CONFIG'




var USER_TOKEN = 'USER_TOKEN';
var user_token = null;
var UnauthorizationSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
var OfflineSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
var ApiService = ApiService_1 = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.setUserToken = function (token) {
        user_token = 'token ' + token;
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(USER_TOKEN, user_token);
        }
    };
    ApiService.clearUserToken = function () {
        localStorage.removeItem(USER_TOKEN);
        user_token = null;
    };
    ApiService.getUserToken = function () {
        if (user_token)
            return user_token;
        if (typeof localStorage !== 'undefined') {
            var token = localStorage.getItem(USER_TOKEN);
            if (token)
                user_token = token;
            return token;
        }
        return null;
    };
    ApiService.getUrl = function (path) {
        function appendPath(path) {
            if (path && path.length > 0 && path[path.length - 1] !== '/') {
                path += '/';
            }
            return path;
        }
        var queryIndex = -1;
        if (path) {
            queryIndex = path.indexOf('?');
        }
        if (queryIndex > -1) {
            path = appendPath(path.substr(0, queryIndex)) + path.substr(queryIndex);
        }
        else {
            path = appendPath(path);
        }
        // return APP_CONFIG.api_url + path
        var isUserUrl = path.indexOf("users/");
        if (isUserUrl > 0) {
            return '/user_api' + path;
        }
        else {
            return '/data_api' + path;
        }
    };
    ApiService.handleError = function (res) {
        var error_code = 'app_unknown';
        var error_fields = {};
        if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            if (res.status === 0) {
                // no network
                error_code = 'app_no_network';
                OfflineSubject.next();
            }
            else if (res.status === 401) {
                // Unauthorization
                ApiService_1.clearUserToken();
                UnauthorizationSubject.next(res);
            }
            else if (res.status === 500) {
                // server unhandled error
                error_code = 'app_service_error';
            }
            var contentType = res.headers.get('content-type');
            if (contentType === 'application/json') {
                var result = res.json();
                if (result.error_code) {
                    error_code = result.error_code;
                }
                if (result.err_fields) {
                    error_fields = result.err_fields;
                }
            }
        }
        return Promise.reject({
            http_status: res.status,
            error_code: error_code,
            error_fields: error_fields,
        });
    };
    ApiService.prototype.get = function (path) {
        var url = ApiService_1.getUrl(path);
        var token = ApiService_1.getUserToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options).toPromise().catch(ApiService_1.handleError);
    };
    ApiService.prototype.getJSON = function (path) {
        return this.get(path).then(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body, headers) {
        var url = ApiService_1.getUrl(path);
        var httpHeaders = {};
        headers && Object.assign(httpHeaders, headers);
        var token = ApiService_1.getUserToken();
        token && Object.assign(httpHeaders, { 'Authorization': token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](httpHeaders) });
        return this.http.post(url, body, options).toPromise().catch(ApiService_1.handleError);
    };
    ApiService.prototype.postJSON = function (path, body) {
        var headers = {
            'Content-Type': 'application/json',
        };
        function parseJSON(res) {
            var text = res.text();
            var hasText = text != null && text.length > 0;
            return hasText ? res.json() : {};
        }
        function logError(res) {
            console.error(res);
            return Promise.reject(res);
        }
        return this.post(path, body, headers).then(parseJSON, logError);
    };
    return ApiService;
}());
ApiService = ApiService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ApiService);

var ApiService_1;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graphics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NavController, NavParams } from 'ionic-angular' 
// import { PortfolioService, RALoadingController } from '../../services'
// // import { AssetAllocationPage } from '../rebalance'
// import { PurchaseRedeemPage } from '../trade'
// import { RadarInfoPage } from './radar-info.page'
// import { AssetRebalancePage } from './rebalance.page'
var Graphics = (function () {
    function Graphics() {
        this.portfolio_name = '持仓详情';
        this.portfolio_return = '_';
        this.portfolio_return_yesterday = '_';
        this.isInPosition = false;
        // 资产显示市值
        this.show_market_value = true;
        this.invest_return = .6;
    }
    Graphics.prototype.ionViewDidLoad = function () {
        // this.portfolio_id = this.navParams.get('id')
        // this.loadingCtrl.loading(this.loadPortfolio.bind(this))
        this.loadPortfolio();
    };
    Graphics.prototype.loadPortfolio = function () {
        // return this.portfolioService.getPortfolio(this.portfolio_id).then(res => {
        this.portfolio = { "id": 28, "name": "风险等级5", "investment": 50000, "status": "POSITION", "general_info": { "yesterday_return": 85.68842100000028, "return_rate": 0.2013772, "current_value": 60068.86, "return": 10068.86, "total_value": 60068.86 }, "report": { "pending_order_plan_info": {}, "daily_return": { "days": ["2017-01-08", "2017-01-09", "2017-01-10", "2017-01-11", "2017-01-12", "2017-01-13", "2017-01-14", "2017-01-15", "2017-01-16", "2017-01-17", "2017-01-18", "2017-01-19", "2017-01-20", "2017-01-21", "2017-01-22", "2017-01-23", "2017-01-24", "2017-01-25", "2017-01-26", "2017-01-27", "2017-01-28", "2017-01-29", "2017-01-30", "2017-01-31", "2017-02-01", "2017-02-02", "2017-02-03", "2017-02-04", "2017-02-05", "2017-02-06", "2017-02-07", "2017-02-08", "2017-02-09", "2017-02-10", "2017-02-11", "2017-02-12", "2017-02-13", "2017-02-14", "2017-02-15", "2017-02-16", "2017-02-17", "2017-02-18", "2017-02-19", "2017-02-20", "2017-02-21", "2017-02-22", "2017-02-23", "2017-02-24", "2017-02-25", "2017-02-26", "2017-02-27", "2017-02-28", "2017-03-01", "2017-03-02", "2017-03-03", "2017-03-04", "2017-03-05", "2017-03-06", "2017-03-07", "2017-03-08", "2017-03-09", "2017-03-10", "2017-03-11", "2017-03-12", "2017-03-13", "2017-03-14", "2017-03-15", "2017-03-16", "2017-03-17", "2017-03-18", "2017-03-19", "2017-03-20", "2017-03-21", "2017-03-22", "2017-03-23", "2017-03-24", "2017-03-25", "2017-03-26", "2017-03-27", "2017-03-28", "2017-03-29", "2017-03-30", "2017-03-31", "2017-04-01", "2017-04-02", "2017-04-03", "2017-04-04", "2017-04-05", "2017-04-06", "2017-04-07", "2017-04-08", "2017-04-09", "2017-04-10", "2017-04-11", "2017-04-12", "2017-04-13", "2017-04-14", "2017-04-15", "2017-04-16", "2017-04-17", "2017-04-18", "2017-04-19", "2017-04-20", "2017-04-21", "2017-04-22", "2017-04-23", "2017-04-24", "2017-04-25", "2017-04-26", "2017-04-27", "2017-04-28", "2017-04-29", "2017-04-30", "2017-05-01", "2017-05-02", "2017-05-03", "2017-05-04", "2017-05-05", "2017-05-06", "2017-05-07", "2017-05-08", "2017-05-09", "2017-05-10", "2017-05-11", "2017-05-12", "2017-05-13", "2017-05-14", "2017-05-15", "2017-05-16", "2017-05-17", "2017-05-18", "2017-05-19", "2017-05-20", "2017-05-21", "2017-05-22", "2017-05-23", "2017-05-24", "2017-05-25", "2017-05-26", "2017-05-27", "2017-05-28", "2017-05-29", "2017-05-30", "2017-05-31", "2017-06-01", "2017-06-02", "2017-06-03", "2017-06-04", "2017-06-05", "2017-06-06", "2017-06-07", "2017-06-08", "2017-06-09", "2017-06-10", "2017-06-11", "2017-06-12", "2017-06-13", "2017-06-14", "2017-06-15", "2017-06-16", "2017-06-17", "2017-06-18", "2017-06-19", "2017-06-20", "2017-06-21", "2017-06-22", "2017-06-23", "2017-06-24", "2017-06-25", "2017-06-26", "2017-06-27", "2017-06-28", "2017-06-29", "2017-06-30", "2017-07-01", "2017-07-02", "2017-07-03", "2017-07-04", "2017-07-05", "2017-07-06", "2017-07-07", "2017-07-08", "2017-07-09", "2017-07-10", "2017-07-11", "2017-07-12", "2017-07-13", "2017-07-14", "2017-07-15", "2017-07-16", "2017-07-17", "2017-07-18", "2017-07-19", "2017-07-20", "2017-07-21", "2017-07-22", "2017-07-23", "2017-07-24", "2017-07-25", "2017-07-26", "2017-07-27", "2017-07-28", "2017-07-29", "2017-07-30", "2017-07-31", "2017-08-01", "2017-08-02", "2017-08-03", "2017-08-04", "2017-08-05", "2017-08-06", "2017-08-07", "2017-08-08", "2017-08-09", "2017-08-10", "2017-08-11", "2017-08-12", "2017-08-13", "2017-08-14", "2017-08-15", "2017-08-16", "2017-08-17", "2017-08-18", "2017-08-19", "2017-08-20", "2017-08-21", "2017-08-22", "2017-08-23", "2017-08-24", "2017-08-25", "2017-08-26", "2017-08-27", "2017-08-28", "2017-08-29", "2017-08-30", "2017-08-31", "2017-09-01", "2017-09-02", "2017-09-03", "2017-09-04", "2017-09-05", "2017-09-06", "2017-09-07", "2017-09-08", "2017-09-09", "2017-09-10", "2017-09-11", "2017-09-12", "2017-09-13", "2017-09-14", "2017-09-15", "2017-09-16", "2017-09-17", "2017-09-18", "2017-09-19", "2017-09-20", "2017-09-21", "2017-09-22", "2017-09-23", "2017-09-24", "2017-09-25", "2017-09-26", "2017-09-27", "2017-09-28", "2017-09-29", "2017-09-30", "2017-10-01", "2017-10-02", "2017-10-03", "2017-10-04", "2017-10-05", "2017-10-06", "2017-10-07", "2017-10-08", "2017-10-09", "2017-10-10", "2017-10-11", "2017-10-12", "2017-10-13", "2017-10-14", "2017-10-15", "2017-10-16", "2017-10-17", "2017-10-18", "2017-10-19", "2017-10-20", "2017-10-21", "2017-10-22", "2017-10-23", "2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27", "2017-10-28", "2017-10-29", "2017-10-30", "2017-10-31", "2017-11-01", "2017-11-02", "2017-11-03", "2017-11-04", "2017-11-05", "2017-11-06", "2017-11-07", "2017-11-08", "2017-11-09", "2017-11-10", "2017-11-11", "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-18", "2017-11-19", "2017-11-20", "2017-11-21", "2017-11-22", "2017-11-23", "2017-11-24", "2017-11-25", "2017-11-26", "2017-11-27", "2017-11-28", "2017-11-29", "2017-11-30", "2017-12-01", "2017-12-02", "2017-12-03", "2017-12-04", "2017-12-05", "2017-12-06", "2017-12-07", "2017-12-08", "2017-12-09", "2017-12-10", "2017-12-11", "2017-12-12", "2017-12-13", "2017-12-14", "2017-12-15", "2017-12-16", "2017-12-17", "2017-12-18", "2017-12-19", "2017-12-20", "2017-12-21", "2017-12-22", "2017-12-23", "2017-12-24", "2017-12-25", "2017-12-26", "2017-12-27", "2017-12-28", "2017-12-29", "2017-12-30", "2017-12-31", "2018-01-01", "2018-01-02", "2018-01-03", "2018-01-04", "2018-01-05", "2018-01-06", "2018-01-07", "2018-01-08", "2018-01-09", "2018-01-10", "2018-01-11", "2018-01-12", "2018-01-13", "2018-01-14", "2018-01-15", "2018-01-16", "2018-01-17"], "portfolio_tpl_tag": "20180106 5号", "portfolio_returns": [2.60198444158583e-05, 0.000897961341369525, 0.000434052448751668, 0.000354939747146711, -0.00102461071340995, -9.66120400184559e-05, 0.0, 2.24303148564039e-05, 0.000653229295964247, -0.000667742304243116, -0.000522567601049098, -0.00156359033450764, 0.00239790956372721, 0.0, 2.3653333893927e-05, -0.000887887955250589, 0.00161177349328025, 0.00273698649654637, -0.000240082554400218, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.20890464863736e-05, -0.0016295297361576, 0.0, 2.47456860283154e-05, -0.000988813017113384, -0.00127695135330776, 0.00142267954916689, 0.00142240066418211, 0.0022608336262935, 0.0, 2.31769386592731e-05, 0.00236967002349376, 7.43779904560063e-05, 0.000350752651186004, -1.65886019054687e-05, -0.000589175328383102, 0.0, 2.33708145487926e-05, 0.00170411378848305, 0.00282033557700826, -8.4290543409924e-05, -0.00106181907579075, 0.000455912855895658, 0.0, 2.57935075005641e-05, 0.000169868142653887, -0.00123097960640762, 0.00237137028525481, -0.00210725933666723, -0.000143028346470034, 0.0, 2.60750907274756e-05, -0.000838787536337308, -0.000479793452189441, -0.000373603242276559, -0.000916736049486701, 0.000975838958061284, 0.0, 2.42015969616245e-05, 0.00032832640221272, -0.00043835039431289, 0.00285155440430583, -0.000446807728603535, -0.001370555902997, 0.0, 2.85366645915436e-05, -0.000162483052725077, -0.00209587483503629, -0.000871432429497753, 0.000435102816434003, 0.00111042216464514, 0.0, 2.79945334223409e-05, -0.000968544989694608, 0.00218410918907671, 0.00101522148939568, -0.000311538984566622, 0.00100344188581095, 0.0, 0.0, 0.0, 6.14710498127893e-05, -0.000614886919382156, 0.00147011240345815, -2.54643231205887e-05, 0.0, 2.337514575769e-05, 0.00080801488672995, -0.000194326330973427, -0.00169704764649124, -0.00272192998643984, -0.000241964923849394, 0.0, 1.98710757761447e-05, 0.00158037494273509, -0.0014706547944756, -0.00147624112907774, 0.00244995209796152, -0.000441682718379234, 0.0, 2.38821187554516e-05, 0.000534647090509492, 0.00176818506632045, 0.000146570624031495, 0.000648429669149764, -0.00116226135559026, 0.0, 0.0, 4.36764686218447e-05, -0.000492397022714256, -0.0011369702449461, -0.000320859300360888, 0.000573217305770151, 0.0, 2.68397024906024e-05, -0.00023318746517775, -0.000569341600030635, 0.000652033222994369, -0.000412329848932668, -0.000444917814898171, 0.0, 2.58635207044957e-05, 0.0014007589451112, -0.000388566869083734, -0.00437316572999069, 0.000355475096169707, 0.00255645643198944, 0.0, 2.42436100738312e-05, 0.0013746782889162, 0.000191965719256578, 0.000731901025695342, 0.00302931853961593, -9.74168662449363e-05, 0.0, 0.0, 0.0, 5.33302307118424e-05, 0.000167602341498681, 0.000559727991488654, -0.000170836402635021, 0.0, 2.73154999318133e-05, -0.00140598391087381, -0.000182815025843734, 0.00102991089326749, 0.0014736974717193, 0.00139173385447268, 0.0, 2.70561765416156e-05, 0.000538476021914608, 0.00134962259425665, -0.00151007973111916, -0.00088504088865182, 0.000738379549236844, 0.0, 2.79524781413312e-05, 0.00292148013358221, -0.00180632963597856, 0.00106512755657185, 0.000671744125559033, 0.00132080280209988, 0.0, 3.42091954452963e-05, 0.00198282161541295, -0.00093283012488112, 0.000637371169476704, -0.00118635870250148, -9.20067836742553e-05, 0.0, 3.0108606136281e-05, 0.00085086841323584, -0.000507757936378055, 0.00118589497512086, -0.00184507965422092, 0.00135706597849013, 0.0, 2.19905864666908e-05, 0.000765009543286867, 0.000898263234600933, 0.00083643835743868, 0.00223997996719425, 0.00174765497196086, 0.0, 2.21065337664978e-05, -0.0011147625672808, -0.000194779206702971, 0.00273207308088199, -5.8524651265017e-05, -0.000414877044260485, 0.0, 2.72431652757742e-05, -0.000197193505137827, 0.000630122137766802, -0.000769665666669091, -0.00094377104605736, 0.000215439798362281, 0.0, 2.85678722518828e-05, -0.000132312262392495, 0.00129446860418671, -0.000420532592454178, -0.00165456517070709, -0.00070269949276618, 0.0, 2.56365666502805e-05, 0.00086571906909171, -0.00057620955174831, -0.000884166906107489, -0.00492399826088743, -0.00234801486922911, 0.0, 2.28994014760762e-05, 0.0034120554767554, 0.000140450449784855, 0.000680580630546357, -0.00302242442634176, -0.000169570917675952, 0.0, 2.95225260287846e-05, 0.0007227453932452, 0.00257772394372313, 9.59672836803586e-05, -0.00120277902447259, 0.00328005915546798, 0.0, 2.69134178439594e-05, 0.000811541209439891, -0.000695642843318517, 3.69892898038025e-05, 0.000497776922264467, 0.000832247483840735, 0.0, 2.98975987315728e-05, -0.000353107273162046, -0.00198483079358431, 0.000279150771049604, -0.00123520855674883, -0.0010047652255966, 0.0, 2.57774562706886e-05, 0.00232347896387162, 0.00214404079398283, 0.000431521919318915, -0.00045285791967846, 0.000572239240219808, 0.0, 2.72429860913226e-05, 0.00059103095095548, -0.000353109023126169, 0.000848150118949011, 0.00079270427684474, 0.000628664814742112, 0.0, 2.70924486119726e-05, 0.000444434547806365, 0.000668197187092878, 0.00105138555049331, 0.000459912228719944, 0.00127727965514228, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.00354331500266302, -0.000228095429842719, -0.00105215006925069, 0.000273229908922108, 0.000518296590443608, 0.0, 2.37876957327709e-05, 0.000390852480439164, 1.04672743109146e-05, 0.00165132804287372, 0.000291617513837601, 0.00129745647222609, 0.0, 2.01803727612839e-05, -0.000214160671575708, 0.00131191024381198, -0.000810633997338167, 0.00087573089971965, 0.0023376808704655, 0.0, 2.28891725362352e-05, -0.00123361682112877, -0.000480628700938639, -0.000754709623576553, -0.00029737866200615, -0.000128008029806788, 0.0, 2.48267286007393e-05, 0.00217327026410166, 0.000689519679285923, 0.000317068973163294, 0.000293602308095449, 0.00108594218271396, 0.0, 2.30211521074292e-05, 0.00084239138384621, -0.00105212959650248, -0.00224130970648055, 0.00359702559837219, 0.00183640029585845, 0.0, 2.55406546979441e-05, 0.00076184885074931, 0.00350005947801119, 0.000319495918961721, -0.00374476821237072, -0.00170394837849648, 0.0, 2.74423609792913e-05, -0.00127248916407161, 0.00240433942874885, 0.00134406660000605, 0.00055595453930689, -0.00117626518359311, 0.0, 2.68477649606675e-05, 0.00183177279691362, 6.12991237284907e-05, -0.00146307358728997, -0.000175289992542386, 0.00234208947545088, 0.0, 2.62058987604502e-05, 0.00182237873200178, -0.00175386625551786, 0.00112499601492067, -0.00275051746761747, 0.000670215436030504, 0.0, 2.7431642960974e-05, 0.00200917720622981, 0.000673635595153965, 1.51459053897292e-05, 0.000569910535985263, -0.000114722056965258, 0.0, 2.89920387319025e-05, 0.000280168962915714, -0.000591721129853087, -0.00191640751985751, 0.00105129117770645, 0.00039584428029611, 0.0, 3.51533962507337e-05, 0.0, 0.00251794859828726, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.00168643875671792, 0.00132540500250457, -0.00018255050052918, 0.0, 0.0, 2.06305429011645e-05, 0.000679829144166845, 0.000772705590831072, 0.0], "operations": { "2018-01-08": "首次买入" }, "benchmark_returns": [0.0, 0.004837895379147028, -0.0016749944746283774, -0.0071050732895852065, -0.005072469361017795, 0.000689442584482336, 0.0, 0.0, -0.00014058588853238518, 0.0020797498026432493, 0.003903258280832489, -0.0030219612724859957, 0.007659917017706519, 0.0, 0.0, 0.0027360461114867007, 0.00011000914222414337, 0.0033984295643882945, 0.0035649478885453334, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.006951072400335434, 0.0, 0.0, 0.0025862855926330752, -0.0022318818445459243, 0.005216479810917107, 0.0038364074371930457, 0.005049924831800112, 0.0, 0.0, 0.0066537449736774334, -0.0001370182115305596, -0.004109685536672458, 0.005601352508163515, -0.005680614193787292, 0.0, 0.0, 0.014493768687694697, 0.0032873327348674763, 0.0019888484847392363, -0.004720074967268673, 0.00015203301434318917, 0.0, 0.0, -0.007985187676467831, 0.0019096884756226729, 0.0016284472283381035, -0.006771966175918465, -0.0021079836184849654, 0.0, 0.0, 0.005417604344607696, 0.002165804609413513, -0.001513961271157882, -0.006337580705173096, 0.00027653472351474306, 0.0, 0.0, 0.008773348641938128, -0.00040625954943962483, 0.002008631179888809, 0.00514403256231688, -0.010307552955506338, 0.0, 0.0, 0.0011043567054596082, 0.0048393091081635475, -0.00471246232933531, 0.0034513781339597926, 0.007946870699479192, 0.0, 0.0, -0.003318545044441734, -0.0023688497747880177, -0.0013312181546076829, -0.008239832374357547, 0.005596431217114173, 0.0, 0.0, 0.0, 0.0, 0.013749676793178622, 0.002893643131804069, 0.0009717685456163139, 0.0, 0.0, -0.003509870443760832, 0.003471376054285713, -0.0022455002853600803, 0.0014599935460779534, -0.008016445335478295, 0.0, 0.0, -0.0018841175982782232, -0.004954520094994308, -0.004882837948265717, 0.004537734020122031, 0.0015121674401221696, 0.0, 0.0, -0.010300922397858514, 0.002827496236756488, 0.001222423542916573, 0.0004460306351603549, -0.0020234457246335324, 0.0, 0.0, 0.0, -0.0038379795150298435, -0.0039324554857191885, -0.002564513698596116, -0.006434795735925647, 0.0, 0.0, -0.007042433158972017, -0.0018714883310444463, -0.004433843806724624, 0.0056600746002732905, 0.00852354467970784, 0.0, 0.0, 0.004072480409698542, 0.008628078763214475, -0.005464131934694194, -0.003482013999690281, 0.0016867196389434014, 0.0, 0.0, 0.002168571558962995, 0.0037906350867285, -7.91430253066494e-06, 0.017798663011056703, -0.0014997219471535317, 0.0, 0.0, 0.0, 0.0, 0.003570756831413391, 0.001388631882521807, -0.003216040879186366, 0.0, 0.0, -0.005105096141566179, 0.006931674878540406, 0.011667028179159544, 0.0076412976645006125, 0.004257084490129515, 0.0, 0.0, -0.000498114864161181, 0.002201587529540916, -0.013198158228060919, -0.0018420208809093452, -0.0028468053460475318, 0.0, 0.0, 0.009870582290652408, -0.0020200398710983336, 0.011622892462131773, 0.0006651995373658792, 0.009022543465297517, 0.0, 0.0, 0.012401463291443093, 0.0018040244571579933, -0.007799263939473278, 0.006195868635291646, -0.0005535179035938143, 0.0, 0.0, -0.004359716123344626, -0.008489370169185051, 0.010905941710095846, 0.00011399255634536587, -0.0011392524987581254, 0.0, 0.0, -0.0006135753341016681, 0.004675224777111353, -0.0032702897920096063, 0.0076498817922878715, 0.004377129658593049, 0.0, 0.0, -0.010734016564416748, 0.0009884953455383538, 0.01691713047763166, 0.004851198411310875, -0.00515930969667977, 0.0, 0.0, 0.003980430375325028, -0.00640750191056938, -0.0038170283078695633, 0.0018351804943677053, 0.0026087148759703638, 0.0, 0.0, 0.004284806641638994, 0.00865974819212667, -0.002530874340642697, -0.008820331210650068, -0.005446064422754304, 0.0, 0.0, 0.005169296501513543, 0.0014527672234248001, -0.0003132412632229631, -0.004061579770027635, -0.018625548721312057, 0.0, 0.0, 0.012893827412385761, 0.0030736141020817342, -0.0012516813531799897, 0.005350170023602274, 0.0009126570590609617, 0.0, 0.0, 0.00437183223928983, 0.0030170740507244886, 0.0010096444482368128, -0.005725115321418173, 0.016230197546798664, 0.0, 0.0, 0.012295162328488374, -0.002129487413171205, -6.183466047460229e-05, -0.0031888932207930765, 0.0022072156147014965, 0.0, 0.0, 0.003928534579550558, 0.0029678330299276467, -0.001971454254872995, -0.005099055479247383, -0.001014072861057258, 0.0, 0.0, -8.99677021255485e-05, 0.003207068105229638, 0.0012165812441793378, -0.0032976500648871365, 0.00035009944359032374, 0.0, 0.0, 0.00308721170256554, -0.002873312217857915, 0.0026892011483230505, -0.0012024865890616354, -2.272150470616907e-05, 0.0, 0.0, -0.005209036129921074, 0.0007828949500332527, 0.0001095003946147699, 0.00035024745971412585, 0.0036460746126092403, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.011843129419775167, 0.001970157550262641, 0.0032911205578773917, 0.0026272462344820724, 0.002054671624529547, 0.0, 0.0, -0.0019287899897442173, -9.644139193376589e-05, 0.007914737579810094, -0.003279348790503178, -0.0011192271973197165, 0.0, 0.0, 0.001004397060576423, 0.007248827442193573, 0.004423630820797442, 0.004171927390894226, 0.00708436582659111, 0.0, 0.0, -0.0030493732711196486, -0.000749434974380847, -0.0025228980288201086, 0.00012815001485400046, -0.0011105115463951876, 0.0, 0.0, 0.007036003862998186, 0.00826167864390115, -0.0015405102384260516, 0.00686719204693631, 0.008796400455064912, 0.0, 0.0, 0.003922852215616501, -0.006982116306831543, -0.0062844536382247185, 0.007664500025857279, 0.003850932011252084, 0.0, 0.0, 0.005561654549717687, 0.017669009969512928, 0.002336244242384211, -0.030055216137562013, 0.0004403285231866505, 0.0, 0.0, -0.013307749972385707, 0.0014498314914845878, -0.0005106555368268317, -0.011825069271436561, -0.001989647188269217, 0.0, 0.0, 0.005169181160029623, 0.0052893105749571845, -0.006045034716963826, -0.011209553653571902, 0.00810652354634911, 0.0, 0.0, 0.016381263588609585, -0.013229626919695647, 0.008449328599258621, -0.005928787995797435, -0.011314160442207566, 0.0, 0.0, 0.0011136124771571332, 0.012477500293091026, -0.0012000270427030557, 0.009226328569981845, -0.0032625911665586926, 0.0, 0.0, -0.003225812237172221, 0.0029850689153541055, -0.015517084419515825, 0.006913769705688466, 0.002970901053686248, 0.0, 0.0, 0.0, 0.013930877221024929, 0.005852414234215786, 0.004227911129966344, 0.0024042406471345146, 0.0, 0.0, 0.005159484195580433, 0.006979691635885743, 0.0044099762948874854, -0.0005293698586399387, 0.0046057845390503616, 0.0, 0.0, 5.640076296131724e-05, 0.007834747059783709, 0.0] }, "radar_graph": {
                    excess_ret_power: 7.586540846993106,
                    management_experience: 10,
                    risk_measure: 6.944386699993697,
                    performance_stability: 4.940949299384405,
                    hist_ret_power: 9.116921079932432,
                }, "radar_rebalance": {
                    excess_ret_power: 7.586540846993106,
                    management_experience: 10,
                    risk_measure: 6.944386699993697,
                    performance_stability: 4.940949299384405,
                    hist_ret_power: 9.116921079932432,
                } }, "need_rebalance": false };
        //[[{"max_drawdown":1.586540846993106,"historical_volatility":9.116921079932432,"liquidity":10,"risk_resistance":4.940949299384405,"historical_return":6.944386699993697}],[{"max_drawdown":1.586540846993106,"historical_volatility":9.116921079932432,"liquidity":10,"risk_resistance":4.940949299384405,"historical_return":6.944386699993697}]]   
        var _a = this.portfolio, general_info = _a.general_info, report = _a.report;
        var daily_return = report.daily_return, radar_graph = report.radar_graph, radar_rebalance = report.radar_rebalance;
        //   this.need_rebalance = need_rebalance
        //   this.portfolio_name = name
        //   this.portfolio_return = general_info.return
        //   this.portfolio_return_yesterday = general_info.yesterday_return
        //   this.pending_order_plan_info = pending_order_plan_info
        this.radar_graph = radar_graph;
        this.radar_rebalance = radar_rebalance;
        this.portfolio_current_value = general_info.current_value;
        this.daily_return = daily_return;
        this.invest_return = 0.5;
        // this.daily_return = {
        //     date: ["2017-03-27", "2017-03-28", "2017-03-29", "2017-03-30", "2017-03-31", "2017-04-03", "2017-04-04", "2017-04-05", "2017-04-06", "2017-04-07"],
        //     historical_data: [20000, 20000, 20000, 20000, 20000, 30000, 30000, 30000, 10000, 20000],
        //     comparison_data: [10000, 10000, 15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000],
        // }
        // this.donutData = []
        // Object.keys(target).forEach(key => {
        //     this.donutData.push({ code: key, percentage: target[key].percentage })
        // });
        //   this.portfolio_target = []
        //   this.isInPosition = status === 'POSITION';
        //   PRODUCT_TYPE.forEach(type => {
        //     position[type].type = type
        //     position[type].klass = 'arrow-up' // 默认展开
        //     this.portfolio_target.push(position[type])
        //   })
        // }).catch(err => { })
    };
    Graphics.prototype.changeShowMarketValue = function (v) {
        this.show_market_value = v;
    };
    Graphics.prototype.toggleAssetVisibility = function (asset) {
        asset.klass = asset.klass == 'arrow-up' ? 'arrow-down' : 'arrow-up';
    };
    Object.defineProperty(Graphics.prototype, "pendingInfo", {
        get: function () {
            if (this.pending_order_plan_info) {
                var _a = this.pending_order_plan_info, type = _a.type, amount = _a.amount;
                if (type == 'NEW') {
                    return '+' + amount.toFixed(2) + '元确认中';
                }
                else if (type == 'APPEND') {
                    return '+' + amount.toFixed(2) + '元追加中';
                }
                else if (type == 'REDEEM' || type == 'REDEEM_ALL') {
                    return amount.toFixed(2) + '元赎回中';
                }
                else if (type == 'REBALANCE') {
                    return amount.toFixed(2) + '元优化中';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return Graphics;
}());
Graphics = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'graphics',template:/*ion-inline-start:"/Users/liuyuanjie/xingxiang/project/app/src/pages/graphics/graphics.html"*/'<ion-header>\n    <ion-navbar>\n        <div class="buttons">\n            <button class="button" ng-click="doSomething()">Left Button</button>\n        </div>\n        <ion-title>\n            演示\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n\n     <div style="background:#fff">\n        <div class="title-bar" margin>\n            <div class="title">\n                拆线图\n            </div>\n        </div>\n        <portfolio-history-graph [daily-return]="daily_return" [current-value]="portfolio_current_value"></portfolio-history-graph>\n    </div>\n\n\n    <div style="background:#fff; margin-top:15px;">\n            <div class="title-bar" margin>\n                <div class="title">\n                    时钟\n                </div>\n            </div>\n            <div>\n                <meter-graph [invest-return]="invest_return"></meter-graph>\n            </div>\n        </div>   \n    \n    <div style="background:#fff; margin-top:15px;">\n        <div class="title-bar" margin>\n            <div class="title">\n                雷达图\n            </div>\n        </div>\n        <div>\n            <radar-graph [portfolio]="radar_graph" [rebalance]="radar_rebalance"></radar-graph>\n        </div>\n    </div>   \n\n\n    \n    <div style="background:#fff; margin-top:15px;">\n        <div class="title-bar" margin>\n            <div class="title">\n                时钟 \n            </div>\n        </div>\n        <div>\n            <svg width="187.5px" height="152.5px" >\n                <defs>\n                    <linearGradient id="linearGradient-1">\n                        <stop stop-color="#48D3F9" offset="0%"></stop>\n                        <stop stop-color="#046AF1" offset="100%"></stop>\n                    </linearGradient>\n                </defs>\n                <g id="优化" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="产品详情-" transform="translate(-208.000000, -108.000000)" width="187.5px" height="152.5px">\n                        <path d="M322,175 C322,146.833478 301.628956,124 276.5,124 C251.371044,124 231,146.833478 231,175" id="Oval-17" stroke="#E4E5ED" stroke-width="6" stroke-linecap="round"></path>\n                        <path d="M297,129.882795 C290.702664,126.128626 283.507769,124 275.866748,124 C251.087527,124 231,146.385763 231,174" id="Oval-17" stroke="url(#linearGradient-1)" stroke-width="6" stroke-linecap="round"></path>\n                        <ellipse id="Oval-16" fill="#E4E5ED" cx="277" cy="179.5" rx="4" ry="4.5"></ellipse>\n                        <circle id="Oval-18" fill="#FFFFFF" cx="298" cy="130" r="2"></circle>\n                        <text id="观望" font-family="PingFangSC-Regular, PingFang SC" font-size="9" font-weight="normal" fill="#9AA0AA">\n                            <tspan x="268" y="116">观望</tspan>\n                        </text>\n                        <text id="投资时机" font-family="PingFangSC-Regular, PingFang SC" font-size="9" font-weight="normal" fill="#9AA0AA">\n                            <tspan x="260" y="198">投资时机</tspan>\n                        </text>\n                        <text id="机会" font-family="PingFangSC-Regular, PingFang SC" font-size="9" font-weight="normal" fill="#999CA7">\n                            <tspan x="324" y="198">机会</tspan>\n                        </text>\n                        <text id="风险" font-family="PingFangSC-Regular, PingFang SC" font-size="9" font-weight="normal" fill="#999CA7">\n                            <tspan x="208" y="198">风险</tspan>\n                        </text>\n                        <path d="M282.999976,155 L282.999976,155 C284.129843,155 285.058465,155.891462 285.104581,157.020387 L285.997446,178.877583 C286.065072,180.533041 284.77788,181.929875 283.122423,181.9975 C283.081629,181.999167 283.040805,182 282.999976,182 L282.999976,182 C281.343139,182 280.000006,180.656868 280.000006,179.00003 C280.000006,178.959202 280.00084,178.918378 280.002506,178.877583 L280.895371,157.020387 C280.941488,155.891462 281.870109,155 282.999976,155 Z" id="Rectangle-41" fill="#0088FF" transform="translate(283.000000, 168.500000) rotate(26.000000) translate(-283.000000, -168.500000) "></path>\n                        <circle id="Oval-18" fill="#FFFFFF" cx="278.5" cy="177.5" r="1.5"></circle>\n                        <path d="M276.996706,133 L278.003294,133 L278.003294,139.982942 L276.996706,139.982942 L276.996706,133 Z M295.535002,137.285937 L296.423765,137.758501 L293.145473,143.924073 L292.256709,143.451509 L295.535002,137.285937 Z M309.893947,149.588348 L310.471302,150.412896 L304.751211,154.418146 L304.173856,153.593598 L309.893947,149.588348 Z M316.877037,167.149951 L316.999709,168.149035 L310.068817,169.000042 L309.946145,168.000958 L316.877037,167.149951 Z M238.000291,168.149035 L238.122963,167.149951 L245.053855,168.000958 L244.931183,169.000042 L238.000291,168.149035 Z M244.528698,150.412896 L245.106053,149.588348 L250.826144,153.593598 L250.248789,154.418146 L244.528698,150.412896 Z M258.576235,137.758501 L259.464998,137.285937 L262.743291,143.451509 L261.854527,143.924073 L258.576235,137.758501 Z" id="Rectangle-50" fill="#D8D8D8"></path>\n                    </g>\n                </g>\n            </svg>\n        </div>\n    </div>\n\n    <input type="file" accept="image/*" capture="camera">  \n    <input type="file" accept="video/*" capture="camcorder">  \n    <input type="file" accept="audio/*" capture="microphone">  \n    \n</ion-content>'/*ion-inline-end:"/Users/liuyuanjie/xingxiang/project/app/src/pages/graphics/graphics.html"*/
    }),
    __metadata("design:paramtypes", [])
], Graphics);

//# sourceMappingURL=graphics.js.map

/***/ })

},[405]);
//# sourceMappingURL=main.js.map