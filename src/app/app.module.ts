import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule , Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

import { ApiService, UserService, ProductService, InjectableService, LoadingControllers } from '../services';

import { MyApp } from './app.component';

import { LandingPage, LoginPage, SMSLoginPage, RegisterPage } from '../pages/landing';
import { ProductListPage, ProductDetailPage } from '../pages/products';
import { ClientListPage } from '../pages/clients';
import { UserPage, ProfilePage } from '../pages/user';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { DetailPage } from '../pages/detail/detail';
import { Graphics } from '../pages/graphics/graphics';
import { ArchivesPage } from '../pages/archives/archives';
import { ManagerListPage , ManagerDetailPage } from '../pages/manager';
import { HistoricalDataPage } from '../pages/historical/historicalData';
import { PortfoliosPage } from '../pages/portfolios/portfolios';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TransAssetPipe, RaPercentPipe, FormatNumberPipe, FormatNumberWithSymbolPipe, FormatMoneyPipe, FormatMoneyWithSymbolPipe, FormatDatePipe, FormatPercentPipe, FormatPercentWithSymbolPipe, TransTradeTypePipe, FractionPartPipe, FundsTypeSymbolPipe, SplitSymbolFirstPipe, SplitSymbolLastPipe, DecimalPointOnePipe, IntegerPipe ,FundDetailPipe ,FundDetailtwoPipe,FormatbounsPipe} from '../pipes'
import { DonutComponent, PortfolioHisotryGraphComponent , RadarGraphComponent, MeterGraphComponent, MeterCompareGraphComponent,MeterComparesGraphComponent, PolyLineGraphComponent, ExpectGraphComponent, NetWorthGraphComponent} from '../component'
import { PkSingleFundPage, PkDoubleFundPage , ReviewPage} from '../pages/pk'

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SearchPage,
    DetailPage,
    Graphics,
    ContactPage,
    HomePage,
    TabsPage,
    LandingPage,
    LoginPage,
    SMSLoginPage,
    RegisterPage,
    ProductListPage,
    ProductDetailPage,
    PkSingleFundPage,
    PkDoubleFundPage,
    ReviewPage,
    ClientListPage,
    UserPage,
    ProfilePage,
    DonutComponent,
    RadarGraphComponent,
    MeterGraphComponent,
    MeterCompareGraphComponent,
    MeterComparesGraphComponent,
    PolyLineGraphComponent,
    ExpectGraphComponent,
    PortfolioHisotryGraphComponent,
    NetWorthGraphComponent,
    TransAssetPipe,
    RaPercentPipe,
    FormatNumberPipe,
    FormatNumberWithSymbolPipe,
    FormatMoneyPipe,
    FormatMoneyWithSymbolPipe,
    FormatDatePipe,
    FormatPercentPipe,
    FormatPercentWithSymbolPipe,
    TransTradeTypePipe,
    FractionPartPipe,
    FundsTypeSymbolPipe,
    SplitSymbolFirstPipe,
    SplitSymbolLastPipe,
    DecimalPointOnePipe,
    IntegerPipe,
    ArchivesPage,
    ManagerListPage,
    ManagerDetailPage,
    HistoricalDataPage,
    FundDetailPipe,
    FundDetailtwoPipe,
    FormatbounsPipe,
    PortfoliosPage
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }
    }),
    HttpModule,
    IonicModule.forRoot(MyApp,
			{
				backButtonText: ''
			},
			{
				links: [
					{ component: LandingPage, name: 'Landing', segment: 'landing' },
          { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
          { component: ProductListPage, name: 'ProductList', segment: 'product-list' },
          { component: ClientListPage, name: 'ClientList', segment: 'client-list' },
          { component: UserPage, name: 'User', segment: 'user' },
          { component: ProfilePage, name: 'Profile', segment: 'profile' },
          // { component: ReviewPage, name: 'Review', segment: 'review' },
				]
			})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SearchPage,
    DetailPage,
    Graphics,
    ContactPage,
    HomePage,
    TabsPage,
    LandingPage, 
    LoginPage,
    SMSLoginPage,
    RegisterPage,
    ProductListPage,
    ProductDetailPage,
    PkSingleFundPage,
    PkDoubleFundPage,
    ReviewPage,
    ClientListPage,
    UserPage,
    ProfilePage,
    DonutComponent,
    RadarGraphComponent,
    MeterGraphComponent,
    MeterCompareGraphComponent,
    MeterComparesGraphComponent,
    PolyLineGraphComponent,
    ExpectGraphComponent,
    PortfolioHisotryGraphComponent,    
    NetWorthGraphComponent,
    ArchivesPage,
    ManagerListPage,
    ManagerDetailPage,
    HistoricalDataPage,
    PortfoliosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
		ApiService,
    UserService,
    ProductService,
    LoadingControllers,
    InjectableService
  ]
})
export class AppModule {
    constructor(public translate: TranslateService) {
        //translate
        let browserLang = translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|cn/) ? browserLang : 'cn');
  }
}
