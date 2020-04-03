import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationsComponent } from './registrations.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatIconModule,MatToolbarModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RegisterApi } from 'src/api/register.api';
import { RegistrationsRoutingModule } from './registrations-routing.module';
import { LoginComponent } from './login/login.component';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
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
              AuthService],
  exports:[
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ]
 
})
export class RegistrationsModule { }
