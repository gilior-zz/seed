import {NgModule} from '@angular/core';
import {InboxService} from './services/inbox.service';
import {OutboxService} from './services/outbox.service';
import {Epics} from './store/epic';
import {HttpClientModule} from '@angular/common/http';
import {MessagesService} from './services/messages.service';
import {StorageService} from './services/storage.service';
import {AuthService} from './services/auth.service';


@NgModule({
 providers:[InboxService,OutboxService,Epics,MessagesService,StorageService,AuthService]
})
export class CoreModule { }
