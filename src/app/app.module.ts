import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ByIngredientsModule} from "./by-ingredients/by-ingredients.module";
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// import {ByIngredientsComponent} from "./by-ingredients/by-ingredients.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ByIngredientsModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
