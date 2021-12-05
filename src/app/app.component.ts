import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jwt: string | null | undefined;

  constructor(private _auth: AuthService, private _router: Router) {
    _auth.isLoggedIn$.subscribe((jwt) => {
      this.jwt = jwt;
    });
  }

  logout() {
    this._auth.logout().subscribe((loggedOut) => {
      this._router.navigateByUrl('auth/login');
    });
  }
}
