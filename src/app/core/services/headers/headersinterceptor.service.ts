import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadersinterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var token:any=""
        if(localStorage.getItem('token')==null || localStorage.getItem('token')==undefined)
        {token="xxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }
        else{token=localStorage.getItem('token')}
        req = req.clone({setHeaders: { Authorization: `Bearer ${token}`}});

    return next.handle(req);
  }
}
