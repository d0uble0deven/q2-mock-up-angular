import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER } from './User'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }


  baseURL = 'https://jsonplaceholder.typicode.com/users'


  getJSON(): Observable<USER[]> {
    return this.httpClient.get<USER[]>(this.baseURL)
  }


}


