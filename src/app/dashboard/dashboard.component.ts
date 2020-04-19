import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataList = [];
  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    // make an api request 
    // you will get response
    //
    this.dataList = [{name: 'First Patient', age:'54 yrs', gender:'Male'},
    {name: 'Second Patient', age:'44 yrs', gender:'Male'},
    {name: 'Third Patient', age:'34 yrs', gender:'Female'},
    {name: 'Fourth Patient', age:'24 yrs', gender:'Male'}];

    this._appService.getAllData({}).subscribe((data: {}) => {
      if (data['code'] == 200) {
        this.dataList = data['data'];
      } else {
        alert(data['message']);
      }
    });
  }

}
