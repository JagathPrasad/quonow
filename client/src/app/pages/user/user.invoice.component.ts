import { Component } from '@angular/core';
import { serviceModel } from '../commonModels/serviceModel';
import { UserService } from '../user/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'invoice',
    templateUrl: '../user/user.invoice.html',
    providers:[UserService]
})


export class UserInvoiceComponent {
    public serviceModel = new serviceModel();

    constructor(private service: UserService, private activatedRoute: ActivatedRoute) {
        this.GetUserInvoiceDetails(this.activatedRoute.snapshot.params['invoiceId']);
    }

    GetUserInvoiceDetails(bookingId: any) {
        this.service.GetUserInvoice(bookingId).subscribe(x => {
            
        });

    }

}