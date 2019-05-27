
import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../productlist/productlist.service';
//import {StarComponent} from '../shared/star.component';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { serviceModel } from './../commonModels/serviceModel';
@Component({
    selector: '',
    templateUrl: '../productlist/productdetails.html',
    styleUrls: ['../productlist/productlist.css'],
    providers: [ProductsService]
})

export class ProductDetialsComponent {
    model: any = {};
    public username: string;
    public password: string;
    public filterQuery = '';
    public productDetails: any;
    rangeValues: number[] = [20, 500];
    public imageUrl = new serviceModel();

    public loading = false;
    constructor(private router: Router, private arouter: ActivatedRoute, private elem: ElementRef, private service: ProductsService, private sanitizer: DomSanitizer) {
        this.BindProductDetails();
    }
    BindProductDetails(): void {
        this.loading = true;
        let productId = this.arouter.snapshot.params['productId'];
        this.service.GetProductsList(productId).subscribe(x => {

            this.productDetails = x;
            for (let i = 0; this.productDetails.length > i; i++) {
                this.productDetails[i].url = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl.imageUrl + this.productDetails[i].Id + '.jpg)');
            }
            this.loading = false;
        });
    }

    MakePayment(Id: any): void {
        debugger;
        //window.location.href='/buy/1234354'
        this.router.navigate(['/view', Id]);


    }

}
