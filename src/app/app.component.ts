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
    new Meal ( 'Pilau', 'chicken breast and veggies', 450),
    new Meal ('Ugali', ' Fried Beef and Greens', 780),
    new Meal ('Mukimo', 'Beef stew and vegetables', 250)
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
