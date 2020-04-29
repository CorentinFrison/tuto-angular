import { Component, OnInit, Input } from '@angular/core';
import { NourritureService } from '../services/nourriture.service';

@Component({
  selector: 'app-nourriture-view',
  templateUrl: './nourriture-view.component.html',
  styleUrls: ['./nourriture-view.component.css']
})
export class PanierComponent implements OnInit {

  @Input() platName: string;
  @Input() platDescription: string;
  @Input() platImg: string;
  @Input() platPrix: number;
  @Input() platCategorie: string;
  @Input() platVendeur: string;
  @Input() platImgVendeur: string;
  @Input() id: number;
  @Input() panier: boolean;


  constructor() { }


  ngOnInit(): void {
  }


}
