import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../workshop.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  posts: any;
  constructor(private workshopService: WorkshopService) { }

  ngOnInit() {
    this.posts = this.workshopService.getPosts();
  }
}
