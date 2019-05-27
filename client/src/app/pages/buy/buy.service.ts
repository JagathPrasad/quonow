import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { buyModel } from '../commonModels/buyModel';
import { serviceModel } from '../commonModels/serviceModel';

@Injectable()
export class BuyService {
    public serviceUrl = new serviceModel();

    constructor(private http: Http) {

    }

    Purchase(customer: buyModel): Observable<any> {
        debugger;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.serviceUrl.httpUrl + 'Payment/PostMakePayment', customer, { headers: headers }).map((res: Response) => res.json());
    }


    AddtoCart(productId: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let usertoken = this.serviceUrl.authorization;
        let user: any = {};
        user.productId = productId;
        user.userToken = usertoken;
        return this.http.post(this.serviceUrl.httpUrl + 'User/PostAddToCart', user, { headers: headers }).map((res: Response) => res.json());
    }


    BindProductDescription(productId: any): Observable<any> {
        return this.http.get(this.serviceUrl.httpUrl + 'Product/GetProductDescription/' + productId).map((res: Response) => res.json());
    }


    BindComments(productId: any): Observable<any> {
        return this.http.get(this.serviceUrl.httpUrl + 'Product/GetProductComments/' + productId).map((res: Response) => res.json());
    }


    PostComment(comments: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.serviceUrl.httpUrl + 'User/PostComment', comments, { headers: headers }).map((res: Response) => res.json());
    }


    SavePostPurchaseKart(multiple: any): Observable<any> {
        return this.http.post(this.serviceUrl.httpUrl + '', multiple).map((res: Response) => res.json());
    }
} 