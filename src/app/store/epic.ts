import {ofType} from 'redux-observable';
import {Consts} from '../global/const';
import {map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {InboxService} from '../global/services/inbox.service';


@Injectable()
export class Epics {
  fetchUserEpic = (action$, state$) => action$.pipe(
    ofType(Consts.LOAD_INBOX_ITEMS),
    mergeMap(action =>
      this.inboxService.fetchItems().pipe(
        map(payload =>  ({ type: Consts.ITEMS_LOADED, payload }))
      )
    )
  );

  constructor(private inboxService:InboxService) {
  }
}
