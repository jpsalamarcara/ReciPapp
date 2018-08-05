import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GenHomePage } from "../gen-home/gen-home";

//Pages
import { ProRecolectorsPage } from "../pro-recolectors/pro-recolectors";


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  proRecolectorsPage: any = ProRecolectorsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  private AbrirPerfil(_Perfil: number) {
    switch (_Perfil) {
      case 1:
        this.navCtrl.setRoot(GenHomePage);
        break;
      case 2:
      this.navCtrl.setRoot(GenHomePage);
        break;
      case 3:
      this.navCtrl.setRoot(GenHomePage);
        break;
    }
  }

}
