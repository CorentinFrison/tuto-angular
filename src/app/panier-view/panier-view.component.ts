import { Component, OnInit, Input } from '@angular/core';
import { NourritureService } from '../services/nourriture.service';

@Component({
  selector: 'app-panier-view',
  templateUrl: './panier-view.component.html',
  styleUrls: ['./panier-view.component.css']
})
export class PanierViewComponent implements OnInit {

  panierList:any[];

  @Input() platName: string;
  @Input() platDescription: string;
  @Input() platImg: string;
  @Input() platPrix: number;
  @Input() platCategorie: string;
  @Input() platVendeur: string;
  @Input() platImgVendeur: string;
  @Input() id: number;
  @Input() panier: number;


  constructor(private nourritureService: NourritureService) { }


  ngOnInit() {
    this.panierList = this.nourritureService.nourritures;
  }


}