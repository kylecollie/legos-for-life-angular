import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoginDto } from './login.dto';
import { TokenDto } from './token.dto';

const jwtToken = 'jwtToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<string | null>(this.getToken());

  constructor(private _http: HttpClient) {}

  login(loginDto: LoginDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.api + '/api/auth/login', loginDto)
      .pipe(
        tap((token) => {
          if (token && token.jwt) {
            localStorage.setItem(jwtToken, token.jwt);
            this.isLoggedIn$.next(token.jwt);
          } else {
            this.logout();
          }
        })
      );
  }

  logout() {
    localStorage.removeItem(jwtToken);
    this.isLoggedIn$.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem(jwtToken);
  }
}
