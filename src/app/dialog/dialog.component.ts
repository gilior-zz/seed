import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState, IMessage} from '../global/const';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
   msg: IMessage;

  constructor(private ngRedux:NgRedux<IAppState>,private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
   this.msg=this.ngRedux.getState().msg;
   this.changeDetectorRef.detectChanges();
  }

}
