import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecHomePage } from './rec-home';

@NgModule({
  declarations: [
    RecHomePage,
  ],
  imports: [
    IonicPageModule.forChild(RecHomePage),
  ],
})
export class RecHomePageModule {}
