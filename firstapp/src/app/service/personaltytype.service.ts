import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaltytypeService {
  constructor(private http:HttpClient) { }

  getServices1():Observable<any> {
     return this.http.get("http://localhost:4500/personalty-types");

  }
  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/persdetails/"+id)
  }
  getServiceById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/Blog/"+id)
  }
}
