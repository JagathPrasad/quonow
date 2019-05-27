import { AuthService } from './../auth/auth.service';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { TicketComponent } from '../tickets/ticket.component';
import { TickeBuyComponent } from '../tickets/ticket.component';

const routes: Routes = [{
    path: '', component: TicketComponent
},
{ path: 'buy', component: TickeBuyComponent, canActivate: [AuthService] }
]

export const routing = RouterModule.forChild(routes);