import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IListItem} from '../const';

@Component({
  selector: 'app-list-display-item',
  template: `

    <mat-card (click)="onSelect()"><span>{{item.id}}</span>
      <span>{{item.name}}</span></mat-card>
  `,
  styles: [
      `
      div {
        cursor: pointer;
      }
    `
  ]
})
export class ListDisplayItemComponent implements OnInit {
  @Input() item: IListItem;
  @Output() onSelectItem: EventEmitter<IListItem> = new EventEmitter<IListItem>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect() {
    this.onSelectItem.emit(this.item);
  }

}
