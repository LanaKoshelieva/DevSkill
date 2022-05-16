import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecrescentePageRoutingModule } from './decrescente-routing.module';

import { DecrescentePage } from './decrescente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecrescentePageRoutingModule
  ],
  declarations: [DecrescentePage]
})
export class DecrescentePageModule {}
