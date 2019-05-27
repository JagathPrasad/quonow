import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { LoginModel } from '../commonModels/loginModel';
import { serviceModel } from '../commonModels/serviceModel';
import { User } from '../commonModels/userModel';


@Injectable()
export class LoginService {
    public serviceurl = new serviceModel();
    constructor(private http: Http) {
        //this.CheckTokenExits();
    }

    CheckUser(login: LoginModel): Observable<any> {
        console.log('ser', login);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceurl.httpUrl + 'Login/PostUserLogin', login, { headers: headers }).map((res: Response) => res.json());

    }

    CheckTokenExits(): Observable<any> {
        return this.http.get(this.serviceurl.httpUrl + 'Login/GetUserToken').map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json()));
    }

    CheckUserLogin(login: User): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.serviceurl.httpUrl + 'Login/PostUserLogin', login, { headers: headers }).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json()));
    }

    CheckUserExist(login: any): Observable<any> {
        let params = '';
        let options = new RequestOptions({
            search: new URLSearchParams('email=' + login.email + '')
        });

        return this.http.get(this.serviceurl.httpUrl + 'Login/GetUserExist', options).map((res: Response) => res.json());
    }

    ChangePassword(): Observable<any> {
        let params = '';
        let options = new RequestOptions({
            search: new URLSearchParams('password=' + 12345 + '&email=jjkk'),
        });
        return this.http.get(this.serviceurl.httpUrl + 'Login/GetChangePassword', options).map((res: Response) => res.json());
    }

    Upload(formDate: FormData): Observable<any> {
        debugger;
        
        let headers = new Headers()
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceurl.httpUrl + 'Login/PostUploadJsonFile', formDate, options)
            .map(res => res.json()).catch(error => Observable.throw(error));

    }

}