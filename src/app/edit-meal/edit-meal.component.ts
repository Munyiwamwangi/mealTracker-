import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})

export class EditMealComponent implements OnInit {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  DoneClicked() {
    this.doneClickedSender.emit();
  }

}
