import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatIconModule,MatListModule,MatToolbarModule, MatInputModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { CourseComponent } from './admin/course/course.component';
import {MatButtonModule} from '@angular/material/button';
import { AddCourseComponent } from './admin/admin-dialogs/add-courses/add-courses.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [PagesRoutingModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      MatTabsModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule,
      MatIconModule
    ],
    declarations:[PagesComponent, DashboardComponent, CourseComponent,AddCourseComponent],
    entryComponents:[AddCourseComponent],
    exports: [RouterModule]
  })
  
export class PagesModule{}