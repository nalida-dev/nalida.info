import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-introduction-post-view',
  templateUrl: './introduction-post-view.component.html',
  styleUrls: ['./introduction-post-view.component.scss']
})
export class IntroductionPostViewComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
