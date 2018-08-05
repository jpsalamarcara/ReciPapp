import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ReqBid } from '../../models/mGenerator';
import { ConfigurationProvider } from '../../providers/configuration/configuration';


@IonicPage()
@Component({
  selector: 'page-rec-offers',
  templateUrl: 'rec-offers.html',
})
export class RecOffersPage {


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private proConfiguration: ConfigurationProvider) {  }


}
