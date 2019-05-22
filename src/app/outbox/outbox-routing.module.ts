import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OutboxComponent} from './outbox/outbox.component';
import {EmptyMessageComponent} from '../global/empty-message/empty-message.component';
import {MessageComponent} from '../global/message/message.component';

const routes: Routes = [
    {
      path: '', component: OutboxComponent, children: [
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


  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboxRoutingModule {
}
