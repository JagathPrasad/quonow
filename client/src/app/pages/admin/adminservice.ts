import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class AdminService {
    public service = new serviceModel();
    constructor(private http: Http, private router: Router, private authService: AuthService) {

    }

    GetAdminDetails(): Observable<any> {

        return this.http.get(this.service.httpUrl + '').map((res: Response) => res.json());
    }



    GetUserDetails(): Observable<any> {
        debugger;
        return this.http.get(this.service.httpUrl + 'Admin/GetUserList').map((res: Response) => res.json());
    }

   

}