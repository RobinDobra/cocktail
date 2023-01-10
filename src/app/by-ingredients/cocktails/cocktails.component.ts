import { Component, OnInit } from '@angular/core';
import {RECIPES} from "../../recipes";
import {ByIngredientsService} from "../by-ingredients.service";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  constructor(public byIngredientsService: ByIngredientsService) { }

  ngOnInit(): void {
  }

  printMissingIngredients() {
    let recipesWithMissingIngredients = this.byIngredientsService.getRecipesWithMissingIngredients();
    console.log("rec: ", recipesWithMissingIngredients)

  }
}
