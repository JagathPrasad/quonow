import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';


@Injectable()
export class LoginFGService {
    public service = new serviceModel();


    constructor(private http: Http) {

    }


    LoginUsingFG(user: any): Observable<any> {
        return this.http.post(this.service.httpUrl+'Login/PostLoginFG', user).map((res: Response) => res.json());
    }

}