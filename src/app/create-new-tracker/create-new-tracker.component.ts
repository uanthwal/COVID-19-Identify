import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-new-tracker',
  templateUrl: './create-new-tracker.component.html',
  styleUrls: ['./create-new-tracker.component.scss'],
})
export class CreateNewTrackerComponent implements OnInit {
  questionsList = [];
  additionalComments;
  day = 1;
  newTracker;
  responseSubmitted;
  constructor(
    private _appService: AppService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this._route.queryParams.subscribe((params) => {
      this.day = params['d'];
      this.newTracker = params['n'];
      if (this.day == undefined || this.newTracker == undefined) {
        this._router.navigate(['/home']);
        return;
      }
    });
  }

  ngOnInit(): void {
    this.responseSubmitted = false;
    this._appService
      .getQuestionByDay({ day: this.day, userId: this._appService.getUserId() })
      .subscribe((data: {}) => {
        if (null != data && data['code'] == 200) {
          this.questionsList = data['data'];
        } else {
          this.responseSubmitted = true;
        }
      });
  }

  onClickCheckboxItem(oIndex, qIndex) {
    let option = this.questionsList[qIndex]['options'][oIndex];
    option.selected = !option.selected;
    this.questionsList[qIndex]['options'][oIndex] = option;
  }

  onClickRadioItem(oIndex, qIndex) {
    let options = this.questionsList[qIndex]['options'];
    options.forEach((e, index) => {
      if (index == oIndex) e.selected = true;
      else e.selected = false;
    });
    this.questionsList[qIndex]['options'] = options;
  }

  onClickSubmit() {
    let questionAndAnswersInfo = [];
    this.questionsList.forEach((question) => {
      let tempQAObj = JSON.parse(JSON.stringify(question));
      let options = question.options;
      let answers = [];
      options.forEach((option) => {
        if (option.selected) {
          answers.push(option.name);
        }
      });
      delete tempQAObj['options'];
      if (question.q_type == 'O') {
        let answerString = this.additionalComments;
        tempQAObj['answer'] = answerString;
      } else {
        let answerString = answers.join(',');
        tempQAObj['answer'] = answerString;
      }
      questionAndAnswersInfo.push(tempQAObj);
    });
    let payload = {
      userId: this._appService.getUserId(),
      questionAndAnswersInfo: questionAndAnswersInfo,
    };

    if (this.newTracker == '0') {
      this._appService.saveDataForDay(payload).subscribe((data: {}) => {
        if (null != data && data['code'] == 200) {
          alert(data['message']);
          this._router.navigate(['/home']);
        } else {
          alert(data['message']);
        }
      });
    } else {
      this._appService.createNewTracker(payload).subscribe((data: {}) => {
        if (null != data && data['code'] == 200) {
          alert(data['message']);
          this._router.navigate(['/home']);
        } else {
          alert(data['message']);
        }
      });
    }
  }
}
