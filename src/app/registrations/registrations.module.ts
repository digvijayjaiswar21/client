import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationsComponent } from './registrations.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatIconModule,MatToolbarModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationsRoutingModule } from './registrations-routing.module';
import { LoginComponent } from './login/login.component';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
import { AuthInterceptor } from '../../_helper/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserStore } from '../shared/_services/users.service';
@NgModule({
  declarations: [RegistrationsComponent, LoginComponent],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    RegistrationsRoutingModule
  ],
  providers: [ApiService,
              AuthService,
              UserStore
          ],
  exports:[
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ]
 
})
export class RegistrationsModule { }
