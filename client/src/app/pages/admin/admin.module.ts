import { AdminTicketingComponent } from './admin.ticket.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from '../admin/admin.routing';
import { AdminComponent } from '../admin/admin.component';
import { AdminApproveComponent } from '../admin/admin.approve.component';
import { AdminListComponent, AdminUserListComponent } from '../admin/admin.list.component';
import { AdminUserComponent } from '../admin/adminuser.component';
import { AdminAddComponent, AdminEventComponent, AdminEventTypeComponent, AdminProductTypeComponent } from '../admin/admin.add.component';
import { FormsModule } from '@angular/forms';

//import {BarchartComponent} from '../charts/barchart/barchart.component';
import { ChartModule, CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, routing, FormsModule, ChartModule, CalendarModule],
    declarations: [AdminComponent, AdminApproveComponent
        , AdminListComponent, AdminUserComponent
        , AdminAddComponent, AdminEventComponent
        , AdminEventTypeComponent, AdminProductTypeComponent
        , AdminUserListComponent, AdminTicketingComponent
    ]
    , exports: [AdminUserComponent]
})

export class AdminModule {

    constructor() {
    }
}