import { IMenu } from "../interfaces/imenu";
import { CommonFunction } from "./customfunction";
import { HttpClient, HttpEvent, HttpEventType } from "@angular/common/http";
import {TestBed, getTestBed, inject} from "@angular/core/testing";
import{HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";


describe('Customfunction-Integration', () => {
    let injector : TestBed;
    let httpMock : HttpTestingController;
    let service : CommonFunction
    let httpClient : HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports : [HttpClientTestingModule],
            providers : [CommonFunction]
        })
        injector = getTestBed();
        service = injector.get(CommonFunction)
        httpMock = injector.get(HttpTestingController);
    })

    afterEach(() => {
        httpMock.verify();
    })

    it('should get menu', () =>{
        inject(
            [HttpTestingController, CommonFunction],
            (httpMock : HttpTestingController, service : CommonFunction) => {
                const menu = [{"menuType": 0,
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
            
                service.getMenu().subscribe((result) => {
                    expect(result.length).toBe(1000);
                    },
                    (error) => {
                        expect(true).toBeFalsy();
                    }
                )
            });
          }
        )
    });
