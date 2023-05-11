import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions:any;
  constructor(private http:HttpClient) { }

  getFeedbacks7():Observable<any> {
    return this.http.get(" http://localhost:4500/Blog")
  }

  postFeedback7(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  
  return this.http.post("http://localhost:4500/Blog",obj,this.httpOptions);
 }
}
