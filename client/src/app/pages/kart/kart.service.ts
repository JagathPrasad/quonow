import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';



@Injectable()
export class KartService {
    public service = new serviceModel();
    constructor(private http: Http) {

    }


    GetKartProducts(token: any): Observable<any> {

        return this.http.get(this.service.httpUrl + 'User/GetKartProducts/' + token).map((res: Response) => res.json());

    }


    RemoveFromKart(productId: any, token: any): Observable<any> {
        debugger;
        return this.http.get(this.service.httpUrl + 'User/GetKartRemoveProduct/' + productId + '/' + token).map((res: Response) => res.json());
    }


    Purchase(purchase: any): Observable<any> {
        debugger;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.service.httpUrl + 'Payment/PostMultiplePayment', purchase, { headers: headers }).map((res: Response) => res.json());

    }
}