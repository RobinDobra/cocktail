import {Injectable} from '@angular/core';
import {RECIPES, RecipeWithMissingIngredients} from "../recipes";

@Injectable({
  providedIn: 'root'
})
export class ByIngredientsService {
  recipes = RECIPES;
  private recipesWithMissingIngredients: RecipeWithMissingIngredients[] = [];


  constructor() {
  }

  findMissingIngredients(selectedIngredients: Array<string>) {
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

  getRecipesWithMissingIngredients() {
    return this.recipesWithMissingIngredients.sort( (a, b) => {
      return a.missingIngredients.length - b.missingIngredients.length;
    });
  }
}
