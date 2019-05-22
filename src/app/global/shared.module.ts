import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListDisplayItemComponent} from './list-display-item/list-display-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EmptyMessageComponent} from './empty-message/empty-message.component';
import {MessageComponent} from './message/message.component';
import {ListDisplayComponent} from './list-display/list-display.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatDividerModule, MatCardModule, MatChipsModule
  ],
  declarations: [ListDisplayComponent, ListDisplayItemComponent, EmptyMessageComponent, MessageComponent],
  exports: [ListDisplayComponent,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  MatButtonModule,
  MatSnackBarModule]
})
export class SharedModule {
}
