import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';



@Injectable()
export class ServicesdeezerProvider {

  private baseurl :string = "http://api.deezer.com/search/artist/?q=";

  constructor(public http: HttpClient) {
    console.log('Hello ServicesdeezerProvider Provider');
  }


 //Récupération et Parsage de la liste des artistes recherchés 
  public getArtists(nom: string): Promise<any>{
 
    const url= this.baseurl+nom+"&index=0&output=json";

  
        return new Promise(resolve => {
          let headers: HttpHeaders= new HttpHeaders();
          headers.append('Accept ','application/json');

          this.http.get(url, {headers: headers}).subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
   
   
  }
  

//Récupération et Parsage de la liste des albums recherchés 
  public getAlbums(url: string): Promise<any>{

  
        return new Promise(resolve => {
          let headers: HttpHeaders= new HttpHeaders();
          headers.append('Accept ','application/json');

          this.http.get(url, {headers: headers}).subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
   
   
  }



  //Récupération et Parsage de la playlist de l'album recherché
  public getPlaylist(url: string): Promise<any>{

  
    return new Promise(resolve => {
      let headers: HttpHeaders= new HttpHeaders();
      headers.append('Accept ','application/json');

      this.http.get(url, {headers: headers}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });


}

}
