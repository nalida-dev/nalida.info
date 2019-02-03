import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() image: string = null;
  navPanelVisible = false;
  constructor() { }

  ngOnInit() {
    if (this.image) {
      window.onscroll = () => {
        document.getElementById('header').style.height =
          Math.max(0, 400 - document.documentElement.scrollTop) + 'px';
      };
    } else {
      window.onscroll = null;
    }
  }

}
