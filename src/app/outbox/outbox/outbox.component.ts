import {Component, OnInit} from '@angular/core';
import {IListItem} from '../../global/const';
import {OutboxService} from '../../global/services/outbox.service';


@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {
   outboxItems: IListItem[];

  constructor(private outboxService: OutboxService) {
  }

  ngOnInit() {
    this.outboxService.fetchItems()
      .subscribe((items) => {
        this.outboxItems = items;
      });
  }

}
