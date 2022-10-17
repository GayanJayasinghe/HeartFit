import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswordUPage } from './reset-password-u.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordUPageRoutingModule {}
