import{Component, OnInit, Input} from '@angular/core';
import{IMenu} from '../../interfaces/imenu';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector:'right-navigation',
    templateUrl:'./rightnavigation.component.html',
    styleUrls:['./navigation.css']
})

export class RightNavigation implements OnInit{
private _data = new BehaviorSubject<IMenu>(<IMenu>{});
rMenu:Array<any>;

@Input() 
 set rightMenu(value){
     this._data.next(value)
 };
get rightMenu(){
    return this._data.getValue();
}

ngOnInit(){
     this._data.subscribe( x => {
        this.rMenu = this.setImagePath(this.rightMenu);
    });
}

setImagePath(rightmenu:IMenu):Array<any>{
    let lmenus: Array<any> =[];
    if(!rightmenu.menuDetail) return;
    rightmenu.menuDetail.forEach(a=>{
        let lmenu = {id: a.id, 
                    displayOrder: a.displayOrder, 
                    name: a.name,
                    imgPath: a.imagePath + a.imageFileName}
                    lmenus.push(lmenu);                    
    })
    return lmenus;
}

}