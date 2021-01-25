import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WelcomeGuard implements CanActivate {

  constructor(
    private storageService: LocalStorageService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const selectedUser: string = this.storageService.getItem('selectedUser');
    console.log(selectedUser, "12121")
    if (selectedUser) {
      return true
    }
    this.router.navigate(['/main/welcome-page'], { queryParams: { returnUrl: state.url } });
    return false
  }
  
}
