import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { serviceModel } from '../commonModels/serviceModel';



@Injectable()
export class ProductsService {
    public serviceModel = new serviceModel();
    constructor(private http: Http) {


    }

    BindProducts(productTypeId: any): Observable<any> {
        debugger;
        return this.http.get(this.serviceModel.httpUrl + 'Product/GetProductsTypeList/' + productTypeId).map((res: Response) => res.json());
    }

} 