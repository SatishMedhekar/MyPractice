import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {IWeather} from '../interfaces/iweather'
import { IMenu, IMenuDetail } from '../interfaces/imenu';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'Home';
  currentTempurateStatus : IWeather = {};
  leftmenu : IMenu = {};
  menudetail : IMenuDetail[];



  ngOnInit(){
    
    this.currentTempurateStatus.currentTemperature = '77';
    //this.currentTempurateStatus.currentTemperatureUrl = require("../images/weather/suncloud.png");
    this.currentTempurateStatus.currentWeatherStatus = 'Cloudy';
    this.title='Home';

    this.leftmenu = {
      "menuType":"leftmenu",
      "menudetail": [
        {
          "id":"1",
          "name":"Light",
          "displayOrder" : 1,
          "imagePath" :    "../images/weather/",
          "imageFileName" : ""
        },
        {
          "id":"2",
          "name":"Light",
          "displayOrder" : 2,
          "imagePath" :    "../images/weather/",
          "imageFileName" : "suncloud.png"
        }
      ]
    }
  }

  ngAfterViewChecked(){
    this.leftmenu.menudetail.forEach(i => {
      
      let menuid = document.getElementById(i.id);
      if(menuid){
        var image = document.createElement("img");
        image.src = btoa(i.imagePath+i.imageFileName);
        
      }
   });
  }

}
