import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeSignInPageRoutingModule } from './employee-sign-in-routing.module';

import { EmployeeSignInPage } from './employee-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeSignInPageRoutingModule
  ],
  declarations: [EmployeeSignInPage]
})
export class EmployeeSignInPageModule {}
