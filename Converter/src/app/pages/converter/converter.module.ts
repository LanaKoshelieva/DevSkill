import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConverterPageRoutingModule } from './converter-routing.module';

import { ConverterPage } from './converter.page';
import { InputConverterComponent } from 'src/app/components/input-converter/input-converter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConverterPageRoutingModule
  ],
  declarations: [ConverterPage, InputConverterComponent]
})
export class ConverterPageModule {}
