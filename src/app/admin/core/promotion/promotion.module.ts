import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionListComponent } from './components/promotion-list/promotion-list.component';
import { PromotionFormComponent } from './components/promotion-form/promotion-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
  declarations: [PromotionListComponent, PromotionFormComponent],
  imports: [
    PromotionRoutingModule,
    CommonModule,
    PromotionRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class PromotionModule { }
