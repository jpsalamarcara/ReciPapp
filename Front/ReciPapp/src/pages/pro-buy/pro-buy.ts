import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigurationProvider } from '../../providers/configuration/configuration';

//Models
import { Collector } from '../../models/mCollector';
import { Product } from '../../models/mProduct';
import { Transaction } from '../../models/mTransaction';

//Providers
import { ConexionServiceProvider } from '../../providers/conexion-service/conexion-service';

@IonicPage()
@Component({
  selector: 'page-pro-buy',
  templateUrl: 'pro-buy.html',
})
export class ProBuyPage {

  listMaterials: any;
  collector: Collector;
  product: Product;
  products: Product[];
  transaction: Transaction;

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private configProv: ConfigurationProvider,
               private conexionService: ConexionServiceProvider )
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

  private setProduct( _id:string, _cant:number, _price:number ){
    this.product = {
      id: _id,
      cant: _cant,
      price: _price
    }
  }

  private addProduct( _product: Product ){
    this.products.push( _product );
  }

  private buildTransact(){
   null;
  }
}
