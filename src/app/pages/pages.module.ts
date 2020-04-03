import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatInputModule,MatIconModule,MatListModule,MatToolbarModule } from '@angular/material';
@NgModule({
    imports: [PagesRoutingModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule
    ],
    declarations:[PagesComponent, DashboardComponent],
    exports: [RouterModule]
  })
  
export class PagesModule{}