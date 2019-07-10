import { Route, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { WeatherDetailComponent } from '../pages/weather/weatherdetail.component';
import { CalenderComponent } from '../pages/calender/calender.component';
import { LightMainComponent } from '../pages/LightControl/lightmain/lightmain.component';
import { LightswitchComponent } from '../pages/LightControl/lightswitch/lightswitch.component';

export const appRouter: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'weatherdetail', component: WeatherDetailComponent },
    { path: 'lightcontrol', component: LightMainComponent },
    { path: 'lightswitch', component: LightswitchComponent }
]