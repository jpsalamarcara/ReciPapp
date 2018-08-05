import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigurationProvider } from '../../providers/configuration/configuration';

//Models
import { Collector } from '../../models/mCollector';
import { Product } from '../../models/mProduct';
import { Transaction } from '../../models/mTransaction';

//Providers
import { CtrlStorageProvider } from "../../providers/ctrl-storage/ctrl-storage";


@IonicPage()
@Component({
  selector: 'page-pro-buy',
  templateUrl: 'pro-buy.html',
})
export class ProBuyPage {

  listMaterials: any;
  collector: Collector;
  idProcessor: any;
  product: Product;
  products: Product[];
  transaction: Transaction;

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private configProv: ConfigurationProvider,
               private ctrlStorage: CtrlStorageProvider )
  {
    this.listMaterials = this.configProv.listMaterials;
    this.collector = {
      id: this.navParams.get('idCollector'),
      name: ''
    };

    //Asigna valor a la variabla hasta que termina el provider
    this.ctrlStorage.getData( 'idProcessor' )
      .then( (value => { this.idProcessor = value }) );

    //console.log( this.configProv.listMaterials );
    //console.log( this.navParams.get( 'idCollector' ) );
    //console.log(this.collector.id);
  }

  private setProduct( _id:string, _cant:number, _price:number ){
    this.product = {
      id: _id,
      cant: _cant,
      price: _price
    }
  }

  private addProduct( _product: Product ){
    //this.products.push( _product );
    console.log(this.idProcessor);
  }

}
