import { pubModel } from './../commonModels/pubModel';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { serviceModel } from '../commonModels/serviceModel';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { eventTypeModel, eventModel, ProductTypeModel } from '../commonModels/eventTypeModel';



@Injectable()
export class AdminService {
    public service = new serviceModel();
    constructor(private http: Http, private router: Router) {

    }

    GetAdminDetails(): Observable<any> {

        return this.http.get(this.service.httpUrl + '').map((res: Response) => res.json());
    }


    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    //     return this.authService.GetAuth();
    // }



    GetUserDetails(): Observable<any> {
        debugger;
        return this.http.get(this.service.httpUrl + 'Admin/GetUserList').map((res: Response) => res.json());
    }



    AddEventType(events: eventTypeModel): Observable<any> {
        debugger;
        let headers = this.Headers();
        return this.http.post(this.service.httpUrl + 'Event/PostAddEventType', events, { headers: headers }).map((res: Response) => res.json());

    }

    AddEvent(events: eventModel): Observable<any> {
        debugger;
        let headers = this.Headers();
        return this.http.post(this.service.httpUrl + 'Event/PostAddEvent', events, { headers: headers }).map((res: Response) => res.json());

    }

    GetEventTypes(): Observable<any> {
        debugger;
        let headers = this.Headers();
        return this.http.get(this.service.httpUrl + 'Admin/GetEventsTypesList').map((res: Response) => res.json());
    }

    GetEvents(eventTypeId: any): Observable<any> {

        let headers = this.Headers();
        return this.http.get(this.service.httpUrl + 'Admin/GetEvents/' + eventTypeId, { headers: headers }).map((res: Response) => res.json());
    }

    AddProductType(producttype: ProductTypeModel): Observable<any> {
        debugger;
        let headers = this.Headers();
        return this.http.post(this.service.httpUrl + 'Admin/AddProductType', producttype, { headers: headers }).map((res: Response) => res.json());

    }


    GetProdcutType(eventId: any): Observable<any> {
        debugger;
        let headers = this.Headers();
        return this.http.get(this.service.httpUrl + 'Admin/GetProductType/' + eventId, { headers: headers }).map((res: Response) => res.json());

    }

    GetProducts(): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Admin/GetProductList').map((res: Response) => res.json());
    }


    AdminApprove(userId: any): Observable<any> {
        let user = { Id: userId };
        return this.http.post(this.service.httpUrl + 'Admin/PostAdminApprove', user, { headers: this.Headers() }).map((res: Response) => res.json());
    }

    GetProductDetails(productId: any): Observable<any> {

        return this.http.get(this.service.httpUrl + '/Admin/GetProductDetails/' + productId).map((res: Response) => res.json());
    }
    ApproveProduct(productId: any): Observable<any> {
        var product = { Id: productId };
        return this.http.post(this.service.httpUrl + 'Admin/PostApproveProduct', product, { headers: this.Headers() }).map((res: Response) => res.json());
    }

    GetReviewsList(): Observable<any> {

        return this.http.get(this.service.httpUrl + 'Admin/GetReviewsList').map((res: Response) => res.json());

    }


    ApproveReview(Id: any, Isdeleted: boolean): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Admin/GetApproveReview/' + Id + '/' + Isdeleted).map((res: Response) => res.json());
    }

    GetUserList(): Observable<any> {

        return this.http.get(this.service.httpUrl + 'Admin/GetAllUsers').map((res: Response) => res.json());
    }

    Headers(): Headers {
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.service.authorization });
        return headers;
    }


    GetTicketDetails(): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Admin/GetTicketDetailsList').map((res: Response) => res.json());
    }

    GetBoughtTicketDetails(): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Admin/GetBoughtTicketDetails').map((res: Response) => res.json());
    }

    AddPubDetails(pub: pubModel): Observable<any> {
        return this.http.post(this.service.httpUrl + 'Admin/PostSavePub', pub).map((res: Response) => res.json());
    }


    GetCountDetails(): Observable<any> {
        return this.http.get(this.service.httpUrl + 'Admin/GetCountDetails').map((res: Response) => res.json());
    }

    PostUploadFormDate(formdata: FormData,Id): Observable<any> {
        let headers = new Headers()
        let myParams = new URLSearchParams();
        myParams.append('Id',Id);
        let options = new RequestOptions({ headers: headers, params: myParams });
        return this.http.post(this.service.httpUrl + 'Login/PostUploadFormDate', formdata, options).map((res: Response) => res.json);
    }
}