import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Artist} from '../../models/models-artist';
import { ServicesdeezerProvider } from '../../providers/servicesdeezer/servicesdeezer';

import {ListalbumsPage} from '../../pages/listalbums/listalbums';


/**
 * Generated class for the ListartistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listartists',
  templateUrl: 'listartists.html',
})
export class ListartistsPage {
  nom:string;
  artists: Artist = new Artist();

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicesdeezerProvider: ServicesdeezerProvider ) {

    this.nom=this.navParams.get('nom');
    console.log(this.nom);
    this.ListArtists(this.nom);
    
  }

  ListArtists(nom: string) {
    console.log('ionViewDidLoad ListartistsPage');

    this.servicesdeezerProvider.getArtists(this.nom).then((rep) => {
      console.log(`rep ${JSON.stringify(rep)}`);
      this.artists=rep;
      console.log(this.artists);

    })
    .catch((err) => {
      console.log(`err ${JSON.stringify(err)}`);
    });
  }


  ListAlbums(url: string){
          this.navCtrl.push(ListalbumsPage, {url:url+"0"});
          console.log("url "+url);
  }

}

