import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenBidPage } from './gen-bid';

@NgModule({
  declarations: [
    GenBidPage,
  ],
  imports: [
    IonicPageModule.forChild(GenBidPage),
  ],
})
export class GenBidPageModule {}
