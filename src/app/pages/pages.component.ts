import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-pages',
    template:`<mat-sidenav-container  [class.m2app-dark]="true" fullscreen>

    <mat-sidenav #start mode="over" class="app-sidenav" color="primary" (click)="start.close()">
        <mat-nav-list>
  
            <a mat-list-item routerLink="./dashboard">
                <mat-icon>library_books</mat-icon>
                <span>Dashboard</span>
            </a>
  
            <a mat-list-item routerLink="./course">
                <mat-icon>question_answer</mat-icon>
                <span>Courses</span>
            </a>
            <a mat-list-item routerLink="assign">
                <mat-icon>person_add</mat-icon>
                <span>Assignments</span>
            </a>
  
            <a mat-list-item>
                <mat-icon>account_circle</mat-icon>
                <span>Login</span>
            </a>
  
        </mat-nav-list>
  
    </mat-sidenav>
  
    <mat-toolbar color="primary">
        <button mat-icon-button (click)="start.open('mouse')">
            <mat-icon>menu</mat-icon>
        </button>
    </mat-toolbar>
  
    <router-outlet></router-outlet>
  
  </mat-sidenav-container>`
  })
export class PagesComponent implements OnInit{

    constructor(){

    }

    ngOnInit(){

    }
}