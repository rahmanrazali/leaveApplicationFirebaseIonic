import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestLeavePage } from './request-leave.page';

const routes: Routes = [
  {
    path: '',
    component: RequestLeavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestLeavePageRoutingModule {}
