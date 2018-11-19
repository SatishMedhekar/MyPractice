import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import{RouterTestingModule } from "@angular/router/testing";
import { CommonFunction } from "../service";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { of, BehaviorSubject } from "rxjs";
import { Menu } from "../interfaces/enum";
import { IMenu } from "../interfaces/imenu";
import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { ICurrentWeather } from "../interfaces/iweather";
import { ConvertToDegree } from "../customePipe/convertToDegree";

describe('appcomponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let menu: IMenu[];
  let mockService : CommonFunction;

  @Component({
    selector: 'header-navigation',
    template: '<div></div>',
})

class FakeHeaderNavigation {
    @Input() currentTempurateStatus: ICurrentWeather={};
    @Input() title: string;
}

@Component({
  selector:'left-navigation',
  template:'<div></div>',
 
})

class FakeLeftNavigation {
  @Input() leftMenu:IMenu;
  lMenu:Array<any>;
}

@Component({
  selector:'right-navigation',
  template:'<div></div>',
})

class FakeRightNavigation {
private _data = new BehaviorSubject<IMenu>(<IMenu>{});
rMenu:Array<any>;
@Input() 
 set rightMenu(value){
     this._data.next(value)
 };
get rightMenu(){
    return this._data.getValue();
}
}
    beforeEach(() => {
     
      menu = [{"menuType": 0,
      "menuDetail":[
          {"id":"1", 
           "displayOrder": 0, 
           "name": "Light", 
           "imagePath": "../images/Extras/", 
           "imageFileName": "light24.ico" },
          {"id":"2", 
           "displayOrder": 1, 
           "name": "Music", 
           "imagePath": "../images/Extras/",   
           "imageFileName": "music24.ico"},
          {"id":"3", 
           "displayOrder": 2, 
           "name": "Message", 
           "imagePath": "../images/Extras/", 
           "imageFileName": "message24.ico"   }] 
      },
      {"menuType": 1, 
          "menuDetail":[{"id":"4", "displayOrder": 0, "name": "Weather", "imagePath": "../images/Extras/", "imageFileName": "temperature24.ico"   },
                      {"id": "5", "displayOrder": 1, "name": "Calendar", "imagePath": "../images/Extras/", "imageFileName": "calendar24.ico"   },
                      {"id":"6", "displayOrder": 2, "name": "Setting", "imagePath": "../images/Extras/",   "imageFileName": "settings-25-16.ico"   }]  }]
    
      mockService = jasmine.createSpyObj(['getMenu']);

      TestBed.configureTestingModule({
        imports:[RouterTestingModule ],
        declarations : [
          AppComponent,
          FakeHeaderNavigation,
          FakeLeftNavigation,
          FakeRightNavigation,
          ConvertToDegree],
        providers : [
          {provide : CommonFunction, useValue : mockService }
        ],
       // schemas : [NO_ERRORS_SCHEMA]
      })
      fixture = TestBed.createComponent(AppComponent);
    });

    it('should set menu correctly from the service', () => {
    //  mockService.getMenu.and.returnValue(of(menu))
    //   fixture.detectChanges();
    //   expect(fixture.debugElement.componentInstance.sideMenu.length).toBe(2);
    })
  
})
