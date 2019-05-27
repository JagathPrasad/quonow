import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { RegistrationPartner } from '../registration/registration.partner.component';
import { RegistrationUser } from '../registration/registration.user.component';
const routes: Routes = [
    {
        path: '', component: RegistrationComponent
        // children: [
        //     { path: 'user', component: RegistrationComponent },
        //     { path: 'partner', component: RegistrationComponent }

        // ]
    }

];

export const routing = RouterModule.forChild(routes);