import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';

@Injectable()
export class ProfileService {
    public service = new serviceModel();
    constructor(private http: Http) {

    }

    GetProfileDetails(token: any): Observable<any> {
        return this.http.get(this.service.httpUrl + 'User/GetProfileDetails/' + token).map((res: Response) => res.json());
    }
}