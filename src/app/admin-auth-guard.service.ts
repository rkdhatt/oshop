import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    // firebase user object, not from firebase database.
    // Need to get user firbase object from database to read custom properties (ex: isAdmin)
    // Map to AppUser object.
    //
    // SwitchMap allows mapping 
    // and switch to new observable (i.e. AppUser).
    return this.auth.user$
    .switchMap(user => this.userService.get(user.uid))
    .map(appUser => appUser.isAdmin); // mapping result 
  }

}
