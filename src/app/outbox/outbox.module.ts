import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutboxRoutingModule } from './outbox-routing.module';
import { OutboxComponent } from './outbox/outbox.component';
import {SharedModule} from '../global/shared.module';



@NgModule({
  imports: [
    CommonModule,
    OutboxRoutingModule,
    SharedModule
  ],
  declarations: [OutboxComponent]
})
export class OutboxModule { }
