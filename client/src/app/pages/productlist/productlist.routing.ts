import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../productlist/productlist.component';
import {ProductDetialsComponent} from '../productlist/productdetails.component';

const routes: Routes = [
    {
        path: '', component: ListComponent
        ,
        children: [
            { path: '', component: ProductDetialsComponent }

        ]
    }
];


export const routing = RouterModule.forChild(routes);

