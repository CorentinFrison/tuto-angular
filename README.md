# Tutoriel Angular.js

### Membres de l'équipe :

  - Cloé Lhenry
  - Lison D'agostini
  - Corentin Frison

### Projet :
Réalisation d'un tutoriel Angular afin de réaliser une mini application.

## 1 - Introduction
Framework Java Script créé par Google qui sert à créer des SPA (single page applications). Contrairement à un site habituel, Angular charge une seule page au début, et modifie son contenu en fonction d’actions que l’utilisateur réalise. 

## 2 - Principes de fonctionnement
Il est basé sur le concept de l'architecture MVC (Model View Controller) qui permet de séparer les données, les vues et les différentes actions que l'on peut effectuer.
Angular utilise le TypeScript comme langage de base. C’est un sur ensemble de JavaScript avec des fonctionnalité supplémentaire et ensuite trans compiler en JavaScript pour que les navigateur le comprenne.

## 3 - Outils nécessaire : 
Node.js : [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
Npm : ```sh npm install -g npm@latest```
angular/cli : ```sh npm install -g @angular/cli```

Créer un projet : 
```sh ng new mon-premier-projet ```

Lancer le projet : 
```sh ng serve --open ```

Voir le projet à l’adresse : localhost:4200

## 4 - Création d'une mini appli (quotes, people, ...) a vous de voir
#### Routing simple :
Le routing correspond aux instructions d’affichages pour les différentes url de notre application. Le routing permettra de définir les components à afficher selon les différentes pages.
Etant donné que le routing est un élément essentiel de notre application, nous allons définir les routes dans  app.module.ts 

Mais avant cela, nous devons légèrement modifier l’architecture de notre application afin de faciliter la création du routing et l’affichage des composants.
Premièrement, nous allons créer un composant nourriture-view qui contiendra une liste des différents plats dans notre tableau de données : 

```sh ng g c appareil-view ```

Puis, nous allons copier tout le contenu de la colonne dans app.component.html pour la coller dans nourriture-view.component.html, et placez la balise <app-appareil-view> correspondant à notre nouveau component dans app.component.html : 

```html 
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <app-appareil-view></app-appareil-view>
    </div>
  </div>
</div>
```

Il faut aussi déplacer toute la partie logique vers nourriture-view : Injectez le service NourritureService, créez un array plats et récupérez les données du service dans cet array grâce au ngOnInit.

```javascript
import { Component,Input, OnInit } from '@angular/core';
import { NourritureService } from '../services/nourriture.service';
 
@Component({
 selector: 'app-nourriture-view',
 templateUrl: './nourriture-view.component.html',
 styleUrls: ['./nourriture-view.component.css']
})
export class NourritureViewComponent implements OnInit {
 
 plats: any[];
 constructor(private nourritureService: NourritureService) { }
 
 ngOnInit() {
   this.plats = this.nourritureService.nourritures;
 }
}
```

Vous pouvez maintenant effectuer cette manipulation pour le composant Vendeur et retirer tout ce qui ne sert plus dans app.component.ts

Nous allons maintenant importer les modules Routes et RouterModules (de @angular/router) afin de créer une constante appRoutes qui contiendra toutes nos routes en tant que array d’objets JS.

```javascript 
import { Routes, RouterModule } from '@angular/router'; 
```

```javascript 
const appRoutes : Routes = [
 { path:'vendeurs', component: VendeursViewComponent },
 { path:'panier', component: PanierComponent },
 { path:'', component: NourritureViewComponent },
];
```

La propriété path correspond au texte affiché dans l’url après le / dans l’url de votre navigateur.
	Ex : Pour la route vendeurs : localhost:4200/vendeurs
    **Attention !**    Ne pas mettre de /  dans la propriété path.
    
La propriété component correspond au component qui sera affiché lorsque l’on arrivera sur cette route.
	Ex : Pour la route Panier, le component affiché sera PanierComponent

Le path vide ( path: ‘’ ) correspond à la racine de notre application ( localhost:4200 ). Celà correspond donc à la page d’accueil de notre application. Vous pouvez créer un component dédié à la page d’accueil ou alors, comme dans ce tutoriel, afficher directement un component déjà crée (le component Nourriture ici).

La création des routes est effectué mais il faut désormais les enregistrer au sein de notre application. Pour cela nous allons importer RouterModule dans le tableau Imports de app.module.ts en passant notre array de routes appRoutes grâce à la méthode forRoot()

```javascript 
imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
],
```

Maintenant, il faut spécifier à Angular où afficher les components qui seront appelés lors de la navigation vers une route. On allons donc utiliser la balise  <router-outlet> dans app.component.html : 

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
```

Nous allons maintenant créer la barre de navigation qui permettra d'accéder aux différentes routes de notre application. Tout d’abord, nous allons créer un component Navbar avec la commande : ```sh ng g c navbar ```

Puis dans navbar.component.html, nous allons créer notre barre de navigation :
```html
<nav class="navbar navbar-default">
<div class="container-fluid">
<div class="navbar-collapse">
<ul class="nav navbar-nav">
<li routerLinkActive="active"><a routerLink="">Plats</a></li>
<li routerLinkActive="active"><a routerLink="vendeurs">Vendeurs</a></li>
<li routerLinkActive="active"><a routerLink="panier">Panier</a></li>
</ul>
</div>
</div>
</nav>
```

Qu’est ce que routerLink ? En effet, plutôt qu’utiliser routerLink, nous pourrions juste créer des liens avec des attributs href qui correspondent aux path créés précédemment. Mais, si nous utilisons cette méthode, la page est rechargée à chaque changement de route, on perd donc le côté SPA (Single Page Application) d’Angular. Nous utilisons donc l’attribut routerLink d’Angular pour éviter les rechargements inutiles. 

Dernier point de cette partie : Si vous souhaitez que la classe active ne s’applique que sur le lien du component actif, vous pouvez utiliser l’attribut routerLinkActive d’Angular dans l’élément parent au lien.

### Gestion des 404 :
Afin de rediriger l’utilisateur lorsque l’url entrée n’existe pas, nous allons créer une page d’erreur 404. Tout d’abord, nous allons créer un component notfound qui correspondra à la page d’erreur.
```sh ng g c notfound ```

Ensuite nous allons ajouter le code html de la page dans notfound.component.html :
```html
<h2>Erreur 404</h2>
<p>La page que vous cherchez n'existe pas !</p>
```

Et finalement nous allons ajouter les routes nécessaire au fonctionnement de cette page dans app.module.ts :
```javascript
const appRoutes : Routes = [
 { path:'vendeurs', component: VendeursViewComponent },
 { path:'panier', component: PanierComponent },
 { path:'', component: NourritureViewComponent },
 { path: '404', component: NotfoundComponent },
 { path: '**', redirectTo: '404' }
];
```

La première route ajouté est une route basique qui affichera notre component sur localhost:4200/404
La seconde route ajoutée est une route de redirection. 
La propriété ‘**’ de path signifie toutes les URLs ne correspondant pas à une route existante.
La propriété redirectTo permet de désigner une redirection vers un path.
Cette dernière route va donc se charger de rediriger l’utilisateur lorsque celui-ci essaiera d'accéder à une URL non définie dans les routes existantes.

### Gestion des routes paramétrées : 
Nous allons désormais générer les routes afin d’afficher les plats, avec plus de détails grâce à des pages spécifiques pour ces plats. Nous allons donc créer une route dans app.Module

```javascript 
{ path:'plats/:id', component: SingleNourritureComponent } 
```
Afin de spécifier un paramètre dans notre route, nous allons utiliser :id.
Grâce à ce paramètre, toutes les URLs de type plats/* seront renvoyé vers le composant SingleNourriture que nous allons créer maintenant : 
```ng g c single-nourriture```

**single-nourriture.component.ts :**

```Javascript
import { Component, OnInit } from '@angular/core';
import { NourritureService } from '../services/nourriture.service';
import { ActivatedRoute } from '@angular/router';
 
 
@Component({
 selector: 'app-single-nourriture',
 templateUrl: './single-nourriture.component.html',
 styleUrls: ['./single-nourriture.component.css']
})
export class SingleNourritureComponent implements OnInit {
 
 name: string ;
 categorie: string ;
 prix:number;
 description: string ;
 img: string ;
 vendeur: string ;
 img_vendeur: string;
 index: number;
 panier:boolean;
 
 constructor(private nourritureService: NourritureService, private route: ActivatedRoute) { }
 
 ngOnInit() {
 }
}
```

**single-nourriture.component.html**

```html
<div class="card" style="width: 80%">
       <img class="card-img-top" src={{img}} alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">{{name}}</h5>
         <p class="card-text">{{description}}</p>
       </div>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">Prix : {{prix}} €</li>
            <li class="list-group-item">Catégorie : {{categorie}}</li>
            <li class="list-group-item">Vendeur : {{vendeur}}</li>
        </ul>
        <div class="card-body">
            <a class="btn btn-primary">Ajouter au panier</a>
        </div>
</div>
```

Ici, nous avons importé le module ActivatedRoute au sein du constructeur afin de récupérer le fragment id de l’URL.
Puis dans le ngOnInit, nous allons utiliser l’objet snapshot qui contient les paramètres de l’URL et attribuer le paramètre id définie dans les routes dans une constante : 
```javascript
ngOnInit() {
    this.name = this.route.snapshot.params['id'];
}
```

Ensuite, nous allons définir un identifiant unique à chaque plats et une méthode dans notre service qui permettra de faire le lien entre un appareil et un identifiant : 

```javascript
nourritures = [
     {
       id:1, //ajoutez cette ligne pour chaque plats
       name: 'Burger',
       categorie: 'Americain',
       prix: 6,
       description: 'Un veritable burger fait maison, bien gras et dangereux pour votre santé !',
       img: 'assets/src/burger.jpg',
       vendeur: "L'Adresse",
       idVendeur:1,
       description_vendeur: "Ce restaurant au décor contemporain propose des burgers gourmets et une cate de vins, avec formules le midi.",
       adresse: '34 Rue des Bouchers, 59800 Lille',
       img_vendeur: 'assets/src/restaurant.jpg',
       note: 4.5,
       panier:false
     },
```

```javascript
getPlatById(id: number) {
       const plat = this.nourritures.find(
         (s) => {
           return s.id === id;
         }
       );
       return plat;
   }
```

Maintenant dans single-nourriture.component.ts, nous allons utiliser cette méthode afin de récupérer les données du plat correspondant à l’id passé en paramètre dans l’URL

```javascript
ngOnInit() {
   const id = this.route.snapshot.params['id'];
   this.name = this.nourritureService.getPlatById(+id).name;
   this.categorie = this.nourritureService.getPlatById(+id).categorie;
   this.prix = this.nourritureService.getPlatById(+id).prix;
   this.description = this.nourritureService.getPlatById(+id).description;
   this.img = this.nourritureService.getPlatById(+id).img;
   this.vendeur = this.nourritureService.getPlatById(+id).vendeur;
   this.img_vendeur = this.nourritureService.getPlatById(+id).img_vendeur;
   this.panier = this.nourritureService.getPlatById(+id).panier;
 }
```

 **Attention !**  Puisque qu’une url est forcément un type String et que la méthode prend en argument un nombre, il ne faut pas oublier d’utiliser + avant id afin de transformer ce nombre en string
 
 Finalement, nous allons intégrer l’id et les valeurs de nos appareils dans les components nourriture et nourriture-view, puis créer un routerLink pour chaque appareil afin d’avoir une vue détaillé pour chaque plats : 
 
 Ajoutez dans **nourriture.component.ts** et **single-nourriture.component.ts**
```javascript
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
```

**nourriture.component.html**
```html
<div class="card" style="width: 32rem;">
       <img class="card-img-top" src={{platImg}} alt="Card image cap" >
       <div class="card-body">
         <h5 class="card-title">{{platName}}</h5>
         <p class="card-text">{{platDescription}}</p>
       </div>
         <ul class="list-group list-group-flush">
               <li class="list-group-item">Catégorie : {{platCategorie}}</li>
               <li class="list-group-item">Vendeur : {{platVendeur}}</li>
       </ul>
       <div class="card-body">
         <a [routerLink]="[id]" class="btn btn-primary">Détails</a>
       </div>
     </div>
```

**single-nourriture.component.html**
```html
<h2>Les plats à la carte</h2>
           <p>Découvrez nos succulents plats !</p>
               <app-nourriture  *ngFor="let plat of plats; let i = index"
                                 [platName]="plat.name"
                                 [platDescription]="plat.description"
                                 [platImg]="plat.img"
                                 [platPrix]="plat.prix"
                                 [platCategorie]="plat.categorie"
                                 [platVendeur]="plat.name"
                                 [platImgVendeur]="plat.name"
                                 [index]="i"
                                 [id]="plat.id"
                                 [panier]="plat.panier">
                  </app-nourriture>
```

### Fonction Panier : 
Dans la single d’un nourriture : création du bouton “ajouter au panier” dans chaque élément nourriture 
```html
<div class="card-body">
    <a class="btn btn-primary" (click)="onAcheter()">
    Ajouter au panier
    </div>
</div>
```

On ajoute l'événement au click pour lancer la fonction “onAcheter()”, défini dans le fichier ts du component de ce même single nourriture.
lance une fonction ajout au panier qui indente la variable panier dans la “base de donnée”

```javascript
onAcheter(){
    this.nourritureService.addPanier(this.index);
}
```

cette fonction permet de lancer une autre fonction “addPanier” qui est un service de notre application. Cette fonction permettra d’ajouter un élément au panier, en fonction de lindex (mis en paramètre de la fonction)

```javascript
addPanier(index:number){
    this.panier = this.panier+1;
...
```

La variable panier correspond au nombre de fois que l’on clic sur le bouton “ajout au panier” ce qui permet à l’utilisateur d’ajouter plusieurs fois un produit à son panier
A chaque fois qu’il clic sur “ajouter au panier” cette fonction d’indentation ajoute +1.

Dans la page ”panier”, il ne nous reste plus qu’à afficher les produits qui ont une valeur (strictement) supérieure à 0, c’est à dire, où l’utilisateur à au moins cliquer une fois sur le bouton “ajout au panier”
On réalise cela grâce à une directive. En Angular, on utilise ngif* pour donner une condition : 
```javascript
<div class="card" style="width: 32rem;" *ngif='panier>0'>
   <img class="card-img-top" src={{...
```

## 5 - Comparaison avec React
Contrairement à React qui est un bibliotèque, Angular est un véritable framework qui se suffit à soit même.  
Angular ne permet pas de faire des applications natives, contrairement à React qui permet d’en créer avec ReactNative. Pour cela, il faut faire de l’Ionic en plus de l’angular.

## 6 - Difficultés rencontrées
Pas d'erreur qui s’affiche à l’écran donc compliqué pour le débug 
Beaucoup de fichier, l’architecture devient compliqué avec un certain nombre de fichiers
Apprentissage et méthode de création de components différente de React
Le travail à plusieurs est compliqué car on doit rapidement touché aux mêmes fichiers

## 7 - Références
[Présentation d’Angular - Quelles applis “SPA” peut-on coder avec Angular ?](https://www.youtube.com/watch?v=R2apWo2_41o)
[Openclassroom - Développez des applications web avec Angular](https://openclassrooms.com/fr/courses/4668271-developpez-des-applications-web-avec-angular)
