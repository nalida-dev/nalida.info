import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-nalida-story',
  templateUrl: './nalida-story.component.html',
  styleUrls: ['./nalida-story.component.scss', '../header/header.component.scss']
})
export class NalidaStoryComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
