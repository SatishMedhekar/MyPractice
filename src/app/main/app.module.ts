import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ConvertToDegree } from '../customePipe/convertToDegree';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToDegree
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
