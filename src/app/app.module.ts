import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminHomeModule } from './admin/admin-home/admin-home.module';
import { DashboardModule } from './admin/admin-home/dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeAuthComponent } from './auth/components/home-auth/home-auth.component';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AdminHomeModule,
    AdminModule,
    DashboardModule,
    AuthModule,
    MaterialModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
    entryComponents:[HomeAuthComponent ],
  bootstrap: [AppComponent],
})
export class AppModule {}
