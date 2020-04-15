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
    this._appService.getQuestionByDay({ day: '1' }).subscribe((data: {}) => {
      if (null != data && data['code'] == 200) {
        this.questionsList = data['data'];
      } else {
        alert(data['message']);
      }
    });
  }

  onClickCheckboxItem(oIndex,qIndex) {
    let option = this.questionsList[qIndex]['options'][oIndex];
    option.selected = !option.selected;
    this.questionsList[qIndex]['options'][oIndex] = option;
  }

  onClickRadioItem(oIndex,qIndex) {
    let options = this.questionsList[qIndex]['options']
    options.forEach((e,index) => {
      if(index == oIndex)
        e.selected = true;
      else
        e.selected = false;
    });
    this.questionsList[qIndex]['options'] = options;
  }

  onClickSubmit(){
    
  }

}
