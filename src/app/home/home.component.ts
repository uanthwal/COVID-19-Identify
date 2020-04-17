import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hasActiveHT = false;
  healthTrackerData;
  healthTrackerCount = 0;
  daysCompleted = [];
  daysMissed = [];
  constructor(private _router: Router, private _appService: AppService) {}

  ngOnInit(): void {
    this._appService
      .getUserHealthTracker({ userId: '1' })
      .subscribe((data: {}) => {
        if (data['code'] == 200) {
          this.hasActiveHT = true;
          this.healthTrackerData = data['data'];
          this.healthTrackerCount = 1;
          this.initializeTrackerDays();
        }
      });
  }

  onClickCreateNewTracker() {
    this._router.navigate(['/create-new-tracker']);
  }

  onClickEditIcon() {
    this._router.navigate(['/update-tracker']);
  }

  initializeTrackerDays() {
    this.daysCompleted = [];
    this.daysMissed = [];
    this.daysCompleted = this.healthTrackerData.days;
    let numberOfDaysTrackerCreated = this.healthTrackerData.tracker_days;
    for (let i = 1; i < 15; i++) {
      if (
        i <= numberOfDaysTrackerCreated &&
        this.daysCompleted.indexOf('' + i) == -1
      )
        this.daysMissed.push('' + i);
    }
  }

  isDayInList(day) {
    let index = -1;
    index = this.daysCompleted.indexOf(day);
    if (index == -1) {
      if (this.daysMissed.indexOf('' + day) != -1) return 'red';
      return 'gray';
    } else return 'green';
  }
}
