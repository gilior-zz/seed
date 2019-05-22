import {NgModule} from '@angular/core';
import {InboxService} from './services/inbox.service';
import {OutboxService} from './services/outbox.service';
import {Epics} from '../store/epic';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
 providers:[InboxService,OutboxService,Epics]
})
export class CoreModule { }
