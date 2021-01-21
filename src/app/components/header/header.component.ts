import { Component, OnInit } from '@angular/core';
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
    private storageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getSingleUser(this.selectedUser)
  }

  public getSingleUser(user_id: string): void {
    this.userService.getSingleUser(user_id)
      .subscribe((singleUser: User) => this.userData = singleUser)
  }

}
