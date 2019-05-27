import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent, ContactUComponent } from '../aboutus/aboutus.component';
import { aboutsRouting } from '../aboutus/aboutus.routing';

@NgModule({
    declarations: [AboutUsComponent, ContactUComponent]
    , imports: [CommonModule, aboutsRouting]
})

export class AboutUsModule {

    constructor() {

    }
}