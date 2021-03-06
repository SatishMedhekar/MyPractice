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
    //   this._zone.run(() =>
    //   this.monthlyCalender = this.commonFunction.getCalenderDetail()
    // )
    // console.log('In getCalenderdetail')
    // this.commonFunction.getCalenderDetail.subscribe((calender:any) =>{
    //   this.monthlyCalender = calender
    // });
    // console.log(`Value in getCalenderDetail -> ${this.monthlyCalender}`)
   
      this.commonFunction.calenderReceivedFromServer()
          .subscribe(message => {
              //   this.weather = message;
              //   this._zone.run (() =>{
              //     this.setWeeklyWeather(this.weather.weeklyWeather);
              console.log(`CalenderReceivedFromServer -> ${JSON.stringify(message)}`)
              this.monthlyCalender = <IMonthDetail>message;
          });
  
    }

  setWeeklyWeather(weeklyWeather:IWeeklyWeather[]){
    this.weeklyWeather = weeklyWeather;
  }
    
}