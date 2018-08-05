import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigurationProvider } from '../../providers/configuration/configuration';

//Models
import { Collector } from '../../models/mCollector';
import { Product } from '../../models/mProduct';

//Providers
//import {  } from '../../providers/conexion-service/conexion-service';

@IonicPage()
@Component({
  selector: 'page-pro-buy',
  templateUrl: 'pro-buy.html',
})
export class ProBuyPage {

  listMaterials: any;
  collector: Collector;
  product: Product;

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private configProv: ConfigurationProvider )
  {
    this.listMaterials = this.configProv.listMaterials;
    this.collector = {
      id: this.navParams.get('idCollector'),
      name: ''
    };
    //console.log( this.configProv.listMaterials );
    //console.log( this.navParams.get( 'idCollector' ) );
    console.log(this.collector.id);
  }
}
