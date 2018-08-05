import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenHomePage } from './gen-home';

@NgModule({
  declarations: [
    GenHomePage,
  ],
  imports: [
    IonicPageModule.forChild(GenHomePage),
  ],
})
export class GenHomePageModule {}
