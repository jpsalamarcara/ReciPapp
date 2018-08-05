import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Material } from '../../models/mMaterial';

import { GenBidPage } from "../gen-bid/gen-bid";
import { CtrlStorageProvider } from '../../providers/ctrl-storage/ctrl-storage';
import { InfoGenerator } from '../../models/mGenerator';

@IonicPage()
@Component({
  selector: 'page-gen-home',
  templateUrl: 'gen-home.html',
})
export class GenHomePage {


  private infoGenerator: InfoGenerator;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private proStorage: CtrlStorageProvider) {

    this.infoGenerator = new InfoGenerator();
  }

  ionViewWillEnter() {
    //Se valida si hay información registrada del generador

    this.proStorage.getData("DatosGenerator")
      .then((_Datos) => {
        if (_Datos != null){
          this.infoGenerator = _Datos;
          this.navCtrl.setRoot(GenBidPage, this.infoGenerator);
        }
      })
  }


  private generateOffer() {
    this.proStorage.saveData("DatosGenerator", this.infoGenerator);
    this.navCtrl.push(GenBidPage, this.infoGenerator);
  }



}
