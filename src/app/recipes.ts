export interface Recipe {
  cocktail: string;
  ingredients: {name: string, amount: string, optional?: string[]}[];
}

export class RecipeWithMissingIngredients implements Recipe {
  cocktail: string = "";
  ingredients: {name: string, amount: string, optional?: string[]}[] /*{name: string, amount: string}*/ = [];
  missingIngredients: {name: string, amount: string, optional?: string[]}[] = [];
}

export const RECIPES: Recipe[] = [
  {
    "cocktail": "Mojito (Virgin)",
    "ingredients": [
      {name: "Limette", amount: "1"},
      {name: "Pfefferminze", amount: "2 Stiele"},
      {name: "Rohrzucker", amount: "1 EL"},
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
      {name: "Rohrzucker", amount: "1-2 EL"},
      {name: "Ginger Ale", amount: "50 ml", optional: ["Sprudelwasser"]},
      {name: "Havanna Club", amount: "50 ml"},
      {name: "Maracujasaft", amount: "50 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  },
  {
    "cocktail": "Cuba Libre",
    "ingredients": [
      {name: "Limette", amount: "1"},
      {name: "Havanna Club", amount: "50 ml"},
      {name: "Rohrzucker", amount: "1 EL"},
      {name: "Cola", amount: "130 ml"},
      {name: "Eiswürfel", amount: ""},
    ]
  }
  // {cocktail: "Mojito", ingredients: ["Ginger Ale", "Maracujasaft", "Limette", "Pfefferminze", "Havanna Club"]},
  /*  {cocktail: "Virgin Mojito", ingredients: ["Ginger Ale", "Maracujasaft", "Limette", "Pfefferminze"]},
    {cocktail: "Cuba Libre", ingredients: ["Limette", "Havanna Club", "Cola"]},*/
];
