import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeCrescentePageRoutingModule } from './de-crescente-routing.module';

import { DeCrescentePage } from './de-crescente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeCrescentePageRoutingModule
  ],
  declarations: [DeCrescentePage]
})
export class DeCrescentePageModule {}
