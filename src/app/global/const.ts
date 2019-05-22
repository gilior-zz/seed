export interface IListItem {
  id: number;
  name: string;
}

export interface IAppState {
  listItems: IListItem[]
}

export module Consts {
  export const ITEMS_LOADED = 'ITEMS_LOADED';
  export const LOAD_INBOX_ITEMS = 'LOAD_INBOX_ITEMS';
}

export type Payload = any;

export interface MetaData {
};

export const initState: IAppState = {
  listItems: []
};



