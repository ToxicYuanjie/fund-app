import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ClientListPage } from '../clients';
// import { ContactPage } from '../contact/contact';
import { UserPage } from '../user';
// import { HomePage } from '../home/home';
import { ProductListPage } from '../products';

//临时方案-默认跳转到 landing
import { LandingPage } from '../landing/landing'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProductListPage;
  tab2Root = ClientListPage;
  tab3Root = UserPage;

  constructor() {

  }
}
