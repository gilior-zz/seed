import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InboxComponent} from './inbox/inbox.component';
import {OutboxComponent} from '../outbox/outbox/outbox.component';
import {EmptyMessageComponent} from '../global/empty-message/empty-message.component';
import {MessageComponent} from '../global/message/message.component';

const routes: Routes = [
  {
    path: '', component: InboxComponent, children: [
      {
        path: '',
        component: EmptyMessageComponent,
      },
      {
        path: ':id',
        component: MessageComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
