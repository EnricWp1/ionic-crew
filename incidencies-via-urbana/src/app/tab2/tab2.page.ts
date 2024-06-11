import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  newMap: GoogleMap | undefined;
  mapRef = document.getElementById('map');

  constructor() {}

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    let coordinates = await Geolocation.getCurrentPosition();

    this.mapRef = document.getElementById('map');
    if (this.mapRef) {
      this.newMap = await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapRef,
        apiKey: environment.apiKey,
        config: {
          center: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude,
          },
          zoom: 17,
        },
      });
    }
  }
}
