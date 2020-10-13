import { Injectable } from '@angular/core';
import { Users } from '../models/users';

Injectable({
    providedIn:'root'
});

export class UserStore{
public user:Users;
public sum :any;

 getUser(): Users {
 const storedUser: Users = JSON.parse(localStorage.getItem('user')); ;
 return storedUser;
}

 setUser(currentuser: Users) {
    this.user = new Users(currentuser);
    localStorage.setItem('user', JSON.stringify(this.user));
}

}