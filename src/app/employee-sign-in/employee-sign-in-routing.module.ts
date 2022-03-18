import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeSignInPage } from './employee-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeSignInPageRoutingModule {}
