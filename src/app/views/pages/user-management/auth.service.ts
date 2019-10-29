import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = '1ac0689fc78eeacc9b4a97d2eadb03b793006201'

        //let currentUser=localStorage.getItem("token");
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${currentUser}`
                }
            });
        }

        return next.handle(request);
    }
}
