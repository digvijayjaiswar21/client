import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import constant from '../../../constants/constants.json';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service.js';
import { RegisterApi } from 'src/api/register.api.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-course',
 templateUrl:'./add-courses.component.html' ,
  styleUrls: ['./add-courses.component.scss']
})
export class AddCourseComponent implements OnInit {
title:string;
message:string;
content:string;
consData:Object;
courseForm:FormGroup;

  constructor(public dialogRef: MatDialogRef<AddCourseComponent>,
              private formBuilder: FormBuilder,
              private router :Router,
              private api : RegisterApi,
              @Inject(MAT_DIALOG_DATA) public data: AddCourse) {
                this.title = data.title;
                this.message = data.message;
                this.consData = constant.common.admin;
                this.courseFormDetails();
               }

  ngOnInit(){}

  
  public courseFormDetails():void{
    this.courseForm = this.formBuilder.group({
      courseName : [''],
      courseDescription:['']
    }) 
  }


  public courseDetails():void{
    this.api.createCourse(this.courseForm.value)
    .subscribe( response =>{
      this.router.navigate(['/pages/course',response['course_id']]);
    })
    this.dialogRef.close();
  }
}

export class AddCourse{
    constructor(public title:string, public message:string, public content?:string){}
}