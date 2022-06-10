import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Authorization: Bearer xxx.xxx.xxx

    let token = localStorage.getItem('token');

    if(token != null){
      var newReq = request.clone({
        headers: request.headers.append('Authorization','Bearer '+token)
      })
    }else{
      var newReq = request;
    }



    return next.handle(newReq);
  }
}
