import {NgModule} from '@angular/core';
import {InboxService} from './services/inbox.service';
import {OutboxService} from './services/outbox.service';
import {Epics} from './store/epic';
import {HttpClientModule} from '@angular/common/http';
import {MessagesService} from './services/messages.service';


@NgModule({
 providers:[InboxService,OutboxService,Epics,MessagesService]
})
export class CoreModule { }
