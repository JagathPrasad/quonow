import { buyModel } from './../commonModels/buyModel';
import { serviceModel } from './../commonModels/serviceModel';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketService {
    public service = new serviceModel();
    constructor(private http: Http) {

    }



    GetPubDetails(pubId: any): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Ticket/GetPubDetailsById/' + pubId).map((res: Response) => res.json());
    }


    TicketPayment(customer: buyModel): Observable<any> {
        return this.http.post(this.service.httpUrl + 'Ticket/PostTicketPayment', customer).map((res: Response) => res.json());
    }
}