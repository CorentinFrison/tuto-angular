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
    const idVendeur = this.route.snapshot.params['idVendeur'];
    this.vendeurName = this.nourritureService.getVendeurById(+idVendeur).vendeur;
    this.vendeurDescription = this.nourritureService.getVendeurById(+idVendeur).description_vendeur;
    this.vendeurAdresse = this.nourritureService.getVendeurById(+idVendeur).adresse;
    this.vendeurImg = this.nourritureService.getVendeurById(+idVendeur).img_vendeur;
    this.vendeurNote = this.nourritureService.getVendeurById(+idVendeur).note;
  }

}
