import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAuthUserComponent } from './create-auth-user/create-auth-user.component';
import { ListAuthUserComponent } from './list-auth-user/list-auth-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create',
    component: CreateAuthUserComponent,
  },
  {
    path: 'list',
    component: ListAuthUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
