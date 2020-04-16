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
  constructor(private _router: Router, private _appService: AppService) {}

  ngOnInit(): void {
    this._appService
      .getUserHealthTracker({ userId: '1' })
      .subscribe((data: {}) => {
        if (data['code'] == 200) {
          this.hasActiveHT = true;
          this.healthTrackerData = data['data'];
          this.healthTrackerData.days = data['data']['days'].join(', ');
          this.healthTrackerCount = 1;
        }
      });
  }

  onClickCreateNewTracker() {
    this._router.navigate(['/create-new-tracker']);
  }
}
