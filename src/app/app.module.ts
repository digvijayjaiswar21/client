import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './shared/api.service';
import {AuthService} from './shared/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../_helper/auth.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationsModule } from './registrations/registrations.module';
import { PagesModule } from './pages/pages.module';
import { HeadersComponent } from '../app/headers/headers.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeadersComponent
  ],
  imports: [
    HttpModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    RegistrationsModule
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]
})
export class AppModule { }

