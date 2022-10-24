import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordUPageRoutingModule } from './reset-password-u-routing.module';

import { ResetPasswordUPage } from './reset-password-u.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ResetPasswordUPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ResetPasswordUPage]
})
export class ResetPasswordUPageModule {}
