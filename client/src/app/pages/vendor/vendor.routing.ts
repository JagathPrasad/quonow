import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from '../vendor/vendor.component';
import { VendorAddComponent,VendorAddProductComponent } from '../vendor/vendor.add.component';
import { VendorDashboardComponent } from '../vendor/vendor.dashboard.component';
import { VendorHistoryComponent } from '../vendor/vendor.history.component';

const routes: Routes = [
    {
        path: '', component: VendorComponent, children: [
            { path: '', component: VendorDashboardComponent },
            { path: 'addproduct', component: VendorAddComponent,children:[
                {path:'',component:VendorAddProductComponent}
            ] },
            { path: 'history', component: VendorHistoryComponent }
        ]
    }
];

export const routing = RouterModule.forChild(routes);