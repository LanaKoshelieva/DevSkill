import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UglyNumbersPageRoutingModule } from './ugly-numbers-routing.module';

import { UglyNumbersPage } from './ugly-numbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UglyNumbersPageRoutingModule
  ],
  declarations: [UglyNumbersPage]
})
export class UglyNumbersPageModule {}
