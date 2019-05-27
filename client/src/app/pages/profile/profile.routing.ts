
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
    { path: '', component: ProfileComponent }
];

export const routing = RouterModule.forChild(routes);