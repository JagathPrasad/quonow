import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routing } from '../buy/buy.routing';
import { ViewComponent } from '../buy/buy.component';
import { BuyComponent } from '../buy/payment.component';

import { LoadingModule } from 'ngx-loading';

@NgModule({
    imports: [CommonModule, routing, FormsModule, LoadingModule],
    declarations: [ViewComponent]
})

export class ViewModule {

    constructor() {

    }

}

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(
            [{ path: '', component: BuyComponent }]
        ), FormsModule, LoadingModule],
    declarations: [BuyComponent]
})

export class BuyModule {

    constructor() {

    }

}