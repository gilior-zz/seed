import {Component, OnInit} from '@angular/core';

import {NgRedux, select} from '@angular-redux/store';
import {Consts, IAppState, IListItem} from '../../global/const';
import {InboxService} from '../../global/services/inbox.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inboxItems: IListItem[];
  @select() listItems$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }


  ngOnInit() {
    // this.inboxService.fetchItems()
    //   .subscribe((items) => {
    //     this.inboxItems = items;
    //   });
    this.ngRedux.dispatch({type: Consts.LOAD_INBOX_ITEMS});
    this.listItems$.subscribe((data: IListItem[]) => {
      this.inboxItems = data;
    });
  }

}
