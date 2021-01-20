import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public hideUsers: boolean = false;
  public user_id: string = this.storageService.getItem('user_id');
  public users: User[];

  constructor(
    private userService: UserService,
    private storageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers(this.user_id)
      .subscribe((data: Team) => {
        this.users = data.team.users
      })
  }

  public hideOrShowContent() {
    this.hideUsers = !this.hideUsers
  }

}
