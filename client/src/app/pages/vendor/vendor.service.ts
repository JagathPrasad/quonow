import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';
import { ProductModel } from '../commonModels/eventTypeModel';


@Injectable()
export class VendorService {
    public service = new serviceModel();
    constructor(private http: Http) {


    }

    GetVendorDetails(): Observable<any> {
        return this.http.get(this.service.httpUrl + '').map((res: Response) => res.json());
    }

    GetVendorApprovalProducts(VendorId: any): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Vendor/GetUserApproval/' + VendorId).map((res: Response) => res.json());
    }

    GetVendorProductsList(VendorId: any): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Vendor/GetVendorProductsList/' + VendorId).map((res: Response) => res.json());
    }

    GetUpComingEvents(VendorId: any): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Vendor/GetUpComingEvents/' + VendorId).map((res: Response) => res.json());
    }


    SaveProduct(product: ProductModel): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.service.httpUrl + 'Vendor/PostSaveProduct', product, { headers: headers }).map((res: Response) => res.json());
    }
    PostUploadFormDate(formdata: FormData, Id): Observable<any> {
        let headers = new Headers()
        let myParams = new URLSearchParams();
        myParams.append('Id', Id);
        let options = new RequestOptions({ headers: headers, params: myParams });
        return this.http.post(this.service.httpUrl + 'Login/PostUploadFormDate', formdata, options).map((res: Response) => res.json);
    }

}