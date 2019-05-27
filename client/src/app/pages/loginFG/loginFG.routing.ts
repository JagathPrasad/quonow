
import { Routes, RouterModule } from '@angular/router';
import { LoginFGComponent } from '../loginFG/loginFG.component';


const routinginner: Routes = [
    { path: '', component: LoginFGComponent },
    { path: 'facebook', component: LoginFGComponent },
    { path: 'gmail', component: LoginFGComponent }
];

export const loginFGRouting = RouterModule.forChild(routinginner);


