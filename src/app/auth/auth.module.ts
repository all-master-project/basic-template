import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeAuthComponent } from './components/home-auth/home-auth.component';
import { FooterSmallComponent } from './components/footer-small/footer-small.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent,
     RegisterComponent,
     HomeAuthComponent,
     FooterSmallComponent,
    LoginComponent
    ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})  
export class AuthModule { } 
 