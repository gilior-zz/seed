import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string) {
    let item = localStorage.getItem(key);
    let parsed = JSON.parse(item);
    console.log(<T>parsed)
    return <T>parsed;
  }


}
