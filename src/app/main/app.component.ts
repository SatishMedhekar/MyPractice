import { Component, OnInit, AfterViewChecked, Inject, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import{Router} from '@angular/router';
import {ICurrentWeather} from '../interfaces/iweather';
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

export class AppComponent implements OnInit, AfterContentChecked {
  title = 'Home';
  currentTempurateStatus : ICurrentWeather = {};
  leftMenu  : IMenu = {};
  rightMenu : IMenu = {};
  sideMenu  : IMenu[] = [];
  Menu = Menu;
  toggle    : boolean = true;
  fontName  : string;
  errorMessage:string;

  constructor(private commonFunction:CommonFunction,
              private router: Router,
             @Inject(JQ_TOKEN) private $ : any){
               this.leftMenu;
               this.rightMenu;
               this.sideMenu = <IMenu[]>[];
             }

  ngOnInit(){
    this.commonFunction.uploadWeatherImages();
    //this.setNavigationMenu();

    this.commonFunction.getMenu().subscribe((menu:IMenu[]=[]) => {
      this.sideMenu=[];
      this.sideMenu =  menu;  
      console.log("Navigation Menu", this.sideMenu);
      
    this.leftMenu = this.sideMenu.filter(a=>a.menuType == this.Menu.RIGHT)[0];
    this.leftMenu.menuDetail[0].id ='0';

    //this.rightMenu = this.sideMenu.filter(a=>a.menuType == this.Menu.RIGHT)[0];
    
    });

    
    this.currentTempurateStatus.currentTemperature    = '77';
    this.currentTempurateStatus.currentWeatherStatus  = 'Cloudy';
    this.currentTempurateStatus.currentTemperatureUrl = '../images/weather/sun.png';
    this.title ='Home';

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

  setNavigationMenu(){
    //this.sideMenu = <IMenu[]>[];
    var x;
    this.commonFunction.getMenu().subscribe((menu:IMenu[]=[]) => {
      this.sideMenu=[];
    x=menu[0];
      this.sideMenu =  menu;  
   
    //this.leftMenu = menu[0];
    //this.rightMenu = this.sideMenu.filter(a=>a.menuType == this.Menu.RIGHT)[0];
    
    });


    
  }

  ngAfterContentInit(){
    console.log(`ngAfterContentInit => ${this.router.url}`);
  }

 ngAfterContentChecked(){
   console.log(`ngAfterContentChecked => ${this.router.url}`);
   //$(".text").css('font-family', this.fontName);
 }   
 
 ngAfterViewInit(){
   console.log('ngAfterViewInit')
   $(".text").css('font-family', this.fontName);
 }

toggleFont(){
  this.toggle = !this.toggle;
  let myFont:string;
  // this.toggle ? myFont = 'Ciutadella' : 'AbrilFatface';
  // var divs = document.getElementsByTagName("div");
  //     for(var i = 0; i < divs.length; i++){
  //         divs[i].style.fontFamily=myFont;
  //    }
 this.fontName = 'AbrilFatface';
  var original = $(".text");
      //original.addClass("abr")
      //original.replaceAll("text abr")
      //$(".abr").addClass('abr');

    $(".text").css('font-family', this.fontName);
  
  }
  

}

