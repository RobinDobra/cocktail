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
    this.generateInputIngredients();
    this.generateInputCocktails();
  }


  generateInputIngredients() {
    let ingredientOccurrences = new Set<string>();
    this.recipes.forEach( (recipe) => {
      recipe.ingredients.forEach( (value) => {
        ingredientOccurrences.add(value.name);
      })
    })

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
  findUnselectedIngredients(selectedIngredients: Array<string>) {
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

    // console.log("A: ",this.recipesWithMissingIngredients);
  }

  // outputCocktailComponent
  getRecipesWithMissingIngredients() {
    return this.recipesWithMissingIngredients.sort( (a, b) => {
      return a.missingIngredients.length - b.missingIngredients.length;
    });
  }


}
