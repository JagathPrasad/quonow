import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';

import { UserHistoryComponent } from '../user/user.history';
import { UserProfileComponent } from '../user/user.profile';
import {UserInvoiceComponent} from '../user/user.invoice.component';
import {UserCustomComponent} from '../user/user.custom';

const routes: Routes = [
    {
        path: '', component: UserComponent,
        children: [{
            path: '', component: UserHistoryComponent
        },
        { path: 'profile', component: UserHistoryComponent },
        { path: 'history', component: UserHistoryComponent },
        { path: 'addlist', component: UserCustomComponent },
        { path: 'invoice/:invoiceId', component: UserInvoiceComponent }

        ]
    }
];

export const routing = RouterModule.forChild(routes);

