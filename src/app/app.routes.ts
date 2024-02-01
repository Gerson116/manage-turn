import { Routes } from '@angular/router';
import { MenuConstant } from './shared/consts/menu-constant';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: MenuConstant.Empty,
    redirectTo: MenuConstant.Auth,
    pathMatch: 'full',
  },
  {
    path: MenuConstant.Auth,
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: MenuConstant.Turn,
    loadChildren: () => import('./turn/turn.routes').then((m) => m.turnRoutes),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
