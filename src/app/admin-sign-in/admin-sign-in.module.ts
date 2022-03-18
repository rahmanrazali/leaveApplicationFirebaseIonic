import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSignInPageRoutingModule } from './admin-sign-in-routing.module';

import { AdminSignInPage } from './admin-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSignInPageRoutingModule
  ],
  declarations: [AdminSignInPage]
})
export class AdminSignInPageModule {}
