import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAuthUserComponent } from './create-auth-user/create-auth-user.component';
import { ListAuthUserComponent } from './list-auth-user/list-auth-user.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreateAuthUserComponent,
    ListAuthUserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
