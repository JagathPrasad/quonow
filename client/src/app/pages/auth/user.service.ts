import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { JWTService } from '../auth/jwt.service';
import { User } from '../commonModels/userModel';
import { LoginService } from '../login/login.service';


@Injectable()
export class userService {
    private currentusersubject = new BehaviorSubject<User>(new User());
    public currentUser = this.currentusersubject.asObservable().distinctUntilChanged();

    debugger;
    private isAuthenticatedsubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedsubject.asObservable();


    constructor(private http: Http, private jwt: JWTService, private service: LoginService) {
        //this.populate();
    }


    populate() {
        debugger;
        if (this.jwt.getToken()) {
            this.service.CheckTokenExits().subscribe(x => {
                data => this.setAuth(x);
                err => this.purgeAuth();
            })
        } else {
            this.purgeAuth();
        }
    }

    setAuth(user: User) {
        debugger;
        this.jwt.setToken(user.token);
        this.currentusersubject.next(user);
        this.isAuthenticatedsubject.next(true);
    }


    purgeAuth() {
        debugger;
        this.jwt.deleteToken();
        this.currentusersubject.next(new User());
        this.isAuthenticatedsubject.next(false);


    }

    attemptAuth(user: User) {
        this.service.CheckUserLogin(user).subscribe(x => {
            return x;
        });
    }

    getcurrentUser(): User {
        return this.currentusersubject.value;
    }


  

 
}