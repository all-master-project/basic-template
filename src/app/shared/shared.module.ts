import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { RouterModule } from '@angular/router';
import { PagesDropdownComponent } from './components/pages-dropdown/pages-dropdown.component';



@NgModule({
  declarations: [AuthNavbarComponent,PagesDropdownComponent],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [AuthNavbarComponent, PagesDropdownComponent]
})
export class SharedModule { }
