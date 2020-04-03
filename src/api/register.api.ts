import {environment} from '../environments/environment';
import {map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiService} from '../app/shared/api.service';
import { pipe, Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class RegisterApi{

 constructor(private api: ApiService) { }

getUser(item):Observable<any>{
    return this.api.post(`registrations/authenticate`,item).
    pipe(map((response:any)=>{
        return response.json();
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


}