import{Directive, OnInit, inject} from '@angular/core';
import * as $ from 'jquery';

@Directive({
    selector: '[model-trigger]'
})

export class ModelTriggerDirective {

    constructor(){}

    ngOnInit(){
        (<any>$('#app-weatherdetail')).modal({})
    }
}