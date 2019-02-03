import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-nalida-story-post-preview',
  templateUrl: './nalida-story-post-preview.component.html',
  styleUrls: ['./nalida-story-post-preview.component.scss']
})
export class NalidaStoryPostPreviewComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
