import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    const allowed = this.authService.getLoggedInState().getValue();
    if (allowed) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

}
