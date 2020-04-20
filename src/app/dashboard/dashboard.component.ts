import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dataList = [];
  userInfo;
  navMenuItems;
  displayProfile = false;

  constructor(private _appService: AppService, private _router: Router) {}

  ngOnInit(): void {
    this.navMenuItems = [
      { name: 'Data', selected: false },
      { name: 'Visualizations', selected: false },
      { name: 'Heat Map', selected: false },
    ];
    this.initializeUI();
    this._appService.getUserInfo({}).subscribe((data: {}) => {
      if (data['code'] == 200) {
        this.userInfo = data['data'];
        this._appService.setUserData(this.userInfo);
      }
    });
  }
  initializeUI() {
    this.navMenuItems[0]['selected'] = true;
  }

  onClickLogout() {
    this._appService.logout({}).subscribe((data: {}) => {
      if (data['code'] == 200) {
        localStorage.clear();
        this._router.navigate(['/login']);
      }
    });
  }
  onClickOption(navItem) {
    this.navMenuItems.forEach((element) => {
      if (navItem.name == element.name) element.selected = !element.selected;
      else element.selected = false;
    });
    if (navItem.name == 'Data') {
      this._router.navigate(['/dashboard/data']);
    } else if (navItem.name == 'Visualizations') {
      this._router.navigate(['/dashboard/visualization']);
    } else {
      this._router.navigate(['/dashboard/heatmap']);
    }
  }
  showProfile() {
    this.displayProfile = true;
  }
}
