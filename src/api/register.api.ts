import {environment} from '../environments/environment';
import {map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiService} from '../app/shared/api.service';
import { pipe, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class RegisterApi{

 constructor(private api: ApiService) { }

getUser(item):Observable<Object>{
    return this.api.post(`auth`,item).
    pipe(map((response:Response)=>{
        return response;
    })
    );

}

registerUser(item):Observable<any>{
    return this.api.post(`users`,item).
    pipe(map((response:any)=>{
        return response.json();
    })
    );

}



handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 }
