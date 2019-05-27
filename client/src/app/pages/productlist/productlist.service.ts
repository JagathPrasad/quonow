import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { serviceModel } from '../commonModels/serviceModel';


@Injectable()
export class ProductsService {
    public serviceurl = new serviceModel();
    constructor(private http: Http) {

    }

    GetProductsList(productId:any): Observable<any> {
        return this.http.get(this.serviceurl.httpUrl + 'Product/GetProductList/' + productId).map((res: Response) => res.json());
    }

}

