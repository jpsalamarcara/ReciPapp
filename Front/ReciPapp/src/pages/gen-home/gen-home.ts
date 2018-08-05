import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RequestGenerator } from '../../models/mRequest';
import { Material } from '../../models/mMaterial';

import { GenLocationPage } from "../gen-location/gen-location";

@IonicPage()
@Component({
  selector: 'page-gen-home',
  templateUrl: 'gen-home.html',
})
export class GenHomePage {

  private objFormCategory: FormGroup;
  private dataRequest: RequestGenerator;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiFormBuilder: FormBuilder) {

    this.dataRequest = new RequestGenerator();

    this.objFormCategory = this.apiFormBuilder.group({
      fcTipoDocumento: new FormControl(['', Validators.required])
    });
    
  }

  private ActualizarMaterial(_Material: Material){
    this.dataRequest.material = _Material;
  }

  private Continuar(){
    this.navCtrl.push(GenLocationPage, this.dataRequest);

  }



}
