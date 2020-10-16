import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-uploads',
   templateUrl:'./upload.component.html' ,
    styleUrls: ['./upload.component.scss']
  })

  export class UploadComponent implements OnInit{
    title: string;
    message: string;
    constructor(public dialogRef: MatDialogRef<UploadCourse>,
                @Inject(MAT_DIALOG_DATA) public data: UploadCourse){
                this.title = data.title;
                this.message = data.message;
                }
    ngOnInit(): void {}

  }

  export class UploadCourse{
    constructor(public title:string, public message:string, public content?:string){}
}