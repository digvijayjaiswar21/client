import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
storageKey:string = 'userToken';
loggedIn = false;


  constructor() { }

  setToken(token:string){
    localStorage.setItem(this.storageKey,token);
   }

  getToken(){
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn(){
   return this.getToken() !== null;
  }

  logout(){
  localStorage.removeItem(this.storageKey);
  }


}
