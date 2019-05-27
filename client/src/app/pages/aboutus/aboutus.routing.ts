import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent, ContactUComponent } from '../aboutus/aboutus.component';

const routes: Routes = [
    { path: '', component: AboutUsComponent }
    , { path: 'contactus', component: ContactUComponent }
];

export const aboutsRouting = RouterModule.forChild(routes);