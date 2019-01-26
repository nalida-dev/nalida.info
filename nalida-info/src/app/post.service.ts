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

  public getAllTags() {
    const allTags = POSTS.map(post => post.tags ? post.tags : [])
      .reduce((a, b) => [...a, ...b]);
    return Array.from(new Set(allTags));
  }

}
