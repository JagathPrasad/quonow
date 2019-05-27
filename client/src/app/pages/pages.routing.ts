import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
    { path: 'index', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
    { path: 'events/:eventId', loadChildren: 'app/pages/events/events.module#EventsModule' },
    { path: 'buy/:productId', loadChildren: 'app/pages/buy/buy.module#BuyModule', canActivate: [AuthService] },
    { path: 'view/:productId', loadChildren: 'app/pages/buy/buy.module#ViewModule' },
    { path: 'admin', loadChildren: 'app/pages/admin/admin.module#AdminModule', canActivate: [AuthService] },
    { path: 'user', loadChildren: 'app/pages/user/user.module#UserModule', canActivate: [AuthService] },
    { path: 'vendor', loadChildren: 'app/pages/vendor/vendor.module#VendorModule', canActivate: [AuthService] },
    { path: 'products/:productTypeId', loadChildren: 'app/pages/products/products.module#ProductsModule' },
    { path: 'productlist/:productId', loadChildren: 'app/pages/productlist/productlist.module#ListModule' },
    { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
    { path: 'registration/:profile', loadChildren: 'app/pages/registration/registration.module#RegistrationModule' },
    { path: 'search/:searchtext', loadChildren: 'app/pages/search/search.module#SearchModule' },
    { path: 'profile', loadChildren: 'app/pages/profile/profile.module#ProfileModule' },
    { path: 'ticket/:pubId', loadChildren: 'app/pages/tickets/ticket.module#TicketModule' },
    { path: 'terms', loadChildren: 'app/pages/terms/terms.module#TermsModule' },
    { path: 'loginFG', loadChildren: 'app/pages/loginFG/loginFG.module#LoginFGModule' },
    { path: 'aboutus', loadChildren: 'app/pages/aboutus/aboutus.module#AboutUsModule' },
    { path: 'kart', loadChildren: 'app/pages/kart/kart.module#KartModule', canActivate: [AuthService] },
    { path: '', redirectTo: 'index', pathMatch: 'full' }
];

export const routing = RouterModule.forChild(routes);