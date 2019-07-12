import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  meals = [
    { Name: 'Ugali', Desc: 'with veggies and beef stew', Calories: 200 },
    { Name: 'Pilau', Desc: 'with veggies and chicken, fried', Calories: 700 },
    { Name: 'Mukimo', Desc: 'with veggies and chicken soup', Calories: 500 },
    { Name: 'Chips', Desc: 'with veggies and chicken breast', Calories: 348 }
  ];
  addMeal() {
    return 'meal add succesfull';
  }
  GetMeals() {
    return this.meals;
  }
}
