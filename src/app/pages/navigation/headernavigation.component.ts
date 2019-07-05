import { Component, Input } from '@angular/core';
import { ICurrentWeather } from '../../interfaces/iweather';
import { CommonFunction } from '../../service';
import { NgZone } from '@angular/core';


@Component({
  selector: 'header-navigation',
  templateUrl: './headernavigation.component.html',
  styleUrls: ['./navigation.css', '../../main/app.component.css']
})

export class HeaderNavigation {
  currentTempurateStatus: ICurrentWeather = {};
  @Input() title: string;
  weather: any;


  constructor(private commonFunction: CommonFunction, private _zone: NgZone) {

  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.commonFunction.weatherReceivedFromServer()
      .subscribe(message => {
        this.weather = message;
        this._zone.run(() => {
          this.setCurrentTemperature(this.weather.currentTemperature);
        })
      });
  }

  setCurrentTemperature(currentTemperature: ICurrentWeather) {
    this.currentTempurateStatus.currentTemperature = currentTemperature.currentTemperature;
    this.currentTempurateStatus.currentWeatherStatus = currentTemperature.currentWeatherStatus;
    this.currentTempurateStatus.currentTemperatureUrl = '../images/Pics/sun.png';
    this.title = 'Home';

  }


}