import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReqBid } from '../../models/mGenerator';
import { Material } from '../../models/mMaterial';
import { Confirmation } from '../../models/mConfirmation';


@IonicPage()
@Component({
  selector: 'page-rec-confirmation',
  templateUrl: 'rec-confirmation.html',
})
export class RecConfirmationPage {

   private _Pending: ReqBid; 
   private _Material: Material;
   private _Confirmacion: Confirmation;

  constructor(private apiViewCtrl: ViewController,
              private navCtrl: NavController, 
              private navParams: NavParams) {
    this._Pending = navParams.get("_Pending");
    this._Material = navParams.get("_Material");

    console.log('Confirmation', this._Pending , this._Material);
    this._Confirmacion = new Confirmation();
    this._Confirmacion.idOffert = this._Pending.idGenerator
    this._Confirmacion.quantity = this._Pending.quantity;
    this._Confirmacion.price = this._Material.valueMiddle;
  }


  private ConfirmarRecoleccion(){
    this.apiViewCtrl.dismiss({ _confirmacion: this._Confirmacion });
  }

}
