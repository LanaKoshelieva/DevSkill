import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'n7b',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ugly-numbers',
    loadChildren: () => import('./pages/ugly-numbers/ugly-numbers.module').then( m => m.UglyNumbersPageModule)
  },
  {
    path: 'ugly-numbers',
    loadChildren: () => import('./pages/ugly-numbers/ugly-numbers.module').then( m => m.UglyNumbersPageModule)
  },
  {
    path: 'de-crescente',
    loadChildren: () => import('./pages/de-crescente/de-crescente.module').then( m => m.DeCrescentePageModule)
  },
  {
    path: 'crescente',
    loadChildren: () => import('./pages/crescente/crescente.module').then( m => m.CrescentePageModule)
  },
  {
    path: 'decrescente',
    loadChildren: () => import('./pages/decrescente/decrescente.module').then( m => m.DecrescentePageModule)
  },
  {
    path: 'n7b',
    loadChildren: () => import('./pages/n7b/n7b.module').then( m => m.N7bPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
