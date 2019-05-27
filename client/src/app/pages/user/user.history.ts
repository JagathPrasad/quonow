import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { serviceModel } from '../commonModels/serviceModel';


@Component({
    selector: '',
    templateUrl: '../user/user.history.html',
    providers: [UserService]
})

export class UserHistoryComponent {
    public userInvoiceDetails: any;
    public userCartDetails: any;
    public userTicketDetails: any;
    public IsTicketExist: boolean = false;
    public IsBookedEvents:boolean=false;
    public authService = new serviceModel();
    constructor(private service: UserService) {

        this.BindInvoiceDetails(this.authService.authorization);
        this.BindCartDetails(this.authService.authorization);
        this.BindTicketDetails(this.authService.authorization);
    }


    BindInvoiceDetails(token: any) {
        this.service.GetUserInvoiceList(token).subscribe(x => {
            this.IsBookedEvents=true;
            this.userInvoiceDetails = x;
        })
    }

    BindCartDetails(token: any) {
        this.service.GetUserCartList(token).subscribe(x => {
            this.userCartDetails = x;
        });
    }

    BindFavouriteList(): void {

    }

    BindTicketDetails(token: any): void {
        this.service.GetTicketDetailsByUserToken(token).subscribe(x => {
            this.IsTicketExist = true;
            this.userTicketDetails = x;
        });
    }

}
