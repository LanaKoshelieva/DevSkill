import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UglyNumbersPage } from './ugly-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: UglyNumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UglyNumbersPageRoutingModule {}
