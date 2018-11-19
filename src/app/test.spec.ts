import{AppComponent} from './main/app.component';
import{HomeComponent} from './pages/home/home.component'
import{HeaderNavigation} from './pages/navigation/headernavigation.component'
import{LeftNavigation} from './pages/navigation/leftnavigation.component'
import{RightNavigation} from './pages/navigation/rightnavigation.component'
import{WeatherDetailComponent} from './pages/weather/weatherdetail.component';
import {RouterTestingModule} from '@angular/router/testing'
import { TestBed } from '@angular/core/testing';
import{Route, Routes, Router, RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import{appRouter} from './main/route';

describe('first test', () =>{
    const routes: Routes = [
        {path:'home', component: HomeComponent},
{path: '', redirectTo:'/home', pathMatch:'full'},
{path:'weatherdetail', component:WeatherDetailComponent}
    ]
beforeEach(async()=>{
    TestBed.configureTestingModule({
        declarations:[
            AppComponent,
            HomeComponent,
            HeaderNavigation,
            LeftNavigation,
            RightNavigation
        ],
        imports:[
            RouterTestingModule.withRoutes([
                {path:'', component:AppComponent}
            ]), FormsModule, LeftNavigation, RightNavigation, AppComponent, WeatherDetailComponent
        ]
    });
})
it('should be true', () => {
    expect(true).toBe(true);
})
})

// describe('first test', () =>{
// it('should be true', () =>{
// expect(true).toBe(true);
// })
// })
