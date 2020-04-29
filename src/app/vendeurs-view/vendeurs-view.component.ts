import { Component, Input, OnInit } from '@angular/core';
import { NourritureService } from '../services/nourriture.service';

@Component({
  selector: 'app-vendeurs-view',
  templateUrl: './vendeurs-view.component.html',
  styleUrls: ['./vendeurs-view.component.css']
})
export class VendeursViewComponent implements OnInit {

  vendeurs: any[];

  @Input() vendeurName: string;
  @Input() vendeurDescription: string;
  @Input() vendeurAdresse: string;
  @Input() vendeurImg: string;
  @Input() vendeurNote: number;
  @Input() id: number;
  @Input() index: number;
  
  constructor(private nourritureService: NourritureService) { }

  ngOnInit() {
    this.vendeurs = this.nourritureService.nourritures;
  }

}
