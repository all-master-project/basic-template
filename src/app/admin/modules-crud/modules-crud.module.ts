import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesCrudRoutingModule } from './modules-crud-routing.module';
import { AdminHomeModule } from '../admin-home/admin-home.module';
import { AdminModule } from '../admin.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ModulesCrudRoutingModule,
    AdminHomeModule,
    AdminModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModulesCrudModule {}
