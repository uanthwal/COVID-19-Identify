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
        maxZoom: 17,
        attribution: ""
      })
    ],
    zoom: 15,
    center: L.latLng(44.641467, -63.587546)
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
