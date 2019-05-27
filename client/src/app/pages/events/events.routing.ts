import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from '../events/events.component';


const routes: Routes = [
    
    {
        path: '',
        children: [
            { path: '', component: EventComponent }
            // ,
            //             {
            //     path: 'marriage'
            //     , children: [
            //         { path: '', component: EventComponent }
            //         // { path: 'products', component: ProductComponent }
            //     ]
            // },
            // {
            //     path: 'party'
            //     , children: [
            //         { path: '', component: EventComponent }
            //         //{ path: 'products', component: ProductComponent }
            //         ]
            // },
            // {
            //     path: 'other', children: [
            //         { path: '', component: EventComponent }
            //        // , { path: 'products', component: ProductComponent }
            //        ]
            // },
            // {
            //     path: 'corporate', children: [
            //         { path: '', component: EventComponent }
            //         //{ path: 'products', component: ProductComponent }
            //         ]
            // }
        ]
    }
];
debugger;
export const routing = RouterModule.forChild(routes);