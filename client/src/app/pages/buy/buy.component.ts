import { serviceModel } from './../commonModels/serviceModel';
import { Component } from '@angular/core';
import { buyModel } from '../commonModels/buyModel';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { BuyService } from '../buy/buy.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JWTService } from '../auth/jwt.service';
declare var swal: any;
@Component({
    selector: 'buying',
    templateUrl: '../buy/buy.html',
    providers: [BuyService]
})


export class ViewComponent {

    public productId: string;
    public productDetails: any = {};
    public productcomments: any;
    public comment: any = {};
    public imageUrl = new serviceModel();
    constructor(private service: BuyService, private router: Router, private routerParams: ActivatedRoute, private jwt: JWTService, private santizer: DomSanitizer) {
        this.productId = this.routerParams.snapshot.params['productId']
        this.BindProductDescription();
        this.BindComments();
    }

    Purchase(): void {
        let buy = new buyModel();
    }

    MakePayment(productId: any): void {
        this.router.navigate(['/buy', productId]);
    }

    AddToCart(productId: any): void {
        if (this.jwt.isAuthorized) {
            this.service.AddtoCart(productId).subscribe(x => {
                swal("Good job!", "Added to Cart successfully!", "success");
            })
        }
        else {
            this.router.navigate(['/login']);
        }

    }

    BindProductDescription(): void {

        this.service.BindProductDescription(this.productId).subscribe(x => {
            this.productDetails = x;
            this.productDetails.url = this.santizer.bypassSecurityTrustStyle(this.imageUrl.imageUrl + this.productId + '.jpg)');
        });

    }

    BindComments(): void {

        this.service.BindComments(this.productId).subscribe(x => {
            console.log('com', x);
            this.productcomments = x;
        });

    }


    PostComment(comments: any): void {
        debugger;
        comments.productId = this.productId;
        if (this.jwt.isAuthorized) {
            this.service.PostComment(comments).subscribe(x => {

            });
        } else {
            this.router.navigate(['/login']);

        }
    }


}
