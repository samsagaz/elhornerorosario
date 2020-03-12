import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'comision',
    loadChildren: () => import('./comision/comision.module').then( m => m.ComisionPageModule)
  },
  {
    path: 'talleres',
    loadChildren: () => import('./talleres/talleres.module').then( m => m.TalleresPageModule)
  },
  {
    path: 'novedades',
    loadChildren: () => import('./novedades/novedades.module').then( m => m.NovedadesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
