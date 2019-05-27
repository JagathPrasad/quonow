import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { RegisterModel } from '../commonModels/loginModel';
import { serviceModel } from '../commonModels/serviceModel';


@Injectable()
export class RegistrationService {
    public service = new serviceModel();
    constructor(private http: Http) {

    }

    RegisterUser(values: RegisterModel): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.service.httpUrl + 'Login/PostRegistration', values, { headers: headers }).map((res: Response) => res.json());

    }

}