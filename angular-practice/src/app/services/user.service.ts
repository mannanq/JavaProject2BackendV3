import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:8082/users';

  constructor(private http: HttpClient) { }

    getUsers() : Observable<User[]> {
      console.log('getting all users');

      // this will return an observable
      return this.http.get<User[]>(this.url);

    }

    // we used an observable last time so well do something dif this time
    getUserById(id: number) : Promise<User> {
      console.log('getting user by id: ' + id);

      // this will return an observable
      return this.http.get<User>(this.url+"/"+id).toPromise();

    }

  
}
