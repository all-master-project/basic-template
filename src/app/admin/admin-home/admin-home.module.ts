import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    AdminHomeRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AdminHomeModule {}
