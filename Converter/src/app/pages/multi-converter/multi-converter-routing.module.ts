import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiConverterPage } from './multi-converter.page';

const routes: Routes = [
  {
    path: '',
    component: MultiConverterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiConverterPageRoutingModule {}
