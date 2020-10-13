

import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
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
      path:'course/:id',
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
    exports: [RouterModule]
  })

export class PagesRoutingModule{}
