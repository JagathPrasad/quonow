import { Component } from '@angular/core';
import { AdminService } from '../admin/admin.service';
declare var swal: any;

@Component({
    selector: 'adminlist',
    templateUrl: '../admin/admin.listing.html',
    providers: [AdminService]
})

export class AdminListComponent {
    public productDetails: any;

    public userName: string;
    public price: number;
    public image: string;
    constructor(private service: AdminService) {
        this.GetProductList();
    }

    GetProductList(): void {
        this.service.GetProducts().subscribe(x => {
            this.productDetails = x;
        });
    }

    ApproveProduct(id: any): any {
        this.service.ApproveProduct(id).subscribe(x => {
            swal("Approve!", "You Approved Successfully!", "success");
            this.GetProductList();
        });

    }


    ViewProduct(id: any): void {
        debugger;
        this.service.GetProductDetails(id).subscribe(x => {
            debugger;
            this.userName = x.UserName;
            this.price = x.Price;
            this.image = x.Star;
        });

    }

}

















@Component({
    selector: 'users',
    templateUrl: '../admin/adminuserlist.html',
    providers: [AdminService]
})

export class AdminUserListComponent {
    public userList: any;
    constructor(private service: AdminService) {

        this.GetUserList();

    }

    GetUserList(): void {
        this.service.GetUserList().subscribe(x => {
            this.userList = x;
        })
    }

}

