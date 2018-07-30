import{Component, OnInit, Input} from '@angular/core';
import{IMenu} from '../../interfaces/imenu';

@Component({
    selector:'right-navigation',
    templateUrl:'./rightnavigation.component.html',
    styleUrls:['./navigation.css']
})

export class RightNavigation implements OnInit{
@Input() rightMenu:IMenu={};
rMenu:Array<any>;

ngOnInit(){
    this.rMenu = this.setImagePath();
}

setImagePath():Array<any>{
    let lmenus: Array<any> =[];

    this.rightMenu.menuDetail.forEach(a=>{
        let lmenu = {id: a.id, 
                    displayOrder: a.displayOrder, 
                    name: a.name,
                    imgPath: a.imagePath + a.imageFileName}
            lmenus.push(lmenu);                    
    })
    return lmenus;
}
}