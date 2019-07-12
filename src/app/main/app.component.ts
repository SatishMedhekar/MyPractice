import { Component, OnInit, AfterViewChecked, Inject, ViewEncapsulation, OnChanges, SimpleChanges, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ICurrentWeather, IWeeklyWeather, IWeather } from '../interfaces/iweather';
import { IMenu, IMenuDetail } from '../interfaces/imenu';
import { CommonFunction } from '../service/customfunction';
import { JQ_TOKEN } from '../service/jQuery.service';
import { Menu } from '../interfaces/enum';
import * as $ from 'jquery';
import { AfterContentChecked } from '../../../node_modules/@angular/core';
//import { url } from 'inspector';

import { HostListener } from '@angular/core';
import { Subscription, Subject, timer } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
import { AuthService } from '../service/AuthService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles/global.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'Home';
  currentTempurateStatus: ICurrentWeather = {};
  leftMenu: IMenu = {};
  rightMenu: IMenu = {};
  sideMenu: IMenu[] = [];
  Menu = Menu;
  weeklyWeather: IWeeklyWeather[] = [];
  toggle: boolean = true;
  fontName: string;
  errorMessage: string;
  weather: any;
  timeoutID: any;
  minutesDisplay = 0;
  secondsDisplay = 0;
  unsubscribe$: Subject<void> = new Subject();
  timerSubscription: Subscription;
  endTime = 1;

  constructor(
    private commonFunction: CommonFunction,
    private _zone: NgZone,
    private authService: AuthService,
    private router: Router) {
    this.leftMenu;
    this.rightMenu;
    this.sideMenu = <IMenu[]>[];
    this.commonFunction.uploadWeatherImages();
  }

  ngOnInit() {
    this.getMenu();
    this.getWeather();

    this.commonFunction.isToBeResetToMain.subscribe((result: boolean) => {
      // if(result)
      //   this.router.navigate(['./home']);
    })
  }

  getMenu() {
    this.commonFunction.getMenu().subscribe((menu: IMenu[] = []) => {
      this.sideMenu = menu;
      //this.updateMenuAddRouterLink();
      console.log("Navigation Menu", this.sideMenu);
      this.leftMenu = this.sideMenu.filter(a => a.menuType == this.Menu.LEFT)[0];
      this.rightMenu = this.sideMenu.filter(a => a.menuType == this.Menu.RIGHT)[0]
    });
  }

  updateMenuAddRouterLink() {
    if (this.sideMenu) {
      this.sideMenu.forEach(a => {
        a.menuDetail.forEach(b => {
          if (b.name == 'Light')
            b.routerLink = 'lightcontrol';

          b.routerLink = '';
        })
      })
    }
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
    //this.currentTempurateStatus.currentTemperatureUrl = this.requireWrapper('sun.png'); // '../images/Pics/sun.png';
    this.title = 'Home';
    //this.currentTempurateStatus.currentTemperatureUrl = this.requireWrapper('sun.png');
  }







}

