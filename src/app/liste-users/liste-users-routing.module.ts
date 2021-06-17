import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeUsersPage } from './liste-users.page';

const routes: Routes = [
  {
    path: '',
    component: ListeUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeUsersPageRoutingModule {}
