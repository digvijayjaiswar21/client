import { Injectable, Optional } from '@angular/core';
import { Http, Headers,Request,RequestOptions,RequestMethod,Response } from "@angular/http";
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators"; 
import { Observable } from 'rxjs';
import  {AuthService} from './auth.service';

@Injectable()
export class ApiService {
  private baseURL = environment.SERVER_BASE_URL;
  private api = environment.apiUrl;

  constructor(private http :Http,
             private auth :AuthService) {}
   
  get( url: string):Observable<any>{
   return this.request(url,RequestMethod.Get);
  }

   post(url:string,body:Object):Observable<any>{
     return  this.request(url,RequestMethod.Post,body);
   }


   put(url:string,body:Object){
    return this.request(url,RequestMethod.Put,body);  
   }


   delete(url:string){
     return this.request(url,RequestMethod.Delete);  
   }

     
  request(url:string,method :RequestMethod,body?: Object ){
     const headers = new Headers();
     headers.append('Content-type','application/json');
     headers.append('x-auth-token',`${this.auth.getToken()}`);
      const requestOptions = new RequestOptions({
        url:`${this.baseURL}/${this.api}/${url}`,
        method:method,
        headers:headers
      });

      if(body){
        requestOptions.body = body;
      }
      const request = new Request(requestOptions);
      return this.http.request(request);
      
}




}
