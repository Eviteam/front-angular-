import { Component, OnInit } from '@angular/core';
import { TeamData } from 'src/app/models/team';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public user_id: string = this.storageService.getItem('user_id');
  public team_id: string = this.storageService.getItem('team_id');
  public team: TeamData;

  constructor(
    private sidebarService: SidebarService,
    private storageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.sidebarService.getTeamData(this.user_id, this.team_id)
      .subscribe(async (data: TeamData) => {
        this.team = data;
        console.log(this.team)
      })
  }

}
