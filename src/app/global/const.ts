export interface IListItem {
  id: number;
  name: string;
}

export interface IMessage {
  id: number;
  name: string;
  content: string;
}

export interface IAppState {
  listItems: IListItem[]
}

export module Consts {
  export const INBOX_LOADED = 'ITEMS_LOADED';
  export const OUTBOX_LOADED = 'OUTBOX_LOADED';
  export const LOAD_INBOX_ITEMS = 'LOAD_INBOX_ITEMS';
  export const LOAD_OUTBOX_ITEMS = 'LOAD_OUTBOX_ITEMS';
  export const SEND_MESSAGE = 'SEND_MESSAGE';

}

export type Payload = any;

export interface MetaData {
};

export const initState: IAppState = {
  listItems: []
};



