import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICustomer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url:string = "http://localhost/traffic/fetch.php"

  constructor( public http: HttpClient) { }

  getData(): Observable<ICustomer[]>{

    return this.http.get<ICustomer[]>(this.url)
}
}
