import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListalbumsPage } from './listalbums';

@NgModule({
  declarations: [
    ListalbumsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListalbumsPage),
  ],
})
export class ListalbumsPageModule {}
