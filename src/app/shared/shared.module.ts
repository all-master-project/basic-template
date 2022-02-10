import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { RouterModule } from '@angular/router';
import { PagesDropdownComponent } from './components/pages-dropdown/pages-dropdown.component';
import { TablesComponent } from './components/tables/tables.component';
import { CardTableComponent } from './components/card-table/card-table.component';
import { TableDropdownComponent } from './components/table-dropdown/table-dropdown.component';



@NgModule({
  declarations: [AuthNavbarComponent,PagesDropdownComponent, TablesComponent, CardTableComponent,TableDropdownComponent],
  imports: [
    CommonModule,
    RouterModule, 

  ],
  exports: [AuthNavbarComponent, PagesDropdownComponent, TablesComponent, CardTableComponent,TableDropdownComponent]
})
export class SharedModule { }
