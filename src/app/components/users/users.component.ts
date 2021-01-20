import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public hideUsers: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public hideOrShowContent() {
    this.hideUsers = !this.hideUsers
  }

}
