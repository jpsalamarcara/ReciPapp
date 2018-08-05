import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecOffersPage } from './rec-offers';

@NgModule({
  declarations: [
    RecOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(RecOffersPage),
  ],
})
export class RecOffersPageModule {}
