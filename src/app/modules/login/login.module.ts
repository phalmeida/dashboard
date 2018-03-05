import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule],
    declarations: [LoginComponent]
})
export class LoginModule { }
