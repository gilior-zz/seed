import {Component, OnInit} from '@angular/core';
import {Consts, IAppState, IListItem} from '../../global/const';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {
  outboxItems: IListItem[];
  @select() listItems$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.ngRedux.dispatch({type: Consts.LOAD_INBOX_ITEMS});
    this.listItems$.subscribe((data: IListItem[]) => {
      this.outboxItems = data;
    });
  }

  onSelect(item: IListItem) {
    this.router.navigate([item.id], {relativeTo: this.activatedRoute});
  }

}
