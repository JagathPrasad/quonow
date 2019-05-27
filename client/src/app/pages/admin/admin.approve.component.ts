import { Component } from '@angular/core';
import { AdminService } from '../admin/admin.service';
declare var swal: any;
@Component({
    selector: 'approve',
    templateUrl: '../admin/admin.approve.html',
    providers: [AdminService]
})

export class AdminApproveComponent {
    public userDetails;
    constructor(private service: AdminService) {

        this.GetUserDetails();
    }

    GetUserDetails(): void {

        this.service.GetUserDetails().subscribe(x => {
            this.userDetails = x;

        });

    }

    AdminApprove(userId: any): void {

        this.service.AdminApprove(userId).subscribe(x => {
            swal("Approve!", "You Approved Successfully!", "success");
            this.GetUserDetails();

        });

    }

}
