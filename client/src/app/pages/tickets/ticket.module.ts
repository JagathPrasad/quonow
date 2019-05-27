import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { routing } from '../tickets/ticket.routing';
import { TicketComponent } from '../tickets/ticket.component';
import { TickeBuyComponent } from '../tickets/ticket.component';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
@NgModule({
    imports: [CommonModule, routing, FormsModule, LoadingModule],
    declarations: [TicketComponent, TickeBuyComponent]
})

export class TicketModule {
    constructor() {

    }
}

