import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
const TOKEN_HEADER_KEY = 'x-auth-token';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('this.authService.getToken() ',this.authService.getToken());
        if (this.authService.getToken() != null) {
         const authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, this.authService.getToken()) });
         return next.handle(authReq);
        }
    }

}

// export const authInterceptorProviders = [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
//   ];