import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './templates/home/home.component';


const routes: Routes = [

    {
        path: '**',
        component: HomeComponent,
    },
    {
        path: '',
        component: HomeComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
