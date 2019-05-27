import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from '../dashboard/dashboard.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductTypeComponent } from '../dashboard/producttype.component';
import { LoadingModule } from 'ngx-loading';

@NgModule({
    imports: [CommonModule, routing, LoadingModule]
    , declarations: [DashboardComponent, ProductTypeComponent]
})

export class DashboardModule {
    constructor() {

    }
}

