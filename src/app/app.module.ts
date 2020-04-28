import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NourritureComponent } from './nourriture/nourriture.component';
import { VendeursComponent } from './vendeurs/vendeurs.component';
import { PanierComponent } from './panier/panier.component';
import { SingleVendeurComponent } from './single-vendeur/single-vendeur.component';
import { SingleNourritureComponent } from './single-nourriture/single-nourriture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';



const appRoutes : Routes = [
  { path:'plats/:id', component: SingleVendeurComponent },
  { path:'vendeurs', component: VendeursComponent },
  { path:'vendeurs/:id', component: SingleVendeurComponent },
  { path:'panier', component: PanierComponent },
  { path:'', component: NourritureComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' }
];




@NgModule({
  declarations: [
    AppComponent,
    NourritureComponent,
    VendeursComponent,
    PanierComponent,
    SingleVendeurComponent,
    SingleNourritureComponent,
    NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
