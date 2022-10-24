import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeartHealthPageRoutingModule } from './heart-health-routing.module';

import { HeartHealthPage } from './heart-health.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeartHealthPageRoutingModule
  ],
  declarations: [HeartHealthPage]
})
export class HeartHealthPageModule {}
