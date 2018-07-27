import{Component, Input} from '@angular/core';
import{ ICurrentWeather } from '../interfaces/iweather';


@Component({
    selector: 'header-navigation',
    templateUrl: './headernavigation.component.html',
    styleUrls: ['./navigation.css']
})

export class HeaderNavigation {
    @Input() currentTempurateStatus: ICurrentWeather={};
    @Input() title: string;

}