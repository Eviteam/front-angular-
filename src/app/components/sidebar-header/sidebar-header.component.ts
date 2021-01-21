import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent implements OnInit {

  public hideInfo: boolean = false;
  public user_id: string = this.storageService.getItem('user_id');
  public singleUser: User;

  constructor(
    private userService: UserService,
    private storageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.userService.getSingleUser(this.user_id)
      .subscribe((data: User) => {
        this.singleUser = data
      })
  }

  public hideOrShowContent() {
    this.hideInfo = !this.hideInfo
  }

}
