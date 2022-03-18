import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLeaveRequestPage } from './view-leave-request.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLeaveRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLeaveRequestPageRoutingModule {}
