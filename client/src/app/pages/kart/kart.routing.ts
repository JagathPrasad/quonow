import { KartComponent, KartPaymentComponent } from './kart.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: KartComponent },
    { path: 'payment', component: KartPaymentComponent }
];


export const kartRouting = RouterModule.forChild(routes);