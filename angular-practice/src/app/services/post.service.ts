import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

    getPosts() : Observable<Post[]> {
      console.log('getting all posts');

      // this will return an observable
      return this.http.get<Post[]>(this.url);

    }

    // we used an observable last time so well do something dif this time
    getPostById(id: number) : Promise<Post> {
      console.log('getting post by id: ' + id);

      // this will return an observable
      return this.http.get<Post>(this.url+"/"+id).toPromise();

    }

  
}
