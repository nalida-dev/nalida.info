import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-introduction-post-preview',
  templateUrl: './introduction-post-preview.component.html',
  styleUrls: ['./introduction-post-preview.component.scss']
})
export class IntroductionPostPreviewComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
