import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {Playlist} from '../../models/models-playlists';

// Native
import { Media, MediaObject } from '@ionic-native/media';


import { ServicesdeezerProvider } from '../../providers/servicesdeezer/servicesdeezer';

@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
})
export class PlaylistsPage {
  tracklist: string;
  cover_big:string;
  title1:string;
 
  playlists: Playlist = new Playlist() ;

  private file: MediaObject;
  constructor(public navCtrl: NavController, public navParams: NavParams, private servicesdeezerProvider: ServicesdeezerProvider, private media: Media) {

    this.tracklist=this.navParams.get('tracklist');
    this.cover_big=this.navParams.get('cover_big');
    this.title1=this.navParams.get('title1');

    console.log(this.tracklist);
    console.log(this.cover_big);
    console.log(this.title1);

    this.Listchansons(this.tracklist);
  }

  Listchansons(tracklist: string){

    console.log('ionViewDidLoad PlaylistsPage');

    this.servicesdeezerProvider.getPlaylist(this.tracklist).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.playlists=rep;
      console.log(this.playlists);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
  }

  play(tracklist: string){
    if (this.file) {
      this.file.stop();
      this.file.release();
    }

    this.file = this.media.create( tracklist);
    this.file.play();
  }


}
