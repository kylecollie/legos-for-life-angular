import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthUserDto } from '../shared/auth-user.dto';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-inno-tech-create-auth-user',
  templateUrl: './create-auth-user.component.html',
  styleUrls: ['./create-auth-user.component.scss'],
})
export class CreateAuthUserComponent implements OnInit {
  userForm = this._fb.group({
    username: [''],
  });
  err: string | undefined;
  message: string | undefined;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  create() {
    const userDto = this.userForm.value as AuthUserDto;
    this._auth
      .createAuthUser(userDto)
      .pipe(
        catchError((err) => {
          this.err = err.error ? err.error : err.message;
          this.message = undefined;
          return throwError(err);
        })
      )
      .subscribe(() => {
        this.userForm.reset();
        this.err = undefined;
        this.message = 'New User Created';
      });
  }
}
