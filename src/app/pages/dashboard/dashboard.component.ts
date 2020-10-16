import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddCourseComponent, AddCourse } from '../admin/admin-dialogs/add-courses/add-courses.component';
import { UserStore } from '../../shared/_services/users.service';
import data from '../constants/constants.json';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
              private router :Router,
              private userStore : UserStore,
              public dialog: MatDialog,
              public authService:AuthService) { 
              }

  ngOnInit() {
    const use = this.userStore.getUser();
    console.log(use);
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


