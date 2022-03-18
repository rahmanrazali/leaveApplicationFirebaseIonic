import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestLeavePageRoutingModule } from './request-leave-routing.module';

import { RequestLeavePage } from './request-leave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestLeavePageRoutingModule
  ],
  declarations: [RequestLeavePage]
})
export class RequestLeavePageModule {}
