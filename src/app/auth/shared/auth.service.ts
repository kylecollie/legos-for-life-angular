import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginDto } from './login.dto';
import { TokenDto } from './token.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.api + '/api/auth/login', loginDto)
      .pipe(
        tap(token => {
          if (token && token.jwt) {
            localStorage.setItem('jwtToken', token.jwt);
          }
        })
      )
  }

  getToken(): string | null
  {
    return localStorage.getItem('jwtToken');
  }
}
