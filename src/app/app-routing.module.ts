import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ByIngredientsComponent} from "./by-ingredients/by-ingredients.component";
import {LandingpageComponent} from "./landingpage/landingpage.component";


const routes: Routes = [
  { path: '', redirectTo: 'byingredients', pathMatch: 'full'},
  { path: 'dashboard', component: LandingpageComponent },
  { path: 'byingredients', component: ByIngredientsComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
