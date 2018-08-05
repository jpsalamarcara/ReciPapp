import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecConfirmationPage } from './rec-confirmation';

@NgModule({
  declarations: [
    RecConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(RecConfirmationPage),
  ],
})
export class RecConfirmationPageModule {}
