

import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../_helper/auth.interceptor';
import { CourseComponent } from './admin/course/course.component';

const pagesRoutes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
      path:'course',
      component:CourseComponent
    },
    {
     path:'',
     redirectTo:'dashboard',
     pathMatch:'full'
    }

    ]
},
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule],
    providers:[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]
  })

export class PagesRoutingModule{}
