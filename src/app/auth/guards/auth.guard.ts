import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const currentToken = this._auth.getToken();
    const isValid = this.isTokenValid(currentToken);
    return isValid
      ? of(true)
      : this._auth.logout().pipe(
          map(() => {
            return this._router.parseUrl('/auth/login');
          })
        );
  }

  private isTokenValid(token: string | null) {
    if (!token || token.length <= 0) {
      return false;
    }
    const decoded = jwt_decode(token) as DecodedToken;
    return Date.now() <= decoded.exp * 1000;
  }
}

interface DecodedToken {
  exp: number;
}
