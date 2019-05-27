import {Directive,HostListener} from '@angular/core';

@Directive({
    selector:'[events-grid]'
})

export class EventsGridDirective{
        constructor(){

        }

        @HostListener('click',['$event'])
        CheckUser($event:any){
            $event.preventDefault();
        }
}

@Directive({
    selector:'[buy-product]',
})

export class BuyProductDirective{
    constructor(){

    }


    @HostListener('click',['$event'])
    BuyProduct($event:any){
      //  alert($event);
    }
}




    export const EventsDirectivesCommon=[EventsGridDirective,BuyProductDirective];