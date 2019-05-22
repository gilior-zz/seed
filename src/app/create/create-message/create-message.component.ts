import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {Consts, IAppState} from '../../global/const';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private ngRedux: NgRedux<IAppState>) {
    this.buildFrom();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: Consts.SEND_MESSAGE, payload: this.form.value});
  }

  private buildFrom() {
    this.form = this.fb.group({
      id: ['1'],
      name: ['kjh'],
      content: ['kjh'],
      gender: ['male'],
    });
  }
}
