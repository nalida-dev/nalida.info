import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-nalida-story-post-view',
  templateUrl: './nalida-story-post-view.component.html',
  styleUrls: ['./nalida-story-post-view.component.scss']
})
export class NalidaStoryPostViewComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
