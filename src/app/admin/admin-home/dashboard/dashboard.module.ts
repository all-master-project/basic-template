import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardStatusComponent } from './components/cards/card-status/card-status.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardBarChartComponent } from './components/cards/card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './components/cards/card-line-chart/card-line-chart.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserDropDownComponent } from './components/dropdowns/user-drop-down/user-drop-down.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { HeaderStatusComponent } from './components/header-status/header-status.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({ 
  declarations: [
    CardStatusComponent,
    NavBarComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    CardPageVisitsComponent,
    CardSocialTrafficComponent,
    SideBarComponent,
    UserDropDownComponent,
    FooterAdminComponent,
    HeaderStatusComponent,
    IndexComponent, 
    DashboardComponent],
  imports: [
    DashboardRoutingModule,
    DashboardRoutingModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class DashboardModule {}
