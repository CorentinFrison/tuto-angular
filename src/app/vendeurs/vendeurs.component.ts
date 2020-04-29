import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.css']
})



export class VendeursComponent implements OnInit {

  @Input() vendeurName: string;
  @Input() vendeurDescription: string;
  @Input() vendeurAdresse: string;
  @Input() vendeurImg: string;
  @Input() vendeurNote: number;
  @Input() idVendeur: number;
  @Input() index: number;

  constructor() { }


  ngOnInit(): void {
  }


}
