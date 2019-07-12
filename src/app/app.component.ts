import { Component } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mealtracker';
  public MealsList: Meal[] = [
    new Meal ( 'Chapati', 'Circular', 450),
    new Meal ('Sukuma', 'Green', 780),
    new Meal ('Chip', 'Fries', 250)
  ];
  selectedMeal: Meal = null;
  addMeal(NewMeal: Meal) {
    this.MealsList.push(NewMeal);
  }
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  deleteMeal(MealToDel: Meal) {
    const index: number = this.MealsList.indexOf(MealToDel);
    this.MealsList.splice(index, 1);
  }
}
