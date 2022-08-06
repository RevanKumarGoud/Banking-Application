import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistionPageComponent } from './registion-page/registion-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditeComponent } from './user-edite/user-edite.component';
import { UserFindComponent } from './user-find/user-find.component';
import { UserDelateComponent } from './user-delate/user-delate.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistionPageComponent,
    UserDetailsComponent,
    UserEditeComponent,
    UserFindComponent,
    UserDelateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
