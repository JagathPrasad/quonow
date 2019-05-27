import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from '../buy/buy.component';

const routes: Routes = [
    { path: '', component: ViewComponent }
];


export const routing = RouterModule.forChild(routes);
