import { Component, OnInit } from '@angular/core';
import { RegisterApi } from 'src/api/register.api';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddCourseComponent, AddCourse } from '../admin/admin-dialogs/add-courses/add-courses.component';
import data from '../constants/constants.json';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private api : RegisterApi,
              private router :Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.api.getCourseOfStudent()
    .subscribe(
      (res)=>{
      console.log(res),
      (err)=>{
      console.error(err);
      }
    })

    }

  
    showButton():void{
      let dialogRef = this.dialog.open(AddCourseComponent, {
        width: '400px',
        data: new AddCourse(data.common.admin.TITLE,'')
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }


