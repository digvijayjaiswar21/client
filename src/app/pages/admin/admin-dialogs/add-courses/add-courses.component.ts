import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import constant from '../../../constants/constants.json';
import { FormBuilder, FormGroup } from '@angular/forms';
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
              @Inject(MAT_DIALOG_DATA) public data: AddCourse) {
                this.title = data.title;
                this.message = data.message;
                this.consData = constant.common.admin;
                this.courseFormDetails();
               }

  ngOnInit(){}

  
  public courseFormDetails():void{
    this.courseForm = this.formBuilder.group({
      courseNameCtrl : [''],
      courseDescCtrl:['']
    }) 
  }


  public courseDetails():void{
    console.log('aaaa ',this.courseForm.value);
    this.dialogRef.close();
  }
 


}

export class AddCourse{
    constructor(public title:string,public message:string,public content?:string){}
}