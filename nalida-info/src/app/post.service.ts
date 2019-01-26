import { Injectable } from '@angular/core';
import { POSTS } from './mock-posts';
import { countFrequency } from './utils';

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
    const count = countFrequency(allTags);
    const uniqueTags = Array.from(new Set(allTags));
    uniqueTags.sort((a, b) => count[b] - count[a]);
    return uniqueTags;
  }

}
