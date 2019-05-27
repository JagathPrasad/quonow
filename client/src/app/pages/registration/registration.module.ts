import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from '../registration/registration.routing';
import { RegistrationComponent } from '../registration/registration.component';
import { RegistrationPartner } from '../registration/registration.partner.component';
import { RegistrationUser } from '../registration/registration.user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [RegistrationComponent, RegistrationPartner, RegistrationUser],
    imports: [CommonModule, routing,FormsModule]
})

export class RegistrationModule {

    constructor() { }
}