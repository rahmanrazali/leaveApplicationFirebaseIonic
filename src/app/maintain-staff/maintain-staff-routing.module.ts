import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintainStaffPage } from './maintain-staff.page';

const routes: Routes = [
  {
    path: '',
    component: MaintainStaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintainStaffPageRoutingModule {}
