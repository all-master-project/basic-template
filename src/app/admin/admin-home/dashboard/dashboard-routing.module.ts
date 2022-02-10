import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from 'src/app/shared/components/tables/tables.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { 
    path: '',
    component: IndexComponent,
    
    children: [
      { path: '', component: DashboardComponent },
      {
        path: "etudiant-list", 
        loadChildren:()=> import('../../core/etudiant/etudiant.module').then((m)=>m.EtudiantModule)
      },
      {
        path: "promotion", 
        loadChildren:()=> import('../../core/promotion/promotion.module').then((m)=>m.PromotionModule)
      },
    ],
  },
 
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
