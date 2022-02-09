import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminHomeModule } from './admin/admin-home/admin-home.module';
import { DashboardModule } from './admin/admin-home/dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { ModulesCrudModule } from './admin/modules-crud/modules-crud.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeAuthComponent } from './auth/components/home-auth/home-auth.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ModulesCrudModule,
    AdminHomeModule,
    AdminModule,
    DashboardModule,
    AuthModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
    entryComponents:[HomeAuthComponent ],
  bootstrap: [AppComponent],
})
export class AppModule {}
