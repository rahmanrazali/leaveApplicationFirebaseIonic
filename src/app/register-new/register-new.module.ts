import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterNewPageRoutingModule } from './register-new-routing.module';

import { RegisterNewPage } from './register-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterNewPageRoutingModule
  ],
  declarations: [RegisterNewPage]
})
export class RegisterNewPageModule {}
