import{ Component, Input, OnInit } from '@angular/core';
import{IMenu, IMenuDetail} from '../../interfaces/imenu'
import{Menu} from '../../interfaces/enum';

@Component({
    selector:'left-navigation',
    templateUrl:'./leftnavigation.component.html',
    styleUrls:['./navigation.css']
})

export class LeftNavigation implements OnInit{
    @Input() leftMenu:IMenu={};
    lMenu:Array<any>;
    
   
    constructor(){}
 
    ngOnInit(){
       this.lMenu= this.setImagePath();
    }
    
    setImagePath():Array<any>{
        let lmenus: Array<any> =[];

        this.leftMenu.menuDetail.forEach(a=>{
            let lmenu = {id: a.id, 
                        displayOrder: a.displayOrder, 
                        name: a.name,
                        imgPath: a.imagePath + a.imageFileName}
                lmenus.push(lmenu);                    
        })
        return lmenus;
    }
    
}