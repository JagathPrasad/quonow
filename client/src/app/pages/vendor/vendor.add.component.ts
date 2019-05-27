import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor/vendor.service';
import { AdminService } from '../admin/admin.service';
import { ProductModel } from '../commonModels/eventTypeModel';
import { serviceModel } from '../commonModels/serviceModel';
declare var swal: any;
@Component({
    selector: 'vendoradd',
    templateUrl: '../vendor/vendor.add.html'
})

export class VendorAddComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {


    }

}






@Component({
    selector: 'addproduct',
    templateUrl: '../vendor/vendor.add.product.html',
    providers: [VendorService, AdminService]

})

export class VendorAddProductComponent {
    public product = {};
    public EventTypesList: any;
    public EventsList: any;
    public ProductTypeList: any;
    public auth = new serviceModel();
    constructor(private service: VendorService, private adminservice: AdminService) {
        this.BindEventType();
    }


    BindEventType(): any {
        this.adminservice.GetEventTypes().subscribe(x => {

            this.EventTypesList = x;
        })
        return true;
    }


    BindEvents(eventTypeId: any): any {

        this.adminservice.GetEvents(eventTypeId).subscribe(x => {
            this.EventsList = x;

        });
        return this.EventsList;

    }

    BindProductType(EventId: any): any {
        this.adminservice.GetProdcutType(EventId).subscribe(x => {
            this.ProductTypeList = x;
        });
        return true;
    }


    SaveProduct(product: ProductModel, file): any {
        product.VendorId = this.auth.authorization;
        let fileList: FileList = file;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            this.service.SaveProduct(product).subscribe(x => {
                if (x != null && x != '') {
                    this.service.PostUploadFormDate(formData, x).subscribe(x => {
                        swal("Product Added!", "Admin will verify and approve this!", "success");
                        this.product = {};
                    });

                }

            });
        }

        // this.service.SaveProduct(product).subscribe(x => {
        //     if (x) {
        //         this.product = {};
        //     }
        // });
    }
}