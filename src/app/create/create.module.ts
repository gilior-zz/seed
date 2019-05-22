import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateMessageComponent } from './create-message/create-message.component';
import {SharedModule} from '../global/shared.module';

@NgModule({
  declarations: [CreateMessageComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
