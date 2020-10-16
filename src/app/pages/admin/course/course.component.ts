import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadComponent, UploadCourse } from '../admin-dialogs/uploads/upload.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  uploadCourseImg(){
    let dialogRef = this.dialog.open(UploadComponent, {
      width: '25%',
      height:'28%',
      data: new UploadCourse('Upload Course Image','@@')
    });

    dialogRef.afterClosed();
  }

}
