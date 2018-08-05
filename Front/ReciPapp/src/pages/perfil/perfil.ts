import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private AbrirPerfil(_Perfil: number) {
    switch (_Perfil) {
      case 1:
      //  this.navCtrl.setRoot(HomePage);
        break;
      case 2:
       // this.navCtrl.setRoot(ListPage);
        break;
      case 3:
      //  this.navCtrl.setRoot(ListPage);
        break;
    }
  }

}
