import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KartComponent, KartPaymentComponent } from '../kart/kart.component';
import { kartRouting } from '../kart/kart.routing';

import { LoadingModule } from 'ngx-loading';

@NgModule({
    imports: [CommonModule, kartRouting, LoadingModule, FormsModule],
    declarations: [KartComponent, KartPaymentComponent]
})

export class KartModule {

    constructor() {

    }
}

