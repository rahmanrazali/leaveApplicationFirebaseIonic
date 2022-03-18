import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLeaveRequestPageRoutingModule } from './view-leave-request-routing.module';

import { ViewLeaveRequestPage } from './view-leave-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLeaveRequestPageRoutingModule
  ],
  declarations: [ViewLeaveRequestPage]
})
export class ViewLeaveRequestPageModule {}
