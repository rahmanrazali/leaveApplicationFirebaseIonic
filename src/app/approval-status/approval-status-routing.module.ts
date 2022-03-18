import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovalStatusPage } from './approval-status.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovalStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovalStatusPageRoutingModule {}
