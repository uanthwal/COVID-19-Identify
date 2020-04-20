import { Component, OnInit } from '@angular/core';
import "leaflet";
declare let L;
import 'leaflet.heat/dist/leaflet-heat.js'
import { addressPoints } from './test.data';

@Component({
  selector: 'app-dashboard-heatmap',
  templateUrl: './dashboard-heatmap.component.html',
  styleUrls: ['./dashboard-heatmap.component.scss']
})
export class DashboardHeatmapComponent implements OnInit {
  heatMap;
  data;
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 12,
    center: L.latLng(-37.87, 175.475)
  };
  constructor() { 
  }

  ngOnInit(): void {
    this.data = [];
  }

  onMapReady(map) {
    let newAddressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });
    const heat = L.heatLayer(newAddressPoints).addTo(map);
}
}
