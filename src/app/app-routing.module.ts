import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inbox',
    loadChildren: './inbox/inbox.module#InboxModule',
  }, {
    path: 'outbox',
    loadChildren: './outbox/outbox.module#OutboxModule',
  },
  {path: '', pathMatch: 'full', redirectTo: 'inbox'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
