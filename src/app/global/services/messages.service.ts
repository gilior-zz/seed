import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IMessage} from '../const';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient,private snackBar: MatSnackBar) {
  }

  async loadMessae(id: number) {
    const messages = await this.http.get<IMessage[]>('assets/messages.json').toPromise();
    const msg = messages.find(msg => msg.id === id);
    return msg;
  }

  sendMessage(payload: IMessage) {
this.openSnackBar(JSON.stringify(payload,undefined,2),'good')
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
