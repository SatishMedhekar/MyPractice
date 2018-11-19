import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Pipe
import { ConvertToDegree } from '../customePipe/convertToDegree';

//Components
import { AppComponent } from './app.component';
import{HeaderNavigation} from '../pages/navigation/headernavigation.component'
import{LeftNavigation} from '../pages/navigation/leftnavigation.component';
import{RightNavigation} from '../pages/navigation/rightnavigation.component';
import{HomeComponent} from '../pages/home/home.component';
import{WeatherComponent} from '../pages/weather/weather.component';
import {CalenderComponent} from '../pages/calender/calender.component'
import{WeatherDetailComponent} from '../pages/weather/weatherdetail.component';

//service
import{JQ_TOKEN, CommonFunction} from '../service/index';

//appRoutes
import{appRouter} from './route'
import { WeatherService } from '../pages/weather/service/weather.service';

 let jQuery= window['$'];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigation,
    LeftNavigation,
    RightNavigation,
    HomeComponent,
    CalenderComponent,
    WeatherComponent,
    WeatherDetailComponent,
    ConvertToDegree
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    CommonFunction, WeatherService,
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
