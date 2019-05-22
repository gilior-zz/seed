import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './global/services/auth-guard.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'inbox',
    loadChildren: './inbox/inbox.module#InboxModule',
    canLoad: [AuthGuard]
  }, {
    path: 'outbox',
    loadChildren: './outbox/outbox.module#OutboxModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'createMessage',
    loadChildren: './create/create.module#CreateModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {path: '', pathMatch: 'full', redirectTo: 'inbox'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
