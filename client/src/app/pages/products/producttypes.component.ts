import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { serviceModel } from './../commonModels/serviceModel';
import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'producttype',
    templateUrl: '../products/producttypes.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ProductsService]
})

export class ProductTypes {
    public producttypeList: any;
    public imageUrl = new serviceModel();
    constructor(private elem: ElementRef, private service: ProductsService, private router: ActivatedRoute, private sanitize: DomSanitizer) {

        this.BindProducts();

    }

    BindProducts() {
        let productTypeId = this.router.snapshot.params['productTypeId'];
        this.service.BindProducts(productTypeId).subscribe(x => {
            this.producttypeList = x;
            for (let i = 0; i < this.producttypeList.length; i++) {
                this.producttypeList[i].url = this.sanitize.bypassSecurityTrustStyle(this.imageUrl.imageUrl + this.producttypeList[i].Id + '.jpg)');
            }
        });
    }



}
