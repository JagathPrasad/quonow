import { Component, OnInit } from '@angular/core';
import { serviceModel } from '../commonModels/serviceModel';
import { VendorService } from '../vendor/vendor.service';
import { AdminService } from '../admin/admin.service';
import { ProductModel } from '../commonModels/eventTypeModel';
declare var swal: any;
@Component({
    selector: 'vendorhistory',
    templateUrl: '../vendor/vendor.history.html'
    , providers: [VendorService]
})

export class VendorHistoryComponent implements OnInit {
    public productList: any;
    public serviceModel = new serviceModel();
    constructor(private service: VendorService) {
        this.BindMyProducts();
    }

    ngOnInit() {


    }


    BindMyProducts(): void {
        this.service.GetVendorProductsList(this.serviceModel.authorization).subscribe(x => {
            this.productList = x;
        });

    }

    

}