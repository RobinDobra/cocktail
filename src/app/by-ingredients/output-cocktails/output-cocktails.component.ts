import { Component, OnInit } from '@angular/core';
import {RECIPES} from "../../recipes";
import {ByIngredientsService} from "../by-ingredients.service";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-output-cocktails',
  templateUrl: './output-cocktails.component.html',
  styleUrls: ['./output-cocktails.component.css']
})
export class OutputCocktailsComponent implements OnInit {

  constructor(public byIngredientsService: ByIngredientsService) { }

  ngOnInit(): void {
  }

  printMissingIngredients() {
    let recipesWithMissingIngredients = this.byIngredientsService.getRecipesWithMissingIngredients();
    console.log("rec: ", recipesWithMissingIngredients)

  }
}
