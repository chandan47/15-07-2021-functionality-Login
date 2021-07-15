import { Routes } from "@angular/router";

import { AddairlineComponent } from "./components/addairline/addairline.component";
import { BookflightComponent } from "./components/bookflight/bookflight.component";
import { LoginComponent } from "./components/login/login.component";
import { ManageairlineComponent } from "./components/manageairline/manageairline.component";
import { SearchflightComponent } from "./components/searchflight/searchflight.component";


export const routes:Routes=[
    {
        path: 'addairline',
        component: AddairlineComponent
    },
    {
        path: 'ar',
        redirectTo: '/addairline',
        pathMatch: 'prefix'
    }, 
    {
        path: 'bookflight',
        component: BookflightComponent
    },
    {
        path:'searchflight',
        component:SearchflightComponent
    },
    {
        path:'manageairline',
        component:ManageairlineComponent
    },
    {
        path: '',
    component:LoginComponent
    }
]