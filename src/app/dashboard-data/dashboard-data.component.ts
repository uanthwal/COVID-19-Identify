import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.scss'],
})
export class DashboardDataComponent implements OnInit {
  isFilterSelected;
  filterList = [];
  filterOptions = [];
  dataList = [];
  constructor(private _appService: AppService) {
    this.filterList = [
      { name: 'Age', selected: false },
      { name: 'Symptoms', selected: false },
      { name: 'Gender', selected: false },
      { name: 'Postal Code', selected: false },
    ];
  }

  ngOnInit(): void {
    this._appService.getAllData({}).subscribe((data: {}) => {
      if (data['code'] == 200) {
        this.dataList = data['data'];
      } else {
        alert(data['message']);
      }
    });
  }

  onClickFilterName(filter) {
    this.filterList.forEach((element) => {
      if (filter.name == element.name) element.selected = !element.selected;
      else element.selected = false;
    });
    this.isFilterSelected = false;
    this.filterList.forEach((element) => {
      if (element.selected) this.isFilterSelected = true;
    });
    this.filterOptions = [];
    if (filter.name == 'Age') {
    } else if (filter.name == 'Symptoms') {
      this._appService.getSymptoms({}).subscribe((data: {}) => {
        if (data['code'] == 200) {
          this.filterOptions = this.prepareFilterOptions(data['data']);
        } else {
          alert(data['message']);
        }
      });
    } else if (filter.name == 'Gender') {
      this.filterOptions = this.prepareFilterOptions(['Male', 'Female']);
    } else if (filter.name == 'Postal Code') {
    }
  }
  
  onClickFilterOption(option) {}

  prepareFilterOptions(tempList) {
    let newList = tempList.map(_ => {
      return { name: _, selected: false };
    });
    return newList;
  }
}
