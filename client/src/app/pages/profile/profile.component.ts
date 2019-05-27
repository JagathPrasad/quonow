import { Component } from '@angular/core';
import { ProfileService } from '../profile/profile.service';
import { JWTService } from '../auth/jwt.service';

@Component({
    selector: 'profile',
    templateUrl: '../profile/profile.html',
    styleUrls: ['../profile/profile.css'],
    providers: [ProfileService, JWTService]
})

export class ProfileComponent {
    public userDetails: any;
    constructor(private service: ProfileService, private jwt: JWTService) {
        this.GetProfileDetails(this.jwt.getToken());
    }

    GetProfileDetails(token: any): void {
        this.service.GetProfileDetails(token).subscribe(x => {
            this.userDetails = x;
            console.log(x);
        });
    }
}

