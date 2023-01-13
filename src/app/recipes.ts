export interface Recipe {
  cocktail: string;
  ingredients: {name: string, amount: string, optional?: string[], info?: string}[];
}

export class RecipeWithMissingIngredients implements Recipe {
  cocktail: string = "";
  ingredients: {name: string, amount: string, optional?: string[], info?: string}[] /*{name: string, amount: string}*/ = [];
  missingIngredients: {name: string, amount: string, optional?: string[], info?: string}[] = [];
}

export const RECIPES: Recipe[] = [
  {
    "cocktail": "Mojito (Virgin)",
    "ingredients": [
      {name: "Limette", amount: "1"},
      {name: "Pfefferminze", amount: "2 Stiele"},
      {name: "Rohrzucker (braun)", amount: "1 EL", info: "Es kann auch normaler brauner Zucker verwendet werden."},
      {name: "Ginger Ale", amount: "50 ml"},
      {name: "Maracujasaft", amount: "50 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },
  {
    "cocktail": "Mojito",
    "ingredients": [
      {name: "Limette", amount: "1"},
      {name: "Pfefferminze", amount: "1-2 Stiele"},
      {name: "Rohrzucker (braun)", amount: "1-2 EL", info: "Es kann auch normaler brauner Zucker verwendet werden."},
      {name: "Ginger Ale", amount: "50 ml", optional: ["Sprudelwasser"]},
      {name: "Rum (weiß)", amount: "50 ml", info: "Vorschlag: Jamaikanischer Rum, z.B. Havanna Club"},
      {name: "Maracujasaft", amount: "50 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },
  {
    "cocktail": "Cuba Libre",
    "ingredients": [
      {name: "Limette", amount: "1"},
      {name: "Rum (weiß)", amount: "50 ml", info: "Vorschlag: Jamaikanischer Rum, z.B. Havanna Club"},
      {name: "Rohrzucker (braun)", amount: "1 EL", info: "Es kann auch normaler brauner Zucker verwendet werden."},
      {name: "Cola", amount: "130 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },
  {
    "cocktail": "El Presidente",
    "ingredients": [
      {name: "Rum (weiß)", amount: "50 ml", info: "Vorschlag: Jamaikanischer Rum, z.B. Havanna Club"},
      {name: "Wermut (trocken)", amount: "30 ml"},
      {name: "Orangenlikör", amount: "10 ml"},
      {name: "Grenadine", amount: "5 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },
/*  {
    "cocktail": "Caipirinha",
    "input-ingredients": [
      {name: "Cachaça", amount: "60 ml"},
      {name: "Limette", amount: "1"},
      {name: "Rohrzucker (weiß)", amount: "1 EL", info: "Alternativ: 20 ml Zuckersirup"},
      {name: "Grenadine", amount: "5 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },*/
/*  {
    "cocktail": "Tom Collins",
    "input-ingredients": [
      {name: "Gin", amount: "60 ml"},
      {name: "Zitronensaft", amount: "30 ml"},
      {name: "Zuckersirup", amount: "20 ml"},
      {name: "Sprudelwasser", amount: "50 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },*/
/*  {
    "cocktail": "Bramble",
    "input-ingredients": [
      {name: "Gin", amount: "50 ml"},
      {name: "Zitronensaft", amount: "30 ml"},
      {name: "Zuckersirup", amount: "15 ml"},
      {name: "Brombeerlikör", amount: "15 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },*/
/*  {
    "cocktail": "Bee's Knees",
    "input-ingredients": [
      {name: "Gin", amount: "60 ml"},
      {name: "Zitronensaft", amount: "20 ml"},
      {name: "Orangensaft", amount: "20 ml"},
      {name: "Honigsirup", amount: "20 ml"},
    ]
  },*/
/*  {
    "cocktail": "Lagerita",
    "input-ingredients": [
      {name: "Tequila blanco", amount: "50 ml"},
      {name: "Orangenlikör", amount: "20 ml"},
      {name: "Limettensaft", amount: "20 ml"},
      {name: "Bier (hell)", amount: "120 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },*/
  {
    "cocktail": "Margarita",
    "ingredients": [
      {name: "Tequila blanco", amount: "60 ml"},
      {name: "Orangenlikör", amount: "30 ml"},
      {name: "Limettensaft", amount: "20 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },
  {
    "cocktail": "Tequila Sunrise",
    "ingredients": [
      {name: "Tequila blanco", amount: "45 ml"},
      {name: "Orangensaft", amount: "90 ml"},
      {name: "Grenadine", amount: "15 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },
  {
    "cocktail": "Paloma",
    "ingredients": [
      {name: "Tequila blanco", amount: "60 ml", info: "Nach Belieben eine Prise Salz hinzufügen."},
      {name: "Limettensaft", amount: "20 ml"},
      {name: "Grapefruitlimonade", amount: "120 ml"},
    ]
  },
/*  {
    "cocktail": "Moscow Mule",
    "input-ingredients": [
      {name: "Wodka", amount: "45 ml"},
      {name: "Limettensaft", amount: "10 ml"},
      {name: "Ginger Beer", amount: "120 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },*/
];
