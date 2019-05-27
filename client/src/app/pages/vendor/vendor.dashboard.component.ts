import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor/vendor.service';
import { serviceModel } from '../commonModels/serviceModel';


@Component({
    selector: 'vendoradd',
    templateUrl: '../vendor/vendor.dashboard.html',
    providers: [VendorService]
})

export class VendorDashboardComponent implements OnInit {
    public server = new serviceModel();
    public getapprovalDetails: any;
    public data;
    public upComingDetails: any;
    constructor(private service: VendorService) {
        this.data = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        }
        this.GetVendorApprovalDetails();
        this.GetVendorUpComingEvents();
    }

    ngOnInit() {


    }


    GetVendorApprovalDetails(): any {

        this.service.GetVendorApprovalProducts(this.server.authorization).subscribe(x => {
            this.getapprovalDetails = x;
        })
    }


    GetVendorUpComingEvents(): void {

        this.service.GetUpComingEvents(this.server.authorization).subscribe(x => {
            this.upComingDetails = x;
        });
    }

}