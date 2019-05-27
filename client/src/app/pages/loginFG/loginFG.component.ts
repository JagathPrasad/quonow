import { userService } from './../auth/user.service';
import { JWTService } from './../auth/jwt.service';
import { Component } from '@angular/core';
import { LoginFGService } from '../loginFG/loginFG.service';
@Component({
    selector: 'loginFG',
    templateUrl: '../loginFG/loginFG.html',
    providers: [LoginFGService, userService, JWTService]
})

export class LoginFGComponent {
    public user: any = {};
    constructor(private service: LoginFGService, private userservice: userService, private jwt: JWTService) {

    }

    Login(model): void {
        debugger;
        this.service.LoginUsingFG(model).subscribe(x => {
            if (x == false) {

            } else {
                this.userservice.setAuth(x);
                this.jwt.setuserType(x.userType);
                window.location.href = '/index';
            }
        });
    }
}