import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/central/central.module').then( m => m.CentralPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  { path: 'detalles/:id', loadChildren: () => import('./pages/detalles/detalles.module').then( m => m.DetallesPageModule) },
  { path: 'busqueda', loadChildren: () => import('./pages/busqueda/busqueda.module').then( m => m.BusquedaPageModule) },
  { path: 'ajusteuno', loadChildren: () => import('./pages/ajusteuno/ajusteuno.module').then( m => m.AjusteunoPageModule) },
  { path: 'ajustedos', loadChildren: () => import('./pages/ajustedos/ajustedos.module').then( m => m.AjustedosPageModule) },  {
    path: 'photo',
    loadChildren: () => import('./pages/photo/photo.module').then( m => m.PhotoPageModule)
  },
  {
    path: 'carta',
    loadChildren: () => import('./pages/carta/carta.module').then( m => m.CartaPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
