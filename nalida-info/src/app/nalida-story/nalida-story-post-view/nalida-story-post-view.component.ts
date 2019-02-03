import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-nalida-story-post-view',
  templateUrl: './nalida-story-post-view.component.html',
  styleUrls: ['./nalida-story-post-view.component.scss']
})
export class NalidaStoryPostViewComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    const postId = +this.route.snapshot.paramMap.get('postId');
    this.post = this.postService.getPosts().find(post => post.id === postId);
  }

}
