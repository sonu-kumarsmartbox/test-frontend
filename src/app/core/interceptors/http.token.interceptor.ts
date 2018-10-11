import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { JwtService } from '../services/jwt.service';
import { Observable } from 'rxjs';

//Interceptor modifies the header,and forwards the modified header to the HttpHandler

@Injectable() 
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(private jwtService:JwtService){}

    intercept(req:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        const headersConfig = {
            'Content-Type':'application/json',
            'Accept':'application/json'
        };

        const token = this.jwtService.getToken();

        if(token) {
            headersConfig['Authorization'] = `Token ${token}`;
        }

        const request = req.clone({setHeaders:headersConfig});

        return next.handle(request);
    }
}