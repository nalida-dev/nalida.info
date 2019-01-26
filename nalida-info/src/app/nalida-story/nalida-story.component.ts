import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nalida-story',
  templateUrl: './nalida-story.component.html',
  styleUrls: ['./nalida-story.component.scss', '../header/header.component.scss']
})
export class NalidaStoryComponent implements OnInit {

  posts: any[];

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const tags = this.route.snapshot.paramMap.get('tags');
    if (tags) {
      this.posts = this.postService.getPosts().filter(post => {
        return post.tags && tags.split(',').every(tag => post.tags.includes(tag));
      });
    } else {
      this.posts = this.postService.getPosts();
    }
  }

}
