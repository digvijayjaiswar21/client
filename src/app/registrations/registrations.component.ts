import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterApi } from 'src/api/register.api';
import { map } from "rxjs/operators"; 
import { of } from 'rxjs';
import {AuthService} from '../shared/auth.service';
import {passwordValidator} from '../../validators/validators';
 

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private registrationApi :RegisterApi,
              private auth :AuthService) { 
    this.register();
  }

  ngOnInit() {}

 public register():void{
 this.registerForm =this.formBuilder.group({
  usernameCtrl:['',Validators.required],
  passwordCtrl:['',[Validators.required,Validators.minLength(8)]]
 })
 }


 getUsername(){
   return this.registerForm.get('usernameCtrl').hasError('required')?'username is required.':'';
 }

 getPassword(){
  return this.registerForm.get('passwordCtrl').hasError('required')?'password is required.':'';
  
 }


 login(){
 
  const values = this.registerForm.value;
   
  const payload = {
   username : values.usernameCtrl,
   password : values.passwordCtrl
}

  this.registrationApi.getUser(payload)
  .subscribe((data:Response)=> {
     this.auth.setToken(data['token']);
  });
  
 }





}
