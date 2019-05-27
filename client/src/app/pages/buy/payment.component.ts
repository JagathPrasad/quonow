import { Component } from '@angular/core';
import { buyModel } from '../commonModels/buyModel';

import { BuyService } from '../buy/buy.service';
import { Router, ActivatedRoute } from '@angular/router';
import { serviceModel } from '../commonModels/serviceModel';
declare var swal: any;
@Component({
    selector: 'buying',
    templateUrl: '../buy/payment.html',
    providers: [BuyService]
})


export class BuyComponent {
    public productId: string;
    public productIdList: Array<string>;
    public payment = {};
    private tokenService = new serviceModel();
    public loading = false;

    constructor(private service: BuyService, private routerParams: ActivatedRoute, private router: Router) {

        this.productId = this.routerParams.snapshot.params['productId'];
        this.productIdList = [this.routerParams.snapshot.params['paymentIdlist']];
    }

    Purchase(buy: buyModel): void {
        this.loading = true;
        buy.productId = this.productId;
        buy.userToken = this.tokenService.authorization;
        this.service.Purchase(buy).subscribe(x => {
            swal(
                'Payment Done Successfully',
                'Your file has been deleted.',
                'success'
            );
            this.loading = false;
            this.router.navigate(['/user']);
        });

    }

    MakePayment(): void {


    }


    PurchaseKart(multiple: any): void {
        this.loading = true;
        multiple.productId = this.productIdList;
        multiple.userToken = this.tokenService.authorization;
        this.service.SavePostPurchaseKart(multiple).subscribe(x => {

        });
    }



}
