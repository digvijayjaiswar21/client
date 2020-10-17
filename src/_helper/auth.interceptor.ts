import { HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../app/shared/auth.service';
import { tap } from "rxjs/operators";
const TOKEN_HEADER_KEY = 'x-auth-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private auth : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.auth.getToken();
        if (token != null) {
        authReq = req.clone({headers : req.headers.append('Content-Type', 'application/json')
                                  .append(TOKEN_HEADER_KEY,this.auth.getToken())
                                  .append('Accept', 'application/json')})
        }
        return next.handle(authReq);

    }

}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];