import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {CocktailsComponent} from './cocktails/cocktails.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ByIngredientsComponent} from "./by-ingredients.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    IngredientsComponent,
    ByIngredientsComponent,
    CocktailsComponent,
  ],
  exports: [
    ByIngredientsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class ByIngredientsModule {
}
