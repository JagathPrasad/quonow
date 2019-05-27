import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';


@Injectable()
export class EventService {
    public service = new serviceModel();
    constructor(private http: Http) { }

    GetEventDetails(): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Get').map((res: Response) => res.json());
    }


    GetProductDetails(eventTypeId: any): Observable<any> {
        console.log('eventTypeId',eventTypeId);
        return this.http.get(this.service.httpUrl + 'Event/GetEventsTypesList/' + eventTypeId).map((res: Response) => res.json());
    }

}

