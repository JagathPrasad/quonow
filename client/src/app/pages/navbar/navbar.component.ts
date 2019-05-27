import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { JWTService } from '../auth/jwt.service';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: '../navbar/navbar.html',
    encapsulation: ViewEncapsulation.None,
    providers: [JWTService]
})

export class NavbarComponent implements OnInit {
    public isAuthenticated: boolean = false;
    public userType:number=0;

    constructor(private service: JWTService, private router: Router) {
        debugger;
        if (this.service.getToken() != '' && this.service.getToken() != null) {
            this.isAuthenticated = true;
            this.userType=parseInt(this.service.getuserType());
        }
    }

    ngOnInit(){

        
    }


    LogOut(): void {
        debugger;
        this.service.deleteToken();
        this.service.deleteuserType();
        //this.router.navigate(['/login']);
        window.location.href = '/login';
    }


}