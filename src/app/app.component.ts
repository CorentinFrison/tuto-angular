import { Component } from '@angular/core';
import { NourritureService } from './services/nourriture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'blog';

  nourritures: any[];

}
