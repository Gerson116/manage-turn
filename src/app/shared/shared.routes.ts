import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuConstant } from './consts/menu-constant';

export const sharedRoutes: Routes = [
  {
    path: MenuConstant.Empty,
    component: PageNotFoundComponent,
  },
];
