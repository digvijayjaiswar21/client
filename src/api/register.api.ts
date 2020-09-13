import {
  environment
} from '../environments/environment';
import {
  map
} from 'rxjs/operators';
import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  ApiService
} from '../app/shared/api.service';
import {
  pipe,
  Observable,
  throwError
} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterApi {

  constructor(private api: ApiService) {}

  getUser(item): Observable < Object > {
    try{
    return this.api.post(`auth`, item).
    pipe(map((response: Response) => {
      return response.json();
    }));
    }
    catch(err){
    this.handleError(err);
    }
  }


  getCourseOfStudent(): Observable < Object > {
    try {
      return this.api.get(`users/me`).
      pipe(map((response: Response) => {
        return response.json();
      }));
    } catch (error) {
      this.handleError(error);
    }
  }

  registerUser(item): Observable < any > {
    try {
      return this.api.post(`users`, item).
      pipe(map((response: any) => {
        return response.json();
      }));
    } catch (error) {
      this.handleError(error);
    }
  }



  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
