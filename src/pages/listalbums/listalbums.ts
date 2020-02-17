import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Albums} from '../../models/models-albums';



import { ServicesdeezerProvider } from '../../providers/servicesdeezer/servicesdeezer';
import { PlaylistsPage } from '../playlists/playlists';

/**
 * Generated class for the ListalbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listalbums',
  templateUrl: 'listalbums.html',
})
export class ListalbumsPage {

  url:string;
  albums: Albums = new Albums() ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicesdeezerProvider: ServicesdeezerProvider) {

    this.url=this.navParams.get('url');
    console.log(this.url);
    this.ListAlbums(this.url);
  }


  ListAlbums(url: string){

    console.log('ionViewDidLoad ListalbumsPage');

    this.servicesdeezerProvider.getAlbums(this.url).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.albums=rep;
      console.log(this.albums);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
  }


  ListTrack(tracklist: string, cover_big:string, title1:string ){
    this.navCtrl.push(PlaylistsPage, {tracklist: tracklist, cover_big: cover_big, title1: title1})
  }

}
