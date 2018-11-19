import{Component, NgZone} from '@angular/core';
import { IWeather, IWeeklyWeather } from '../../interfaces/iweather';
import { CommonFunction } from '../../service';
import { IMonthDetail } from '../../interfaces/icalender';


@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css', '../../styles/global.css']
})

export class HomeComponent{

    weeklyWeather: any[];
    weather:any;
    monthlyCalender:IMonthDetail;
    constructor(private commonFunction:CommonFunction, private _zone:NgZone){}

    ngOnInit(){
      this.getWeather();
      this.getCalenderDetail();
    }

    getWeather(){
      this.commonFunction.weatherReceivedFromServer()
        .subscribe(message => {
          this.weather = message;
          this._zone.run (() =>{
            this.setWeeklyWeather(this.weather.weeklyWeather);
          })
        });
    }
   
    getCalenderDetail(){
      this._zone.run(() =>
      this.monthlyCalender = this.commonFunction.getCalenderDetail()
    )
    }

  setWeeklyWeather(weeklyWeather:IWeeklyWeather[]){
    this.weeklyWeather = weeklyWeather;
  }
    
}