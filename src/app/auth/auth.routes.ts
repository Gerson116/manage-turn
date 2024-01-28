import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuConstant } from '../shared/consts/menu-constant';

export const authRoutes: Routes = [
  {
    path: MenuConstant.Empty,
    component: LoginComponent,
    children: [{ path: MenuConstant.Login, component: LoginComponent }],
  },
];
