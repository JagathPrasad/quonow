import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';


@Injectable()
export class UserService {
    public service = new serviceModel();

    constructor(private http: Http) {


    }

    GetUserInvoiceList(token: any): Observable<any> {

        return this.http.get(this.service.httpUrl + 'User/GetUserInvoiceList/' + token).map((res: Response) => res.json());

    }

    GetUserInvoice(bookingId: any): Observable<any> {
        return this.http.get(this.service.httpUrl + 'User/GetUserInvoice/' + bookingId).map((res: Response) => res.json());

    }

    GetUserCartList(token: any): Observable<any> {

        return this.http.get(this.service.httpUrl + 'User/GetUserCartList/' + token).map((res: Response) => res.json());
    }

    GetTicketDetailsByUserToken(userId: any): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Ticket/GetTicketDetailsById/' + userId).map((res: Response) => res.json());
    }

}