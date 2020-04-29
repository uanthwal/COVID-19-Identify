import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-visualizations',
  templateUrl: './dashboard-visualizations.component.html',
  styleUrls: ['./dashboard-visualizations.component.scss'],
})
export class DashboardVisualizationsComponent implements OnInit {
  highcharts = Highcharts;
  caseByGenderChartOptions;
  regionBarGraphOptions;
  posNegChartOptions;
  pieChartOptions;
  constructor() {}

  ngOnInit(): void {
    this.highcharts = Highcharts;
    this.createCaseByGenderChart();
    this.createPosNegChart();
    this.createRegionGraph();
  }

  createPosNegChart() {
    this.posNegChartOptions = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Positive and Negative Cases by Region',
      },
      xAxis: {
        categories: ['East', 'West', 'North', 'South'],
      },
      // yAxis: {
      //    tickInterval:70
      // } ,
      series: [
        {
          name: 'Positive',
          data: [5, 3, 4, 7],
          color: 'red',
        },
        {
          name: 'Negative',
          data: [-10, -20, -16, -18],
          color: 'green',
        },
      ],
    };
  }
  createRegionGraph() {
    this.regionBarGraphOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Cases by Region',
      },
      subtitle: {
        text: 'Source: NSHA',
      },
      xAxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of cases',
        },
      },
      tooltip: {
        headerFormat:
          '<span style = "font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
          '<td style = "padding:0"><b>{point.y:1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'East',
          data: [49, 71, 106, 129],
        },
        {
          name: 'West',
          data: [83, 78, 98, 93],
        },
        {
          name: 'North',
          data: [48, 38, 39, 44],
        },
        {
          name: 'South',
          data: [44, 33, 35, 37],
        },
      ],
    };
  }
  createCaseByGenderChart() {
    this.caseByGenderChartOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false,
      },
      title: {
        text: 'Cases by Gender',
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          type: 'pie',
          name: ' ',
          data: [
            {
              name: 'Male',
              y: 60,
              sliced: false,
              selected: false,
            },
            ['Female', 40],
          ],
        },
      ],
    };
  }
}
