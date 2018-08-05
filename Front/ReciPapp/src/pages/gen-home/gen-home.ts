import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-gen-home',
  templateUrl: 'gen-home.html',
})
export class GenHomePage {

  private objFormCategory: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiFormBuilder: FormBuilder) {
    this.objFormCategory = this.apiFormBuilder.group({
      fcTipoDocumento: new FormControl(['', Validators.required])
    });
  }




}
