import{Injectable} from '@angular/core';
import {IPhoto} from '../interfaces/iphoto';
import{IMenu,IMenuDetail} from '../interfaces/imenu';
import{Menu} from '../interfaces/enum';

@Injectable()

export class CommonFunction{

 getPhotoList():IPhoto[]{
    let photolist:IPhoto[];
    photolist = [
        {id:1, path:'../images/', PhotoName:'night.jpg'},
        {id:2, path:'../images/', PhotoName:'CloudyNight'},
        {id:3, path:'../images/weather/', PhotoName:'frostsuncloud.png'},
        {id:4, path:'../images/weather/', PhotoName:'nightcloud.png'},
        {id:5, path:'../images/weather/', PhotoName:'nightcloudfrost.png'},
        {id:6, path:'../images/weather/', PhotoName:'nightrain.png'},
        {id:7, path:'../images/weather/', PhotoName:'rain.png'},
        {id:8, path:'../images/weather/', PhotoName:'sun.png'},
        {id:9, path:'../images/weather/', PhotoName:'suncloud.png'},
        {id:10, path:'../images/weather/', PhotoName:'sunrain.png'},
        {id:11, path:'../images/weather/', PhotoName:'windnight.png'},
        {id:12, path:'../images/weather/', PhotoName:'frostsuncloud.png'},
        {id:13, path:'../images/Pics/', PhotoName:'0rain.png'},
        {id:14, path:'../images/Pics/', PhotoName:'5rain.png'},
        {id:15, path:'../images/Pics/', PhotoName:'blackcloud.png'},
        {id:16, path:'../images/Pics/', PhotoName:'blacklittlecloud.png'},
        {id:17, path:'../images/Pics/', PhotoName:'cloudynight.png'},
        {id:18, path:'../images/Pics/', PhotoName:'greylittlecloud.png'},
        {id:19, path:'../images/Pics/', PhotoName:'hotsun.png'},
        {id:20, path:'../images/Pics/', PhotoName:'littlecloudsun.png'},
        {id:21, path:'../images/Pics/', PhotoName:'moderatecloudsun.png'},
        {id:22, path:'../images/Pics/', PhotoName:'sunmorecloudrain.png'},
        {id:23, path:'../images/Pics/', PhotoName:'sunverylittlecloud.png'},
    ]
    return photolist;
}

 uploadWeatherImages():void{
       
        // require('../images/night.jpg')
        // require('../images/CloudyNight.jpg')
        // require('../images/weather/frostsuncloud.png')
        // require('../images/weather/nightcloud.png')
        // require('../images/weather/nightcloudfrost.png')
        // require('../images/weather/nightrain.png')
        // require('../images/weather/rain.png')
        // require('../images/weather/sun.png')
        // require('../images/weather/suncloud.png')
        // require('../images/weather/sunrain.png')
        // require('../images/weather/windnight.png')
        // require('../images/weather/frostsuncloud.png')
        // require('../images/Pics/0rain.png')
        // require('../images/Pics/5rain.png')
        // require('../images/Pics/blackcloud.png')
        // require('../images/Pics/blacklittlecloud.png')
        // require('../images/Pics/cloudynight.png')
        // require('../images/Pics/greylittlecloud.png')
        // require('../images/Pics/hotsun.png')
        // require('../images/Pics/littlecloudsun.png')
        // require('../images/Pics/moderatecloudsun.png')
        // require('../images/Pics/sunmorecloudrain.png')
        // require('../images/Pics/sunverylittlecloud.png')
}

    getMenu():IMenu[]{
        return [{menuType: Menu.LEFT,
                menuDetail:[{id:'1', displayOrder: 0, name: 'Light', imagePath: '../images/Extras/', imageFileName: 'light24.ico'   },
                            {id:'2', displayOrder: 1, name: 'Music', imagePath: '../images/Extras/', imageFileName: 'music24.ico'   },
                            {id:'3', displayOrder: 2, name: 'Message', imagePath: '../images/Extras/', imageFileName: 'message24.ico'   }]  },
                {menuType: Menu.RIGHT, 
                    menuDetail:[{id:'4', displayOrder: 0, name: 'Weather', imagePath: '../images/Extras/', imageFileName: 'temperature24.ico'   },
                                {id:'5', displayOrder: 1, name: 'Calendar', imagePath: '../images/Extras/', imageFileName: 'calendar24.ico'   },
                                {id:'6', displayOrder: 2, name: 'Setting', imagePath: '../images/Extras/', imageFileName: 'settings-25-16.ico'   }]  }]
    }
}