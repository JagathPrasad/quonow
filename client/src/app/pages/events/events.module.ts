import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventComponent} from '../events/events.component';
import {routing} from '../events/events.routing';
import {EvenTypeComponent} from '../events/eventtype.component';

import {EventsDirectivesCommon} from '../events/events.directives';


@NgModule({
    imports:[CommonModule,routing]
    ,declarations:[EventComponent,EvenTypeComponent]    
})

export class EventsModule{

    constructor()
    {

    }
}