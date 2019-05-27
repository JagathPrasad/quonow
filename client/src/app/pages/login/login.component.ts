import { RequestOptions } from '@angular/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModel } from '../commonModels/loginModel';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { User } from '../commonModels/userModel';
import { userService } from '../auth/user.service';
import { JWTService } from '../auth/jwt.service';
//import { ImageUploadComponent } from '../shared/image.component';
declare var swal: any;

@Component({
    selector: 'login',
    templateUrl: '../login/login.html',
    styleUrls: ['../login/login.css']
    , providers: [LoginService, userService, JWTService]
})

export class LoginComponent {
    model: any = {};
    public username: string;
    public password: string;
    public stockvalue: any;


    data: any;




    constructor(private service: LoginService, private route: Router, private userservice: userService, private jwt: JWTService) {


    }

    Login(model: User): void {
        this.service.CheckUserLogin(model).subscribe(x => {
            debugger;
            if (x == false) {
                swal("Wrong Credentials", "Incorrect username or password.", "error");
            }
            else {
                this.userservice.setAuth(x);
                this.jwt.setuserType(x.userType);
                //this.route.navigate(['/index']);
                window.location.href = '/index';
            }
        })
    }

    //file upload event  
    fileChange(event) {
        debugger;
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            //headers.append('Content-Type', 'json');  
            //headers.append('Accept', 'application/json');  
            this.service.Upload(formData).subscribe(x => {
                alert('a');
            });
        }
        //  window.location.reload();
    }

}
