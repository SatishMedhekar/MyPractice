import { Component, OnInit, AfterViewChecked, Inject } from '@angular/core';
import {ICurrentWeather} from '../interfaces/iweather';
import { IMenu, IMenuDetail } from '../interfaces/imenu';
import {CommonFunction} from '../service/customfunction';
import {JQ_TOKEN} from '../service/jQuery.service';
import{Menu} from '../interfaces/enum';
import * as $ from 'jquery';


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
  toggle:boolean = true;

  constructor(private commonFunction:CommonFunction,
             @Inject(JQ_TOKEN) private $ : any){}

  ngOnInit(){
    this.commonFunction.uploadWeatherImages();
    this.leftMenu = this.commonFunction.getMenu().filter(a=>a.menuType == Menu.LEFT)[0];      
    this.rightMenu = this.commonFunction.getMenu().filter(a=>a.menuType == Menu.RIGHT)[0];
    
    this.currentTempurateStatus.currentTemperature = '77';
    this.currentTempurateStatus.currentWeatherStatus = 'Cloudy';
    this.currentTempurateStatus.currentTemperatureUrl = '../images/weather/sun.png';
    this.title='Home';

    // $(window).click(function () {
    //   //alert('Starting change');

    //   var divs = document.getElementsByTagName("div");
    //   for(var i = 0; i < divs.length; i++){
    //     //do something to each div like
    //     //let style = window.getComputedStyle(divs[i]);
    //     divs[i].style.fontFamily='AbrilFatface'
    //  }
        
      
    //     //alert($(this).val());
    //     //$('.changeMe').css("font-family", 'AbrilFatface');
    
    

    
    //   });
  }

    
 

toggleFont(){
  this.toggle = !this.toggle;
  let myFont:string;
  this.toggle ? myFont = 'Ciutadella' : 'AbrilFatface';
  var divs = document.getElementsByTagName("div");
      for(var i = 0; i < divs.length; i++){
        //do something to each div like
        //let style = window.getComputedStyle(divs[i]);
        divs[i].style.fontFamily=myFont;
     }
}


}

