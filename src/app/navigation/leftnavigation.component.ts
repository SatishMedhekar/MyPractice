import{ Component, Input } from '@angular/core';
import{IMenu, IMenuDetail} from '../interfaces/imenu'
import{Menu} from '../interfaces/enum';

@Component({
    selector:'left-navigation',
    templateUrl:'./leftnavigation.component.html',
    styleUrls:['./navigation.css']
})

export class LeftNavigation{
    @Input() leftMenu:IMenu={};
    
    constructor(){
        console.log(this.leftMenu.menuDetail[0].name);
    }
 
 
}