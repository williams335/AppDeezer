import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListartistsPage } from './listartists';

@NgModule({
  declarations: [
    ListartistsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListartistsPage),
  ],
})
export class ListartistsPageModule {}
