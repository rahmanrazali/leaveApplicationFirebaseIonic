import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterNewPage } from './register-new.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterNewPageRoutingModule {}
