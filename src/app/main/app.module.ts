import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Pipe
import { ConvertToDegree } from '../customePipe/convertToDegree';

//Components
import { AppComponent } from './app.component';
import { HeaderNavigation } from '../pages/navigation/headernavigation.component'
import { LeftNavigation } from '../pages/navigation/leftnavigation.component';
import { RightNavigation } from '../pages/navigation/rightnavigation.component';
import { HomeComponent } from '../pages/home/home.component';
import { WeatherComponent } from '../pages/weather/weather.component';
import { CalenderComponent } from '../pages/calender/calender.component';
import { WeatherDetailComponent } from '../pages/weather/weatherdetail.component';

//service
import { JQ_TOKEN, CommonFunction } from '../service/index';

//appRoutes
import { appRouter } from './route'
import { WeatherService } from '../pages/weather/service/weather.service';
import { LightMainComponent } from '../pages/LightControl/lightmain/lightmain.component';
import { LightswitchComponent } from '../pages/LightControl/lightswitch/lightswitch.component';
import { LightdimmerComponent } from '../pages/LightControl/lightdimmer/lightdimmer.component';
import { Firstfloorzone1Component } from '../pages/LightControl/firstfloorzone1/firstfloorzone1.component'
import { AuthService } from '../service/AuthService';

import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let jQuery = window['$'];

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
    ConvertToDegree,
    LightMainComponent,
    LightswitchComponent,
    Firstfloorzone1Component,
    LightdimmerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    CommonFunction, WeatherService, AuthService,
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
