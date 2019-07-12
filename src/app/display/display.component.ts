import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  @Input() childMealList: Meal[];
  public selectedCaloriesLevel: string = 'All';
  @Output() delSender = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  editButtonHasBeenClicked(CurrentMeal: Meal) {
    this.clickSender.emit(CurrentMeal);
  }
  deleteButtonHasBeenClicked(CurrentMeal: Meal) {
    this.delSender.emit(CurrentMeal);
  }
  onChange(optionFromMenu) {
    this.selectedCaloriesLevel = optionFromMenu;

  }
}
