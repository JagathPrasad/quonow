import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { JWTService } from '../auth/jwt.service';
import { userService } from '../auth/user.service';


@Injectable()
export class AuthService implements CanActivate {

    constructor(private http: Http, private jwt: JWTService, private service: userService, private route: Router) {
    }
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        debugger;
        console.log('auth', this.jwt.isAuthorized);
        if (this.jwt.isAuthorized) {
            return true;
        } else {
            
            this.route.navigate(['/login']);
            return false;
        }

    }

    //  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     if (this.authService.role === 'Admin') {
    //         return true;
    //       } else {
    //         this.router.navigate(['/role-not-authorized']);
    //         return false;
    //     }
    //   }

    // GetAuth(): Observable<any> {
    //     let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.jwt.getToken() });
    //     return this.http.get('', { headers: headers }).map((res: Response) => res.json());
    // }



}



