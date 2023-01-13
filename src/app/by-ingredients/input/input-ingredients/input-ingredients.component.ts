import {Component, OnInit} from '@angular/core';
import {ByIngredientsService} from "../../by-ingredients.service";
import {FormArray, FormBuilder, FormControl, FormGroup, ɵElement} from "@angular/forms";


@Component({
  selector: 'app-input-ingredients',
  templateUrl: './input-ingredients.component.html',
  styleUrls: ['../../input-style.component.css']
})
export class InputIngredientsComponent implements OnInit {

  sorted_ingredients = this.byIngredientsService.generateInputIngredients().sort();

  formGroup = this.formBuilder.group(
    {
      ingredients: this.formBuilder.array(this.sorted_ingredients),
      selectedIngredients: this.formBuilder.array([])
    });

  constructor(private formBuilder: FormBuilder, public byIngredientsService: ByIngredientsService) {
  }

  ngOnInit(): void {
    // this.ingredientsFormArray.selectedIngredients.push(new FormControl("Sprudelwasser"))
    this.ingredientsFormArray.selectedIngredients.push(new FormControl("Eiswürfel"))
    this.ingredientsFormArray.selectedIngredients.push(new FormControl("Rohrzucker (braun)"))
  }

  get ingredientsFormArray() {
    return this.formGroup.controls;
  }

  onCheckboxChange(event: any) {
    const selectedIngredients: FormArray = this.formGroup.controls.selectedIngredients;

    if (event.target.checked) {
      selectedIngredients.push(new FormControl(event.target.value));
    } else if (event.target.checked === false) {
      const index = selectedIngredients.controls.findIndex(x => x.value === event.target.value);
      selectedIngredients.removeAt(index);
    } else {
      null;
      //  console.log("Sie haben zwischen die Buttons geklickt, das hat kein Event produziert.
    }
    this.byIngredientsService.findUnselectedIngredients(selectedIngredients.value);
  }


}

