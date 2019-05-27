import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../productlist/productlist.service';

@Component({
    selector: 'productlist',
    templateUrl: '../productlist/productlist.html',
    styleUrls: ['../productlist/productlist.css'],
    providers: [ProductsService]

})

export class ListComponent {
   // public loading = false;
    model: any = {};
    public username: string;
    public password: string;
    public filterQuery = '';
    public productDetails: any;


    constructor(private router: ActivatedRoute, private routerredirect: Router, private service: ProductsService) {
        this.BindProductDetails();
    }


    BindProductDetails(): void {
        //this.loading = true;
        let productId = this.router.snapshot.params['productId'];
        this.service.GetProductsList(productId).subscribe(x => {
            this.productDetails = x;
          //  this.loading = false;
        });
    }

    MakePayment(): void {
        this.routerredirect.navigate(['buy']);

    }


}
