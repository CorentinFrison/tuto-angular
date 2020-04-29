import { Component, Input, OnInit } from '@angular/core';
import { NourritureService } from '../services/nourriture.service';

@Component({
  selector: 'app-nourriture',
  templateUrl: './nourriture.component.html',
  styleUrls: ['./nourriture.component.css']
})



export class NourritureComponent implements OnInit {

  @Input() platName: string;
  @Input() platDescription: string;
  @Input() platImg: string;
  @Input() platPrix: number;
  @Input() platCategorie: string;
  @Input() platVendeur: string;
  @Input() platImgVendeur: string;
  @Input() id: number;
  @Input() index: number;
  @Input() panier: boolean;


  constructor(private NourritureService: NourritureService) { }


  ngOnInit() {
    
  }

  onAcheter() {
    this.NourritureService.switchPanier(this.index);
  }

}