import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterApi } from 'src/api/register.api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;
  header:string = 'Registration for Nirvana';
  registrationForm:FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private registrationApi :RegisterApi,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.registrationsFormValidate();
   }

  ngOnInit() {
  }

  registrationsFormValidate():void{
   this.registrationForm = this.formBuilder.group({
     firstname:['',Validators.required],
     lastname:['',Validators.required],
     phoneno :['',Validators.required],
     password:['',Validators.required],
     email:['',Validators.required],
     course:['',Validators.required]
   })
  }

getFirstNameError():string{
  return this.registrationForm.get('firstname').hasError('required') ? 'Firstname is required.' :'';
}

getLastNameError():string{
  return this.registrationForm.get('lastname').hasError('required') ? 'Lastname is required.' :'';
}

getUserNameError():string{
  return this.registrationForm.get('email').hasError('required') ? 'Username is required.' :'';
}

getPhoneNoError():string{
  return this.registrationForm.get('phoneno').hasError('required') ? 'Phone.no is required.' :'';
}

getCourseNameError():string{
  return this.registrationForm.get('course').hasError('required') ? 'Course is required.' :'';
}

getPasswordError():string{
  return this.registrationForm.get('password').hasError('required') ? 'Password is required.' :'';
}

registrationFormValues(){
 if(this.registrationForm.value){
   this.registrationApi.registerUser(this.registrationForm.value).subscribe(response=>{
   if(response){
    this.router.navigate(['']).then((navigated: boolean) => {
      if(navigated) {
        this._snackBar.open('Registered Successfully','Dismiss',{
          duration: 2000
        })
      }
  });

 
   }
   
   })
 }
}

}

