import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../productlist/productlist.component';
import { routing } from '../productlist/productlist.routing';
import { FormsModule } from '@angular/forms';

import { ProductDetialsComponent } from '../productlist/productdetails.component';
import { ProductViewComponent } from '../productlist/productview.component';
//import { StarComponent } from '../shared/star.component';
import { PriceFilter, TestingFilter, NameFilter } from '../shared/pipes';

import { SliderModule } from 'primeng/primeng';

import { LoadingModule } from 'ngx-loading';

@NgModule({
    declarations: [ListComponent, ProductDetialsComponent,
        ProductViewComponent, PriceFilter, TestingFilter, NameFilter],
    imports: [CommonModule, routing, FormsModule, SliderModule, LoadingModule]
    , exports: [ListComponent]
})

export class ListModule {

    constructor() {

    }
}