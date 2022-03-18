import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintainStaffPageRoutingModule } from './maintain-staff-routing.module';

import { MaintainStaffPage } from './maintain-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintainStaffPageRoutingModule
  ],
  declarations: [MaintainStaffPage]
})
export class MaintainStaffPageModule {}
