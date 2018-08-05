import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ConfigurationProvider } from '../../providers/configuration/configuration';
import { ReqBid } from '../../models/mGenerator';
import { Material } from '../../models/mMaterial';
import { RecConfirmationPage } from "../rec-confirmation/rec-confirmation";


@IonicPage()
@Component({
  selector: 'page-rec-pending',
  templateUrl: 'rec-pending.html',
})
export class RecPendingPage {


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private proConfiguration: ConfigurationProvider,
    public alertCtrl: AlertController) {

  }

  private confirm(Pending: ReqBid){
    
    let _Material: Material = this.proConfiguration.getMaterial(Pending.idProduct);
    let profileModal = this.modalCtrl.create(RecConfirmationPage, { _Pending: Pending, _Material: _Material});
    profileModal.onDidDismiss(_confirmacion => {

      console.log('confirm - pending', _confirmacion._confirmacion.idOffert);

      if(_confirmacion._confirmacion.idOffert != 0){      

          const alert = this.alertCtrl.create({
            title: 'Transacción realizada',
            subTitle: `Se confirma transacción de ${_confirmacion._confirmacion.quantity} ${_Material.unit} a un precio de $${_confirmacion._confirmacion.price} la unidad, para un total de $${_confirmacion._confirmacion.total}`,
            buttons: ['OK']
          });
          alert.present();

         this.proConfiguration.confirmPendient(Pending);        
      }
    });
    profileModal.present();
  }

}
