import {ofType} from 'redux-observable';
import {Consts} from '../global/const';
import {map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {InboxService} from '../global/services/inbox.service';
import {MessagesService} from '../global/services/messages.service';
import {FluxStandardAction} from 'flux-standard-action';


@Injectable()
export class Epics {
  loadInboxEpic = (action$, state$) => action$.pipe(
    ofType(Consts.LOAD_INBOX_ITEMS),
    mergeMap(action =>
      this.inboxService.fetchItems().pipe(
        map(payload => ({type: Consts.INBOX_LOADED, payload}))
      )
    )
  );

  handleNewMessage = (action$, state$) => action$.pipe(
    ofType(Consts.SEND_MESSAGE),
    map((action: FluxStandardAction) => {
        this.messagesService.sendMessage(action.payload);
        return {type: 'void'};
      }
    )
  );

  constructor(private inboxService: InboxService, private messagesService: MessagesService) {
  }
}
