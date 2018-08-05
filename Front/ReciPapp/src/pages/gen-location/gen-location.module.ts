import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenLocationPage } from './gen-location';

@NgModule({
  declarations: [
    GenLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(GenLocationPage),
  ],
})
export class GenLocationPageModule {}
