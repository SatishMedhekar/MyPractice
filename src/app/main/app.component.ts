import { Component, OnInit, AfterViewChecked, Inject, ViewEncapsulation, OnChanges, SimpleChanges, NgZone } from '@angular/core';
import{Router} from '@angular/router';
import {ICurrentWeather, IWeeklyWeather, IWeather} from '../interfaces/iweather';
import { IMenu, IMenuDetail } from '../interfaces/imenu';
import {CommonFunction} from '../service/customfunction';
import {JQ_TOKEN} from '../service/jQuery.service';
import{Menu} from '../interfaces/enum';
import * as $ from 'jquery';
import { AfterContentChecked } from '../../../node_modules/@angular/core';
//import { url } from 'inspector';
import { StaticInjector } from '../../../node_modules/@angular/core/src/di/injector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles/global.css'],
  encapsulation:ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'Home';
  currentTempurateStatus : ICurrentWeather = {};
  leftMenu  : IMenu = {};
  rightMenu : IMenu   = {};
  sideMenu  : IMenu[] = [];
  Menu = Menu;
  weeklyWeather : IWeeklyWeather[]=[];
  toggle    : boolean = true;
  fontName  : string;
  errorMessage:string;
  weather:any;

  constructor(private commonFunction:CommonFunction, private _zone:NgZone){
    this.leftMenu;
    this.rightMenu;
    this.sideMenu = <IMenu[]>[];
    this.commonFunction.uploadWeatherImages();
  }

  ngOnInit(){
   this.getMenu();
   this.getWeather();
  }

  getMenu(){
    this.commonFunction.getMenu().subscribe((menu:IMenu[]=[]) => {
      this.sideMenu =  menu;  
      console.log("Navigation Menu", this.sideMenu);
      this.leftMenu  = this.sideMenu.filter(a=>a.menuType == this.Menu.LEFT)[0];
      this.rightMenu = this.sideMenu.filter(a=>a.menuType == this.Menu.RIGHT)[0]
      });
      
     
  }

  getWeather(){
    this.commonFunction.weatherReceivedFromServer()
    .subscribe(message => {
      this.weather = message;
      this._zone.run (() =>{
        this.setCurrentTemperature(this.weather.currentTemperature);
      })
    });
}
  

  setCurrentTemperature(currentTemperature:ICurrentWeather){
    this.currentTempurateStatus.currentTemperature    = currentTemperature.currentTemperature;
    this.currentTempurateStatus.currentWeatherStatus  = currentTemperature.currentWeatherStatus;
    //this.currentTempurateStatus.currentTemperatureUrl = this.requireWrapper('sun.png'); // '../images/Pics/sun.png';
    this.title ='Home';
    //this.currentTempurateStatus.currentTemperatureUrl = this.requireWrapper('sun.png');
  }
 

}

