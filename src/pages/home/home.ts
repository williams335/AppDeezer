import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ListartistsPage } from '../../pages/listartists/listartists';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  nom:string;

  constructor(private NavCtrl: NavController ) {
      
  }

  //Renvoie vers la liste des artistes recherchés
  nextPage(){
    this.NavCtrl.push(ListartistsPage,{nom:this.nom});
    console.log(this.nom);
  } 


}

