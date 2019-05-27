import { TermsComponent } from './terms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { termsrouter } from '../terms/terms.routing';

@NgModule({
    declarations: [TermsComponent],
    imports: [CommonModule, termsrouter]
})

export class TermsModule {

    constructor() {

    }
}