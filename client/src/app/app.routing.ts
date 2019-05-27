import {Routes,RouterModule} from '@angular/router';

const routes:Routes=[
{path:'',redirectTo:'index',pathMatch:'full'}
,{path:'*',redirectTo:'index'}
];

export const routing=RouterModule.forRoot(routes);