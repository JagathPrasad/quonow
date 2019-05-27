import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminService } from '../admin/admin.service';
import { AdminApproveComponent } from '../admin/admin.approve.component';
import { AdminListComponent, AdminUserListComponent } from '../admin/admin.list.component';
import { AdminUserComponent } from '../admin/adminuser.component';
import {
    AdminAddComponent, AdminEventComponent
    , AdminEventTypeComponent, AdminProductTypeComponent
} from '../admin/admin.add.component';

import { AdminTicketingComponent } from '../admin/admin.ticket.component';
const routes: Routes = [
    {
        path: '', component: AdminComponent// ,resolve:{
        //   isAuthenticate:AdminService
        // }
        , children: [
            { path: '', component: AdminUserComponent },
            { path: 'approve', component: AdminApproveComponent }
            , { path: 'list', component: AdminListComponent },
            { path: 'user', component: AdminUserListComponent }
            , {
                path: 'add', component: AdminAddComponent, children: [
                    { path: '', component: AdminEventTypeComponent }
                    , { path: 'event', component: AdminEventComponent }
                    , { path: 'producttype', component: AdminProductTypeComponent }
                ]
            },
            { path: 'tickets', component: AdminTicketingComponent }

        ]

    }

];

export const routing = RouterModule.forChild(routes);