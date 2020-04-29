import { Component, OnInit } from '@angular/core';
import { NourritureService } from '../services/nourriture.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-nourriture',
  templateUrl: './single-nourriture.component.html',
  styleUrls: ['./single-nourriture.component.css']
})
export class SingleNourritureComponent implements OnInit {

  name: string ;
  categorie: string ;
  prix:number;
  description: string ;
  img: string ;
  vendeur: string ;
  img_vendeur: string;
  index: number;
  panier:boolean;

  constructor(private nourritureService: NourritureService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.nourritureService.getPlatById(+id).name;
    this.categorie = this.nourritureService.getPlatById(+id).categorie;
    this.prix = this.nourritureService.getPlatById(+id).prix;
    this.description = this.nourritureService.getPlatById(+id).description;
    this.img = this.nourritureService.getPlatById(+id).img;
    this.vendeur = this.nourritureService.getPlatById(+id).vendeur;
    this.img_vendeur = this.nourritureService.getPlatById(+id).img_vendeur;
    this.panier = this.nourritureService.getPlatById(+id).panier;
    console.log(this.panier) 
  }

  onAcheter() {
    this.nourritureService.switchPanier(this.index);
  }

}
