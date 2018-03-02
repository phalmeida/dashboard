import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

const ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
            title: 'Dashboard'
        }
    }
];

@NgModule({
    imports: [
        ChartsModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule],
    declarations: [DashboardComponent]
})
export class DashboardModule {
}
