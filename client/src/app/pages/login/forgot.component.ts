import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
@Component({
    selector: 'forgot',
    templateUrl: '../login/forgot.html',
    providers: [LoginService]
})

export class ForgotComponent {
    public model: any = { email: '' };
    public isCheckEmail: boolean = true;
    public IsResetPassword: boolean = false;
    constructor(private service: LoginService) {

    }

    CheckUserExist() {
        debugger;
        this.model.email = 'admin@gmail.com';
        let user = this.model;
        this.service.CheckUserExist(user).subscribe(x => {
            this.isCheckEmail = false;
            this.IsResetPassword = true;
        });
    }


    ChangePassword() {
        this.service.ChangePassword().subscribe(x => {
            //alert(x);
        })
    }
}


class User {
    public email: string;
    public token: string;
    public userType: number;
}