import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Class
import { Collector } from '../../models/mCollector';

@IonicPage()
@Component({
  selector: 'page-pro-recolectors',
  templateUrl: 'pro-recolectors.html',
})
export class ProRecolectorsPage {

  searchQuery: string = '';
  collectors: Collector[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.collectors = [
      { name: 'Alfonso Z', id: '12345' },
      { name: 'Alfonso B', id: '12346' },
      { name: 'Alfonso C', id: '12347' }
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
