import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  private readonly url:string = "https://jsonplaceholder.typicode.com/todos/"

  constructor( private http: HttpClient) {}

   getTodos():Observable<any> {
    return this.http.get(this.url,{
      headers: {
        Appcept: 'application/json'
      }
    })
   }
}
