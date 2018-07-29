import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {ICurrentWeather} from '../interfaces/iweather';
import { IMenu, IMenuDetail } from '../interfaces/imenu';
import {CommonFunction} from '../service/customfunction';
import{Menu} from '../interfaces/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Home';
  currentTempurateStatus : ICurrentWeather = {};
  leftMenu : IMenu={};
  rightMenu : IMenu={};


  constructor(private commonFunction:CommonFunction){}

  ngOnInit(){
    this.commonFunction.uploadWeatherImages();
    this.leftMenu = this.commonFunction.getMenu().filter(a=>a.menuType == Menu.LEFT)[0];      
    this.rightMenu = this.commonFunction.getMenu().filter(a=>a.menuType == Menu.RIGHT)[0];
    
    this.currentTempurateStatus.currentTemperature = '77';
    this.currentTempurateStatus.currentWeatherStatus = 'Cloudy';
    this.currentTempurateStatus.currentTemperatureUrl = '../images/weather/sun.png';
    this.title='Home';
 }


}

