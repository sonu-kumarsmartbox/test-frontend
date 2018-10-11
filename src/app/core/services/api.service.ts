import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService{
  api_url = "http://localhost:2000/api";

    constructor(private http:HttpClient) {}

    private formatErrors(error:any) {
        return throwError(error.error);
    }

    get(path:string, params:HttpParams = new HttpParams()):Observable<any>{
        return this.http.get(`${this.api_url}${path}`,{params})
            .pipe(catchError(this.formatErrors));
    }

    put(path:string, body:Object = {}):Observable<any> {

        return this.http.put(`${this.api_url}${path}`,JSON.stringify(body),)
            .pipe(catchError(this.formatErrors));
    }

    post(path:string, body:Object = {}):Observable<any> {
        return this.http.post(`${this.api_url}${path}`,JSON.stringify(body))
            .pipe(catchError(this.formatErrors));
    }

    delete(path:string):Observable<any> {
        return this.http.delete(`${this.api_url}${path}`)
            .pipe(catchError(this.formatErrors));
    }
}