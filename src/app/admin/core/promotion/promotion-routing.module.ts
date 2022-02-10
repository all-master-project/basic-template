import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionFormComponent } from './components/promotion-form/promotion-form.component';
import { PromotionListComponent } from './components/promotion-list/promotion-list.component';

const routes: Routes = [
  {
    path:"",component:PromotionListComponent
  },
  {
    path:"form",component:PromotionFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
