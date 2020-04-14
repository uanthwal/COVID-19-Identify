import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-create-new-tracker',
  templateUrl: './create-new-tracker.component.html',
  styleUrls: ['./create-new-tracker.component.scss'],
})
export class CreateNewTrackerComponent implements OnInit {
  questionsList = [];
  constructor(private _appService: AppService) {}

  ngOnInit(): void {
    this._appService.getQuestionByDay({"day":"1"}).subscribe((data: {}) => {
      if (null != data && data['code'] == 200) {
        this.questionsList = data['data'];
      } else {
        alert(data['message']);
      }
    });
  }
}
