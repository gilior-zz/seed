import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Consts, IAppState, IListItem} from '../const';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../dialog/dialog.component';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'app-list-display-item',
  template: `

    <mat-card (click)="onSelect()"><span>{{item.id}}</span>
      <span>{{item.name}}</span>
      <button mat-raised-button (click)="openDialog()">edit</button>    </mat-card>
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

  constructor(public dialog: MatDialog,private ngRedux:NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

  onSelect() {
    this.ngRedux.dispatch({type:Consts.SET_MESSAGE,payload:this.item})
    this.onSelectItem.emit(this.item);
  }

  editMsg() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
