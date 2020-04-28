import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NourritureComponent } from './nourriture/nourriture.component';
import { VendeursComponent } from './vendeurs/vendeurs.component';
import { PanierComponent } from './panier/panier.component';
import { SingleVendeurComponent } from './single-vendeur/single-vendeur.component';
import { SingleNourritureComponent } from './single-nourriture/single-nourriture.component';

@NgModule({
  declarations: [
    AppComponent,
    NourritureComponent,
    VendeursComponent,
    PanierComponent,
    SingleVendeurComponent,
    SingleNourritureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
