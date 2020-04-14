import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-tracker',
  templateUrl: './create-new-tracker.component.html',
  styleUrls: ['./create-new-tracker.component.scss'],
})
export class CreateNewTrackerComponent implements OnInit {
  questionsList = [];
  constructor() {}

  ngOnInit(): void {
    this.questionsList = [
      {
        day: 1,
        options: ["Fever","Running Nose", "Vomiting"],
        question: 'Which of the following symptoms?',
        type: 'M',
      },{
        day: 1,
        options: ["ABC","PQR", "XYZ"],
        question: 'Which of the following symptoms?',
        type: 'M',
      },{
        day: 1,
        options: ["Y","N"],
        question: 'Are you vegetarian?',
        type: 'S',
      },
    ];
  }
}
