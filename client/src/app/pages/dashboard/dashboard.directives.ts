import {Directive,HostListener} from '@angular/core';


@Directive({
    selector:'dashboard-grid'
})

export class DashboardDirective{

    constructor(){

    }

    @HostListener('click',['$event'])
    Todo($event:any){


    }
}