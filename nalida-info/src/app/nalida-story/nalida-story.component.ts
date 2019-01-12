import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nalida-story',
  templateUrl: './nalida-story.component.html',
  styleUrls: ['./nalida-story.component.scss']
})
export class NalidaStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.classList.add('subpage');
  }

}
