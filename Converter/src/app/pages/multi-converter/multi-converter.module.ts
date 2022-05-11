import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiConverterPageRoutingModule } from './multi-converter-routing.module';

import { MultiConverterPage } from './multi-converter.page';
import { InputMultiConverterComponent } from 'src/app/components/input-multi-converter/input-multi-converter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiConverterPageRoutingModule
  ],
  declarations: [MultiConverterPage, InputMultiConverterComponent]
})
export class MultiConverterPageModule {}
