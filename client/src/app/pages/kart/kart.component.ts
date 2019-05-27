import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JWTService } from '../auth/jwt.service';
import { KartService } from '../kart/kart.service';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { serviceModel } from './../commonModels/serviceModel';
import { buyModel } from '../commonModels/buyModel';
declare var swal: any;

@Component({
    selector: 'kart',
    templateUrl: '../kart/kart.html',
    providers: [JWTService, KartService]

})

export class KartComponent {
    public loading = true;
    public productDetails: any = {};
    public imageUrl = new serviceModel();
    public deviceChecked?: boolean;
    constructor(private route: Router, private jwt: JWTService, private service: KartService, private sanitizer: DomSanitizer) {
        this.BindKartProducts(this.jwt.getToken());
    }



    MakePayment(paymentList: any): void {
        debugger;
        let paymentListDetails: any = [];
        for (let i = 0; i < paymentList.length; i++) {
            let x = { productId: '', price: 0, token: this.jwt.getToken() };
            x.productId = paymentList[i].productId;
            x.price = paymentList[i].productId;
            paymentListDetails.push(x);
        }
        // this.jwt.SetDynamic('paymentList', paymentListDetails);
        debugger;
        this.route.navigate(['/kart/payment']);
    }


    BindKartProducts(token: any): void {
        this.service.GetKartProducts(token).subscribe(x => {
            this.productDetails = x;
            for (let i = 0; this.productDetails.length > i; i++) {
                this.productDetails[i].url = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl.imageUrl + this.productDetails[i].productId + '.jpg)');
            }
        });
        this.loading = false;
    }

    ContinueShopping(): void {
        this.route.navigate(['/index']);
    }

    RemoveFromKart(productId: any): void {
        this.service.RemoveFromKart(productId, this.jwt.getToken()).subscribe(x => {
            swal('', 'Removed Successfully', 'success');
            this.BindKartProducts(this.jwt.getToken());
        });

    }


}





@Component({
    selector: 'kartpayment',
    templateUrl: '../kart/kartpayment.html',
    providers: [KartService]

})

export class KartPaymentComponent {
    public productId: string;
    public payment = {};
    private tokenService = new serviceModel();
    public loading = false;
    constructor(private service: KartService, private router: Router) {

    }

    Purchase(buy: buyModel): void {
        this.loading = true;
        let array: any = [];
        buy.productId = this.productId;
        buy.userToken = this.tokenService.authorization;
        array.push(buy);
        this.service.Purchase(array).subscribe(x => {
            swal(
                'Payment Done Successfully',
                'Your file has been deleted.',
                'success'
            );
            this.loading = false;
            this.router.navigate(['/user']);
        });

    }

}