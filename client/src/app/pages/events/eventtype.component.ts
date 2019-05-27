import { serviceModel } from './../commonModels/serviceModel';
import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { EventService } from '../events/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'eventtypes',
    templateUrl: '../events/eventtype.html',
    encapsulation: ViewEncapsulation.None,
    providers: [EventService]
})

export class EvenTypeComponent {
    public eventList: any;
    public imageUrl = new serviceModel();
    constructor(private elem: ElementRef, private service: EventService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
        this.GetEventList(this.route.snapshot.params['eventId']);
    }


    GetEventList(params: any): any {
        this.service.GetProductDetails(params).subscribe(x => {
            this.eventList = x;
            for (let i = 0; i < this.eventList.length; i++) {
                this.eventList[i].url = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl.imageUrl + this.eventList[i].Id + '.jpg)');
            }

        });
    }
}
