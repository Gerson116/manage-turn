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
    path: '**',
    component: PageNotFoundComponent,
  },
];
