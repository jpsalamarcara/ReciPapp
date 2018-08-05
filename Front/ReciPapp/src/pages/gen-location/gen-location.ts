import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestGenerator } from '../../models/mRequest';


@IonicPage()
@Component({
  selector: 'page-gen-location',
  templateUrl: 'gen-location.html',
})
export class GenLocationPage {

  private dataRequest: RequestGenerator;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.dataRequest = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenLocationPage');
  }

}
