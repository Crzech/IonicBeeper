import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeeperPage } from './beeper';

@NgModule({
  declarations: [
    BeeperPage,
  ],
  imports: [
    IonicPageModule.forChild(BeeperPage),
  ],
})
export class BeeperPageModule {}
