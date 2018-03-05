import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {
    FullLayoutComponent,
    SimpleLayoutComponent
} from './containers';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Principal'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
            }
        ]
    }, {
        path: 'login',
        component: SimpleLayoutComponent,
        data: {
            title: 'Login'
        },
        children: [
            {
                path: '',
                loadChildren: './modules/login/login.module#LoginModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
