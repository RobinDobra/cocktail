import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputIngredientsComponent} from './input/input-ingredients/input-ingredients.component';
import {OutputCocktailsComponent} from './output-cocktails/output-cocktails.component';
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
import {MatGridListModule} from "@angular/material/grid-list";
import { InputCocktailsComponent } from './input/input-cocktails/input-cocktails.component';
import { InputSwitchComponent } from './input/input-switch/input-switch.component';
import {MatTabsModule} from "@angular/material/tabs";
import { InputTypeComponent } from './input/common/input-type/input-type.component';


@NgModule({
  declarations: [
    InputIngredientsComponent,
    ByIngredientsComponent,
    OutputCocktailsComponent,
    InputCocktailsComponent,
    InputSwitchComponent,
    InputTypeComponent,
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
    MatTableModule,
    MatGridListModule,
    MatTabsModule
  ]
})
export class ByIngredientsModule {
}
