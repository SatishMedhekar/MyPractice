import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {ICurrentWeather} from '../interfaces/iweather';
import { IMenu, IMenuDetail } from '../interfaces/imenu';
import {getPhotoList, uploadWeatherImages} from '../service/customfunction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Home';
  currentTempurateStatus : ICurrentWeather = {};
  leftmenu : IMenu = {};
  menudetail : IMenuDetail[];
  private imgv:any;
  private imgv2:any;
  strimg:string;

  ngOnInit(){
    this.strimg = '../images/weather/sun.png';
    uploadWeatherImages();
      

    this.currentTempurateStatus.currentTemperature = '77';
    //this.currentTempurateStatus.currentTemperatureUrl = require("../images/weather/suncloud.png");
    this.currentTempurateStatus.currentWeatherStatus = 'Cloudy';
    this.title='Home';
 }

 changePic(){
  this.strimg = '../images/Pics/hotsun.png';
 }
}

