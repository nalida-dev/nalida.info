import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post';
import * as showdown from 'showdown';

@Component({
  selector: 'app-nalida-story-post-preview',
  templateUrl: './nalida-story-post-preview.component.html',
  styleUrls: ['./nalida-story-post-preview.component.scss']
})
export class NalidaStoryPostPreviewComponent implements OnInit {

  @Input() post: Post;
  markdownConverter: showdown.Converter;
  convertedDescription: string;

  constructor() { }

  ngOnInit() {
    this.markdownConverter = new showdown.Converter();
    const temp = document.createElement('div');
    temp.innerHTML = this.markdownConverter.makeHtml(this.post.description);
    this.convertedDescription = temp.innerText;
  }

}
