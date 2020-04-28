import { Component, OnInit } from '@angular/core';
import { NourritureService } from '../services/nourriture.service';

@Component({
  selector: 'app-nourriture',
  templateUrl: './nourriture.component.html',
  styleUrls: ['./nourriture.component.css']
})
export class NourritureComponent implements OnInit {

  plats: any[];

  constructor(private nourritureService: NourritureService) { }

  ngOnInit() {
    this.plats = this.nourritureService.nourritures;
  }

}

