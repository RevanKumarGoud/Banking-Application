import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
title = 'google-maps';

  constructor() { }

  ngOnInit(): void {
    let loder =new Loader({
      apiKey:"AIzaSyDWF4eL4pGckoih6Qb-bi4pSNg2Fu4JAaI"
    })


    loder.load().then(() => {
      new google.maps.Map(<HTMLElement>document.getElementById("map"),{
        center: {lat:37.0902,lng:95.7129},
        zoom:8
      })
    })
  }

}
