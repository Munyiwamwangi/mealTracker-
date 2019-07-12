import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { DisplayComponent } from './display/display.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { CaloriesLevelPipe } from './calories-level.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddMealComponent,
    DisplayComponent,
    EditMealComponent,
    CaloriesLevelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
