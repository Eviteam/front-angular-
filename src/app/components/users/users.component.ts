import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public userIsSelected: boolean = false;
  public selectedUser: number
  = Number(this.storageService.getItem('selectedUser'))
    ? Number(this.storageService.getItem('selectedUser'))
    : null;

  constructor(
    private userService: UserService,
    private storageService: LocalStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe(param => {
        this.selectUser(this.selectedUser);
        this.userService.getAllUsers(this.user_id)
          .subscribe((data: Team) => {
            this.users = data.team.users
          })
      // })
  }

  public hideOrShowContent() {
    this.hideUsers = !this.hideUsers
  }

  public selectUser(user_id: number) {
    this.userIsSelected = true;
    this.selectedUser = user_id;
    this.storageService.setItem('selectedUser', user_id);
    this.router.navigateByUrl(`/main/${user_id}`)
  }

}
