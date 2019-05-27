import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { routing } from '../profile/profile.routing';


@NgModule({
    imports: [CommonModule, routing
    ],
    declarations: [ProfileComponent]
})

export class ProfileModule {
    constructor() {

    }
}