import { Injectable } from '@angular/core';
import { POSTS } from './workshop-posts';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor() { }

  public getPosts() {
    return POSTS;
  }

}
