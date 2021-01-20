import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  public setCurrenUser(): Promise<Team> {
    return new Promise((resolve, reject) => {
      this.activatedRoute.queryParams
        .subscribe(param => {
          if (param.user_id) {
            this.apiService.post(`/api/current_user/${param.user_id}`)
              .subscribe(data => resolve(data), err => reject(err))
          }
        })
    })
  }
}
