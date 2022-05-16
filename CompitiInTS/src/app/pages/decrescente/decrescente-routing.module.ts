import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecrescentePage } from './decrescente.page';

const routes: Routes = [
  {
    path: '',
    component: DecrescentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecrescentePageRoutingModule {}
