import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent implements OnInit {

  public hideInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public hideOrShowContent() {
    this.hideInfo = !this.hideInfo
  }

}
