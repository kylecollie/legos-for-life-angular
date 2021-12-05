import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { LoginDto } from '../shared/login.dto';

@Component({
  selector: 'app-inno-tech-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this._fb.group({
    username: [''],
    password: [''],
  });

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(loginDto).subscribe((token) => {
      if (token && token.jwt) {
        this._router.navigateByUrl('products');
      }
      console.log('::Token:: ', token);
    });
  }
}
