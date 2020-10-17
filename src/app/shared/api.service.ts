import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private baseURL = environment.SERVER_BASE_URL;
  private api = environment.apiUrl;

  constructor(private http :HttpClient) {}
   
             get(endpoint: string, options?): Observable<any> {
              return this.http.get(`${this.baseURL}/${this.api}/${endpoint}`, options);
            }
          
            post(endpoint: string, data, options?): Observable<any> {
              return this.http.post(`${this.baseURL}/${this.api}/${endpoint}`, data, options);
            }
          
            put(endpoint: string, data, options?): Observable<any> {
              return this.http.put(`${this.baseURL}/${this.api}/${endpoint}`, data, options);
            }
          
            delete(endpoint: string, options?): Observable<any> {
              return this.http.delete(`${this.baseURL}/${this.api}/${endpoint}`, options);
            }
}
