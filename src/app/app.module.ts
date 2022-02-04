import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminHomeModule } from './admin/admin-home/admin-home.module';
import { DashboardModule } from './admin/admin-home/dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { ModulesCrudModule } from './admin/modules-crud/modules-crud.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
