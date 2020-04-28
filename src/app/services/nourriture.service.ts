export class NourritureService {
    nourritures = [
      {
        id:1,
        name: 'Burger',
        categorie: 'Americain',
        prix: 6,
        description: 'Un veritable burger fait maison, bien gras et dangereux pour votre santé !',
        img: 'assets/src/burger.jpg',
        vendeur: "L'Adresse",
        description_vendeur: "Ce restaurant au décor contemporain propose des burgers gourmets et une cate de vins, avec formules le midi.",
        adresse: '34 Rue des Bouchers, 59800 Lille',
        img_vendeur: 'assets/src/restaurant.jpg',
        note: 4.5
      },
      {
        id:2,
        name: 'Panini Poulet',
        categorie: 'Sandwich',
        prix: 5,
        description: 'Le meilleur panini poulet du monde',
        img: 'assets/src/panini.jpg',
        vendeur: "L'Aziza",
        description_vendeur: "Pâtisserie et salon de thé tunisien proposant aussi grillades, sandwiches et couscous à emporter.",
        adresse: '12 Rue du Molinel, 59000 Lille',
        img_vendeur: 'assets/src/restaurant.jpg',
        note: 3.8
      },
      {
        id:3,
        name: 'Pizza cinq fromage',
        categorie: 'Pizza',
        prix: 10,
        description: "Il n'y a pas un fromage, pas deux fromages, pas trois fromages, pas quatre fromages, mais CINQ fromages!! Unique. ",
        img: 'assets/src/pizza.jpg',
        vendeur: "Switch",
        description_vendeur: "Avec nous, vous ne pourrez pas jouer à Animal Corssing mais vous pourrez manger la meilleur pizza CINQ formages du monde.",
        adresse: '153 Rue Colbert, 59000 Lille',
        img_vendeur: 'assets/src/restaurant.jpg',
        note: 4
      },
      {
        id:4,
        name: 'Burger Chèvre miel',
        categorie: 'Americain',
        prix: 12,
        description: 'Un peu cher pour un burger, mais vous ne le regretterez peut être pas ?',
        img: 'assets/src/burgerchevre.jpg',
        vendeur: "Jungle burger",
        description_vendeur: "On vend des burger un peu trop cher",
        adresse: "287 Rue du Faubourg d'Arras Local 8, 59155 Faches-Thumesnil",
        img_vendeur: 'assets/src/restaurant.jpg',
        note: 4.9
      },
      {
        id:5,
        name: 'Sandwich parisien',
        categorie: 'Sandwich',
        prix: 5,
        description: 'Du jambon, du beurre, un classique',
        img: 'assets/src/jambonbeurre.jpg',
        vendeur: "La gourmandine",
        description_vendeur: "Ici, on vend les meilleurs jambon beurre, mais on ne vend que ça..",
        adresse: "94 Rue de l'Hôpital Militaire, 59000 Lille",
        img_vendeur: 'assets/src/restaurant.jpg',
        note: 4.5
      },
      {
        id:6,
        name: 'Pizza olive',
        categorie: 'Pizza',
        prix: 11,
        description: 'Et on cultive les olives nous mêmes',
        img: 'assets/src/pizzaolive.jpg',
        vendeur: "Le royaume de l'olive",
        description_vendeur: "Au royaume de l'olive, vous avez des pizza, des burger, des salades (et bien plus) à base d'olive.",
        adresse: '10 Rue Solferino, 59800 Lille',
        img_vendeur: 'assets/src/restaurant.jpg',
        note: 4.8
      },
      {
        id:7,
        name: 'Frites Belges',
        categorie: 'Americain',
        prix: 8,
        description: "Les frites ça vient des Etats Unis ? Nous on fait des vrais frites Belges!",
        img: 'assets/src/burger.jpg',
        vendeur: "A la belge frite",
        description_vendeur: "Du belge, du vrai!",
        adresse: '164 Avenue du Général de Gaulle, 59800 Lille',
        img_vendeur: 'assets/src/restaurant.jpg',
        note: 3.4
      }
    ];


    getPlatById(id: number) {
      const plat = this.nourritures.find(
        (s) => {
          return s.id === id;
        }
      );
      return plat;
  }








  }
