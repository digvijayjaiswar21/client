import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './shared/api.service';
import {AuthService} from './shared/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationsModule } from './registrations/registrations.module';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpModule,
    MatCardModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    RegistrationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

