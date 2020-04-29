import { Component, OnInit } from '@angular/core';
import { NourritureService } from '../services/nourriture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-vendeur',
  templateUrl: './single-vendeur.component.html',
  styleUrls: ['./single-vendeur.component.css']
})
export class SingleVendeurComponent implements OnInit {

  vendeurName: string ;
  vendeurDescription: string ;
  vendeurAdresse: string;
  vendeurImg: string ;
  vendeurNote: number ;

  constructor(private nourritureService: NourritureService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.vendeurName = this.nourritureService.getPlatById(+id).vendeur;
    this.vendeurDescription = this.nourritureService.getPlatById(+id).description_vendeur;
    this.vendeurAdresse = this.nourritureService.getPlatById(+id).adresse;
    this.vendeurImg = this.nourritureService.getPlatById(+id).img_vendeur;
    this.vendeurNote = this.nourritureService.getPlatById(+id).note;
  }

}
