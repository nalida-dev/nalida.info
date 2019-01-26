import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  allTags: string[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.allTags = this.postService.getAllTags();
  }

}
