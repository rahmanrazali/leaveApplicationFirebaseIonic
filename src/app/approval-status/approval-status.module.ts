import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovalStatusPageRoutingModule } from './approval-status-routing.module';

import { ApprovalStatusPage } from './approval-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovalStatusPageRoutingModule
  ],
  declarations: [ApprovalStatusPage]
})
export class ApprovalStatusPageModule {}
