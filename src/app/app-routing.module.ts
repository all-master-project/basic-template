import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  { 
    path: 'admin',
  loadChildren: () =>
    import(`./admin/admin-home/dashboard/dashboard.module`).then((m) => m.DashboardModule),
  },
  { 
    path: 'auth',
  loadChildren: () =>
    import(`./auth/auth.module`).then((m) => m.AuthModule),
  },
  { 
    path: 'home',
  loadChildren: () =>
    import(`./home/home.module`).then((m) => m.HomeModule),
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
