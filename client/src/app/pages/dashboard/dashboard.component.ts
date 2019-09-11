import { serviceModel } from './../commonModels/serviceModel';
import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { ProductTypeComponent } from '../dashboard/producttype.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
declare var swal: any;


@Component({
    selector: 'dashboard',
    templateUrl: '../dashboard/dashboard.html'
    , providers: [DashboardService]
})

export class DashboardComponent {
    public pubDetails: any;
    public locations: any = [];
    public imageUrl = new serviceModel();
    public loading = false;
    constructor(private service: DashboardService, private router: Router, private sanitizer: DomSanitizer) {
        //this.GetLoginDetails();
        this.GetPubDetails();
        this.GetLocations();
    }

    GetLoginDetails(): any {
        this.service.GetLoginDetails().subscribe(x => {

        });

    }

    GetPubDetails(): void {
        this.loading = true;
        this.service.GetPubDetails().subscribe(x => {
            this.pubDetails = x;
            for (let i = 0; this.pubDetails.length > i; i++) {
                this.pubDetails[i].url = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl.imageUrl + this.pubDetails[i].Id + '.jpg)');
            }
            this.loading = false;
        });
    }

    SearchProducts(value: any): void {
        this.router.navigate(['/search', value]);
    }

    Subscription(email: any): void {
        debugger;
        if (email != '' && email != null)
            swal("Thank You!", "Subscribed Successfully!", "success");
    }


    public GetLocations(): any {
        this.service.GetLocations().subscribe(x => {
            this.locations = x;
            console.log(x, 'locations');
        })
    }
    public filterForeCasts(value: any) {

    }
}
