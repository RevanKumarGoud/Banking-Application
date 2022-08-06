import { Component, NgModule } from '@angular/core';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistionPageComponent } from './registion-page/registion-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditeComponent } from './user-edite/user-edite.component';
import { UserFindComponent } from './user-find/user-find.component';
import { UserDelateComponent } from './user-delate/user-delate.component';
const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {path:'login-page', component: LoginPageComponent},
  {path:'registion-page', component: RegistionPageComponent },
  {path:'home', component: UserDetailsComponent },
  {path:'edit/:id', component: UserEditeComponent },
  {path:'delate/:id', component: UserDelateComponent },
  {path:'find/:id', component: UserFindComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
