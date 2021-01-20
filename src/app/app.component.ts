import { Component } from '@angular/core';
import { Team, TeamData } from './models/team';
import { AppService } from './services/app/app.service';
import { LocalStorageService } from './services/localStorage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public teamData: Team;

  constructor(
    private appService: AppService,
    private storageService: LocalStorageService
  ) {
    this.appService.setCurrenUser().then((data: Team) => {
      this.teamData = data
      this.storageService.setItem('team_id', this.teamData.team.team_id)
      this.storageService.setItem('user_id', this.teamData.user_id)
    })
  }
}
