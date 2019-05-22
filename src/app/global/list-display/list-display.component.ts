import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IListItem} from '../const';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {
  @Input() items: IListItem[];
  @Output() onSelectItem: EventEmitter<IListItem> = new EventEmitter<IListItem>();

  constructor() {
  }

  ngOnInit() {
  }

  _onSelectItem(item: IListItem) {
    this.onSelectItem.emit(item);
  }

}
