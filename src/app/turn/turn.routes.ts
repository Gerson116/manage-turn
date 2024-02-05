import { Routes } from '@angular/router';
import { MenuConstant } from '../shared/consts/menu-constant';
import { ListTurnComponent } from './list-turn/list-turn.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { AddTurnComponent } from './add-turn/add-turn.component';

export const turnRoutes: Routes = [
  {
    path: MenuConstant.Empty,
    component: ListTurnComponent,
  },
  {
    path: MenuConstant.Client,
    component: SearchClientComponent,
  },
  {
    path: MenuConstant.NewTicket,
    component: AddTurnComponent,
  },
];
