import { Injectable } from '@angular/core';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  public getPosts() {
    return POSTS;
  }

}
