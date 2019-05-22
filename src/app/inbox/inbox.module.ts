import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import {SharedModule} from '../global/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule
  ],
  declarations: [InboxComponent]
})
export class InboxModule { }
