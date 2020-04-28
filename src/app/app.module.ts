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
import { NourritureService } from './services/nourriture.service';
import { NourritureViewComponent } from './nourriture-view/nourriture-view.component';
import { VendeursViewComponent } from './vendeurs-view/vendeurs-view.component';



const appRoutes : Routes = [
<<<<<<< HEAD
  { path:'plats', component: NourritureViewComponent },
  { path:'plats/:id', component: SingleNourritureComponent },
  { path:'vendeurs', component: VendeursComponent },
=======
  { path:'plats/:id', component: SingleVendeurComponent },
  { path:'vendeurs', component: VendeursViewComponent },
>>>>>>> 27a8a22fa6fbbf685ce1e1748c5d3f4a1895c9a3
  { path:'vendeurs/:id', component: SingleVendeurComponent },
  { path:'panier', component: PanierComponent },
  { path:'', component: NourritureViewComponent },
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
    NotfoundComponent,
    NourritureViewComponent,
    VendeursViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    NourritureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
