import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../workshop.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  posts: any;
  constructor(private workshopService: WorkshopService) { }

  ngOnInit() {
    this.posts = this.workshopService.getPosts();
  }
}
