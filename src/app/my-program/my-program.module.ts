import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProgramPageRoutingModule } from './my-program-routing.module';

import { MyProgramPage } from './my-program.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProgramPageRoutingModule
  ],
  declarations: [MyProgramPage]
})
export class MyProgramPageModule {}
