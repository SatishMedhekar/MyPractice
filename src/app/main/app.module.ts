import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Pipe
import { ConvertToDegree } from '../customePipe/convertToDegree';

//Components
import { AppComponent } from './app.component';
import{HeaderNavigation} from '../navigation/headernavigation.component'
import{LeftNavigation} from '../navigation/leftnavigation.component';

//service
import{CommonFunction} from '../service/customfunction';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigation,
    LeftNavigation,
    ConvertToDegree
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommonFunction],
  bootstrap: [AppComponent]
})
export class AppModule { }
