import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {ByIngredientsService} from "../../by-ingredients.service";
import {Recipe} from "../../../recipes";

@Component({
  selector: 'app-input-cocktails',
  templateUrl: './input-cocktails.component.html',
  styleUrls: ['../../input-style.component.css']
})
export class InputCocktailsComponent {

  sorted_cocktails = this.byIngredientsService.generateInputCocktails().sort();
  selectedIngredients: string[] = [];

  formGroup = this.formBuilder.group(
    {
      cocktails: this.formBuilder.array(this.sorted_cocktails),
      selectedCocktails: this.formBuilder.array([]),
    });

  constructor(private formBuilder: FormBuilder, public byIngredientsService: ByIngredientsService) {

  }

  get cocktailsFormArray() {
    return this.formGroup.controls;

  }

  onCheckboxChange(event: any) {
    const selectedCocktails: FormArray = this.formGroup.controls.selectedCocktails;

    if (event.target.checked) {
      selectedCocktails.push(new FormControl(event.target.value));
      this.pushIngredientsByCocktailName(event.target.value);
    } else if (event.target.checked === false) {
      const index = selectedCocktails.controls.findIndex(x => x.value === event.target.value);
      selectedCocktails.removeAt(index);
      this.removeIngredientsByCocktailName(event.target.value)
      /*      selectedCocktails.controls.forEach((name) => {
              this.selectedIngredients.push(name.value);
            })*/
    } else {
      null;
    }
    /*
        console.log("Selected Cockta: ", selectedCocktails)
        console.log("Selected Ingr: ", this.selectedIngredients)*/

    this.selectedIngredients = [...new Set(this.selectedIngredients)] // removes duplikates
    this.byIngredientsService.findUnselectedIngredients(this.selectedIngredients);

  }

  pushIngredientsByCocktailName(cocktailName: string) {
    let recipe = this.byIngredientsService.recipes.find(recipe => {
      return recipe.cocktail === cocktailName;
    })
    if (recipe) {
      recipe.ingredients.forEach((ingredient) => {
        this.selectedIngredients.push(ingredient.name);
      })
    }
    console.log("SelIng: ", this.selectedIngredients)
  }

  removeIngredientsByCocktailName(cocktailName: string) {
    let recipe = this.byIngredientsService.recipes.find(recipe => {
      return recipe.cocktail === cocktailName;
    })

    // this.selectedIngredients.forEach( value => {
    //
    // })
    // @ts-ignore
    let difference = this.selectedIngredients.filter((ingredient) => {
      console.log("A: ", ingredient);
      // console.log("B: ", ingredient)
      // @ts-ignore
      return !recipe.ingredients.includes(ingredient)
    });
    console.log("Diff:", difference)


    // let difference = recipe.ingredients.filter((ingredient) => !selectedIngredients.includes(ingredient.name));
  }
}
