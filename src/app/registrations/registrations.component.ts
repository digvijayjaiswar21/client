import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterApi } from 'src/api/register.api';
import {AuthService} from '../shared/auth.service';
import { Router } from '@angular/router';
import { UserStore } from '../shared/_services/users.service';
 

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private registrationApi :RegisterApi,
              private router :Router,
              private userStore : UserStore,
              private auth :AuthService)
               { 
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
   email : values.usernameCtrl,
   password : values.passwordCtrl
}

  this.registrationApi.getUser(payload)
  .subscribe(
  (data)=> {
     this.auth.setToken(data['token']);
     this.userStore.setUser(data['user']);
     this.router.navigate(['/pages/dashboard']);
  },
  (err)=>{
   console.error(JSON.stringify(err)); 
  });

}
}
