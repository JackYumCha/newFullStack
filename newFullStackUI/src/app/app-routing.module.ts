import { MySecondChildComponent } from './my-second-child/my-second-child.component';
import { MyFirstChildComponent } from './my-first-child/my-first-child.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MyWelcomeComponent } from './my-welcome/my-welcome.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    
    {
        path: '',
        component: MyWelcomeComponent
    },
    {
        path: 'first',
        component: MyFirstComponent,
        children: [
            // {
            //     path: '',
            //     pathMatch: 'full'
            // },
            {
                path: 'firstchild',
                component: MyFirstChildComponent
            },
            {
                path: 'secondchild/:id',
                component: MySecondChildComponent
            }
        ]
    },
    {
        path: 'second',
        component: MySecondComponent
    }
];

export const AppRouterModule = RouterModule.forRoot(appRoutes);