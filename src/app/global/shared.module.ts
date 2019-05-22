import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListDisplayComponent} from './list-display.component';
import { ListDisplayItemComponent } from './list-display-item/list-display-item.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListDisplayComponent, ListDisplayItemComponent],
  exports: [ListDisplayComponent,ReactiveFormsModule]
})
export class SharedModule {
}
