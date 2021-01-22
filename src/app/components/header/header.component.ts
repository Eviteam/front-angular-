import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedUser: string = this.storageService.getItem('selectedUser');
  public userData: User;

  constructor(
    private userService: UserService,
    private storageService: LocalStorageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(param => this.getSingleUser(param.id))
  }

  public getSingleUser(user_id: string): void {
    this.userService.getSingleUser(user_id)
      .subscribe((singleUser: User) => this.userData = singleUser)
  }

}
