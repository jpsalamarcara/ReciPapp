import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ReqBid } from '../../models/mGenerator';
import { Material } from '../../models/mMaterial';
import { GenBusinessProvider } from '../../providers/gen-business/gen-business';
import { GenHomePage } from "../gen-home/gen-home";

@IonicPage()
@Component({
  selector: 'page-gen-bid',
  templateUrl: 'gen-bid.html',
})
export class GenBidPage {

  private DataOffer: ReqBid = new ReqBid();
  private Material: Material = new Material();
  private time: string;
  private timeEnd: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private proBusiness: GenBusinessProvider,
    public alertCtrl: AlertController) {

    console.log('GenBidPage - Data', ReqBid);
    this.DataOffer = navParams.data;
  }


  private ActualizarMaterial(_Material) {

    this.Material = _Material;
    this.DataOffer.idProduct = _Material.id;
  }

  private Publicar() {

    let loader = this.loadingCtrl.create({
      content: "Un momento por favor..."
    });

    loader.present().then(() => {
      //Se formatea la el rango de hora
      this.DataOffer.rangeHours = `${this.time} - ${this.timeEnd}`;
      //Se invoca el servicio para el envío para la publicación de la oferta
      this.proBusiness.sendOffer(this.DataOffer)
        .then((_Resultado) => {
          loader.dismiss();
          console.log('_Resultado', _Resultado);
          if (_Resultado.excecuted) {
            this.showAlert(`La oferta fue publicada correctamente. Número publicación ${String(_Resultado.response.id)}. \n
            Pronto te llegaran notificiaciones para la recolección.`);
            this.navCtrl.setRoot(GenHomePage);
          }
          else {
            this.showAlert(`Se presentaron incovenientes publicando la oferta. Por favor intenta más tarde.`);
          }
        });
    });
  }


  private showAlert(_Mensaje: string) {
    const alert = this.alertCtrl.create({
      title: 'Resultado publicación',
      subTitle: _Mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

}
