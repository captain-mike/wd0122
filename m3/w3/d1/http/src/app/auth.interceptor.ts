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

    if(request.method == 'GET') {
      console.log('Chiamata get intercettata')
    }

    const newReq = request.clone({
      headers: request.headers
      .append('Auth','secretId')
      .append('codice','34897rcfyh934f578y')
    })

    return next.handle(newReq);
  }
}
