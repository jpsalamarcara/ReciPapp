import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Models
import { Collector } from '../../models/mCollector';

//Pages
import { ProBuyPage } from "../pro-buy/pro-buy";

@IonicPage()
@Component({
  selector: 'page-pro-recolectors',
  templateUrl: 'pro-recolectors.html',
})
export class ProRecolectorsPage {

  searchQuery: string = '';
  collectors: Collector[] = [];
  proBuyPage: any = ProBuyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.collectors = [
      { name: 'Oscar Z', id: '12345' },
      { name: 'Dairo B', id: '12346' },
      { name: 'Juan Pablo C', id: '12347'},
      { name: 'Anderson R', id: '12348'},
      { name: 'Andres S', id: '12349'}
    ];
  }

  getItems(ev: any) {

    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.collectors = this.collectors.filter((collector) => {
        return (collector.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProRecolectorsPage');
  }

}
