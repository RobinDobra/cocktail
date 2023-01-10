import {Component, OnInit} from '@angular/core';
import {INGREDIENTS} from "../../ingredients";
import {ByIngredientsService} from "../by-ingredients.service";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  sorted_ingredients = INGREDIENTS.sort();

  form = this.formBuilder.group(
    {
      ingredients: this.formBuilder.array(this.sorted_ingredients),
      selectedIngredients: this.formBuilder.array([])
    });

  constructor(private formBuilder: FormBuilder, public byIngredientsService: ByIngredientsService) {
  }

  ngOnInit(): void {
    this.ingredientsFormArray.selectedIngredients.push(new FormControl("Sprudelwasser"))
    this.ingredientsFormArray.selectedIngredients.push(new FormControl("Eiswürfel"))
    this.ingredientsFormArray.selectedIngredients.push(new FormControl("Rohrzucker"))
  }

  get ingredientsFormArray() {
    return this.form.controls;
  }

  onCheckboxChange(event: any) {
    const selectedIngredients: FormArray = this.form.controls.selectedIngredients;

    if (event.target.checked) {
      selectedIngredients.push(new FormControl(event.target.value));
    } else if (event.target.checked === false) {
      const index = selectedIngredients.controls.findIndex( x => x.value === event.target.value);
      selectedIngredients.removeAt(index);
    } else {
      null;
    //  console.log("Sie haben zwischen die Buttons geklickt, das hat kein Event produziert.
    }
    this.byIngredientsService.findMissingIngredients(selectedIngredients.value);
  }





}

