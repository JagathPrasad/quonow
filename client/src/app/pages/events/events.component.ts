import { Component, Directive, OnInit } from '@angular/core';
import { EvenTypeComponent } from '../events/eventtype.component';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'events',
    templateUrl: '../events/events.html'

})

export class EventComponent implements OnInit {

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {


    }

}


