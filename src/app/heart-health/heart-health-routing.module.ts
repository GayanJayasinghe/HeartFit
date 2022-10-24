import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeartHealthPage } from './heart-health.page';

const routes: Routes = [
  {
    path: '',
    component: HeartHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeartHealthPageRoutingModule {}
