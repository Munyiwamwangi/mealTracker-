import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal';

@Pipe({
  name: 'caloriesLevel',
  pure: false
})
export class CaloriesLevelPipe implements PipeTransform {

  transform(input: Meal[], desiredCaloriesLevel) {
    // console.log("desiredCaloriesLevel:" + desiredCaloriesLevel);
    const output: Meal[] = [];
    if (desiredCaloriesLevel === 'high') {
      for ( let i = 0 ; i < input.length; i++) {
        if (input[i].calories > 499) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCaloriesLevel === 'low') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
