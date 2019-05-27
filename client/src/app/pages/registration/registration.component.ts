import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { RegisterModel } from '../commonModels/loginModel';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';


@Component({
    selector: 'registration',
    templateUrl: '../registration/registration.html',
    providers: [RegistrationService]
})

export class RegistrationComponent implements OnInit {

    public user: any = {};
    public userType: number;
    //@Input() display: boolean;
    constructor(private service: RegistrationService, private router: Router, private activedRoute: ActivatedRoute) {

        this.userType = this.activedRoute.snapshot.params['profile'] == "user" ? 3 : 2;
        console.log('userType', this.userType);
        this.user.UserTypeId = this.userType;
       // this.display = false;
        //this.userType = location.href.indexOf('user') ? 3 : 2;
    }

    ngOnInit() {
        // alert(this.activedRoute.snapshot.params['profile']);
    }


    Registration(model: RegisterModel): void {
        debugger;
        model.IsValidated = true;
        model.IsActive = true;
        model.IsDeleted = false;
        this.service.RegisterUser(model).subscribe(x => {

            this.router.navigate(['/login']);

        })

    }

}