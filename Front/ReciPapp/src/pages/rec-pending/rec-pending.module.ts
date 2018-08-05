import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecPendingPage } from './rec-pending';

@NgModule({
  declarations: [
    RecPendingPage,
  ],
  imports: [
    IonicPageModule.forChild(RecPendingPage),
  ],
})
export class RecPendingPageModule {}
