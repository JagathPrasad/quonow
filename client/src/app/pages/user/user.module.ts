import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { routing } from '../user/user.routing';

import { UserHistoryComponent } from '../user/user.history';
import { UserProfileComponent } from '../user/user.profile';
import { UserCustomComponent } from '../user/user.custom';
import { UserInvoiceComponent } from '../user/user.invoice.component';
import { UserReviewComponent } from '../user/user.review.component';


@NgModule({
    imports: [CommonModule, routing]
    , declarations: [UserComponent, UserProfileComponent, UserHistoryComponent, UserCustomComponent, UserInvoiceComponent, UserReviewComponent]

})

export class UserModule {

    constructor() {

    }
}

