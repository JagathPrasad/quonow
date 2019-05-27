import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from '../vendor/vendor.routing';
import { VendorComponent } from '../vendor/vendor.component';
import { VendorAddComponent, VendorAddProductComponent } from '../vendor/vendor.add.component';
import { VendorDashboardComponent } from '../vendor/vendor.dashboard.component';
import { VendorHistoryComponent } from '../vendor/vendor.history.component';
import { FormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/primeng';
@NgModule({
    imports: [CommonModule, routing, FormsModule,ChartModule],
    declarations: [VendorComponent, VendorAddComponent
        , VendorDashboardComponent
        , VendorHistoryComponent
        , VendorAddProductComponent
    ]
    ,
    exports: [VendorComponent, VendorHistoryComponent]
})

export class VendorModule {
    constructor() {

    }
}
