import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {MessagesService} from '../services/messages.service';
import {Observable} from 'rxjs';
import {IMessage} from '../const';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
   id: number;
   message$: Observable<IMessage>;

  constructor(private route: ActivatedRoute,private messagesService:MessagesService) { }

  ngOnInit() {
    this.message$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.id = +params.get('id');
        return this.messagesService.loadMessae(this.id);
      })
    );

   this.route.paramMap.pipe(
      map(params => {
        // (+) before `params.get()` turns the string into a number
        this.id = +params.get('id');
        // return this.messagesService.loadMessae(this.id);
      })
    );
  }

}
