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
import{CommonFunction} from '../service/customfunction';

//appRoutes
import{appRouter} from './route'


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
  providers: [CommonFunction],
  bootstrap: [AppComponent]
})
export class AppModule { }
