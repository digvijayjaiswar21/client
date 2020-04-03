import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/register',
    pathMatch:'full'
  },
  {
    path:'register',
    loadChildren:'./registrations/registrations.module#RegistrationsModule'
  },
  {
    path:'pages',
    loadChildren:'./pages/pages.module#PagesModule'
  },
  {
    path:'not-found',
    component:PageNotFoundComponent
  },
  {
    path:'**',
    redirectTo:'/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
