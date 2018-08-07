import{Route, Routes} from '@angular/router';
import{HomeComponent} from '../pages/home/home.component';
import{WeatherDetailComponent} from '../pages/weather/weatherdetail.component';

export const appRouter:Routes = [
{path:'home', component: HomeComponent},
{path: '', redirectTo:'/home', pathMatch:'full'},
{path:'weatherdetail', component:WeatherDetailComponent}
]