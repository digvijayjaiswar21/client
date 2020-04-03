import {NgModule} from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { RegistrationsComponent } from './registrations.component';
import { LoginComponent } from './login/login.component';

const registrationsLoginRoutes:Routes =[
    {
        path:'',
        component:RegistrationsComponent,
    },
    {
        path:'login',
        component:LoginComponent,
    },
]
@NgModule({
imports:[
    RouterModule.forChild(registrationsLoginRoutes)
],
exports:[
    RouterModule
]
})



export class RegistrationsRoutingModule{} 