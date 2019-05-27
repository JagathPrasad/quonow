import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';

@Injectable()
export class SearchService {
    public service = new serviceModel();
    constructor(private http: Http) {

    }

    AdvanceSearch(productText: any): Observable<any> {
        let product = { usertext: productText };
        return this.http.post(this.service.httpUrl + 'Product/PostProductByName/', product, { headers: new Headers({ 'Content-Type': 'application/json' }) }).map((res: Response) => res.json());
    }
}