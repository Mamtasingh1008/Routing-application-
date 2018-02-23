import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path: 'login',component:LoginComponent},
      {path: 'SignUp',component: SignupComponent}
    ])
  ],
  providers: [LoginComponent, SignupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
