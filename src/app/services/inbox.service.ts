import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IListItem} from '../global/const';

@Injectable()
export class InboxService {

  constructor(private http:HttpClient) { }

  fetchItems():Observable<IListItem[]> {
    return this.http.get<IListItem[]>('assets/data.json');
  }
}
