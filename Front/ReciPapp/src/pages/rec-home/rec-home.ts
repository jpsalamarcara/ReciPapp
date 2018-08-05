import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RecOffersPage } from "../rec-offers/rec-offers";
import { RecPendingPage } from '../rec-pending/rec-pending';

@IonicPage()
@Component({
  selector: 'page-rec-home',
  templateUrl: 'rec-home.html',
})
export class RecHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  private ShowOffers(){
    this.navCtrl.push(RecOffersPage);
  }

  private ShowPending(){
    this.navCtrl.push(RecPendingPage);
  }


}
