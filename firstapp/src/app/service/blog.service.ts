import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getServices():Observable<any> {
     return this.http.get("http://localhost:4500/Blog");

  }

  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/details/"+id)
  }

  getServiceById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/Blog/"+id)
  }
}
