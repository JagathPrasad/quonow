import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';



@Injectable()
export class DashboardService {
    public service = new serviceModel();
    constructor(private http: Http) {


    }

    GetLoginDetails(): Observable<any> {

        return this.http.get(this.service.httpUrl + 'Login/GetUserLogin').map((res: Response) => res.json());
    }


    GetProductTypes(): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Event/GetEventsList').map((res: Response) => res.json());
    }


    GetPubDetails(): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Ticket/GetPubDetails').map((res: Response) => res.json());
    }


    GetMalls(): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Mall/GetMalls').map((res: Response) => res.json());
    }

    GetArtist(): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Artist/GetArtist').map((res: Response) => res.json());
    }
}

