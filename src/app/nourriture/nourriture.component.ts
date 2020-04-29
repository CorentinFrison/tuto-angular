import { Component, Input, OnInit } from '@angular/core';

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


  constructor() { }


  ngOnInit(): void {
  }


}

