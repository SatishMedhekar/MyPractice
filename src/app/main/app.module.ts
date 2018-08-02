import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Pipe
import { ConvertToDegree } from '../customePipe/convertToDegree';

//Components
import { AppComponent } from './app.component';
import{HeaderNavigation} from '../pages/navigation/headernavigation.component'
import{LeftNavigation} from '../pages/navigation/leftnavigation.component';
import{RightNavigation} from '../pages/navigation/rightnavigation.component';
import{HomeComponent} from '../pages/home/home.component';

//service
import{JQ_TOKEN, CommonFunction} from '../service/index';

//appRoutes
import{appRouter} from './route'

 let jQuery= window['$'];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigation,
    LeftNavigation,
    RightNavigation,
    HomeComponent,
    ConvertToDegree
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    CommonFunction,
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
