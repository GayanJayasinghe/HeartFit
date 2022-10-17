import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProgramPage } from './my-program.page';

const routes: Routes = [
  {
    path: '',
    component: MyProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProgramPageRoutingModule {}
