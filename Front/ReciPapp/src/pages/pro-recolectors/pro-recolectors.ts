import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

//Models
import { Collector } from '../../models/mCollector';
import { PeticionService } from '../../models/mPeticionService';

//Pages
import { ProBuyPage } from "../pro-buy/pro-buy";

//Providers
import { CtrlStorageProvider } from "../../providers/ctrl-storage/ctrl-storage";
import { ConexionServiceProvider } from "../../providers/conexion-service/conexion-service";
import {async} from "rxjs/scheduler/async";

@IonicPage()
@Component({
  selector: 'page-pro-recolectors',
  templateUrl: 'pro-recolectors.html',
})
export class ProRecolectorsPage {

  searchQuery: string = '';
  collectors: any;
  loading: any;
  objectReq: PeticionService = new PeticionService('/COLLECTOR', null);
  proBuyPage: any = ProBuyPage;
  idProcessor: number = 999999999;
  loadDataReady: boolean = false;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ctrlStorage: CtrlStorageProvider,
              private conexService: ConexionServiceProvider,
              private loadingCtrl: LoadingController ) {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Cargando lista de recolectores...'
    });

    this.loading.present();

    this.conexService.ejecutarPeticionGET( this.objectReq )
      .then( (value => {
                        this.collectors = value;
                        console.log("body:: ", this.collectors);
                        this.loadDataReady = true;
                       } ) );

    this.loading.dismiss();

    this.ctrlStorage.saveData( "idProcessor", this.idProcessor );

    console.log("Bug");
  }

  getItems(ev: any) {

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.collectors = this.collectors.filter((collector) => {
        return (collector.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getCollectors(){
    null;
  }

}
