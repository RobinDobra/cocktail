import {Injectable} from '@angular/core';
import {RECIPES, RecipeWithMissingIngredients} from "../recipes";
import {set} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class ByIngredientsService {
  recipes = RECIPES;
  private recipesWithMissingIngredients: RecipeWithMissingIngredients[] = [];
  ingredients : string[] = [];

  constructor() {
    console.log("I")

    this.generateInputIngredients();
    this.generateInputCocktails();
    console.log("J")

  }


  generateInputIngredients() {
    console.log("K")

    let ingredientOccurrences = new Set<string>();
    this.recipes.forEach( (recipe) => {
      recipe.ingredients.forEach( (value) => {
        ingredientOccurrences.add(value.name);
      })
    })
    console.log("L")

    return Array.from(ingredientOccurrences);
  }

  generateInputCocktails() {

    let cocktailNames: string [] = [];
    this.recipes.forEach( recipe => {
      cocktailNames.push(recipe.cocktail);
    })
    return cocktailNames.sort();
  }

  // inputIngredientsComponent
  findUnselectedInputs(selectedIngredients: Array<string>) {
    console.log("O")

    this.recipesWithMissingIngredients = [];
    this.recipes.forEach((recipe) => {
      let recipeWithMissingIngredient: RecipeWithMissingIngredients = new RecipeWithMissingIngredients();
      let difference = recipe.ingredients.filter((ingredient) => !selectedIngredients.includes(ingredient.name));
      recipeWithMissingIngredient.cocktail = recipe.cocktail;
      recipeWithMissingIngredient.ingredients = recipe.ingredients;
      recipeWithMissingIngredient.missingIngredients = difference;
      // console.log("R: ", recipeWithMissingIngredient)
      this.recipesWithMissingIngredients.push(recipeWithMissingIngredient);
    })
    console.log("P")

    // console.log("A: ",this.recipesWithMissingIngredients);
  }

  // outputCocktailComponent
  getRecipesWithMissingIngredients() {
    // console.log("Q")
    // return null;
    return this.recipesWithMissingIngredients.sort( (a, b) => {
      return a.missingIngredients.length - b.missingIngredients.length;
    });
  }


}
