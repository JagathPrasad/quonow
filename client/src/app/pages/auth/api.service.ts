import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { JWTService } from '../auth/jwt.service';

import { serviceModel } from '../commonModels/serviceModel';
import { User } from '../commonModels/userModel';


@Injectable()
export class ApiService {

    public serviceurl = new serviceModel();
    constructor(private http: Http, private jwt: JWTService) {


    }

    // private setHeaders(): Headers {
    //     let headersconfig =
    //         {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         };
    //     if (this.jwt.getToken()) {
    //         headersconfig['Authorization'] = 'Token' + this.jwt.getToken();
    //     }
    //     return new Headers(headersconfig);
    // }
    // private formatErrors(error:any){
    //     return  Observable.throw(error.json());
    // }


    CheckTokenExits(): Observable<any> {
        return this.http.get(this.serviceurl.httpUrl + 'User/CheckUserToken').map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json()));
    }

    CheckUserLogin(login: User): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.serviceurl.httpUrl + 'User/CheckUserLogin', login, { headers: headers }).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json()));
    }

}

