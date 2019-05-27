import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from '../login/login.component';
import { ForgotComponent } from '../login/forgot.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'forgot', component: ForgotComponent }
];

export const routing = RouterModule.forChild(routes);