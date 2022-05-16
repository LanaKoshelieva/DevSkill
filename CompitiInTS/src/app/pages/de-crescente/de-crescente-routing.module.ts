import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeCrescentePage } from './de-crescente.page';

const routes: Routes = [
  {
    path: '',
    component: DeCrescentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeCrescentePageRoutingModule {}
