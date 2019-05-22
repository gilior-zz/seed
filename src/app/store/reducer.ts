import {Reducer} from 'redux';
import {Consts, IAppState} from '../global/const';
import {FluxStandardAction} from 'flux-standard-action';

export const appStateReducer: Reducer<IAppState> = (state: IAppState, action: FluxStandardAction): IAppState => {

  let newStore: IAppState = {...state};
  switch (action.type) {
    case Consts.INBOX_LOADED:
      newStore.listItems = action.payload;
      return newStore;
    case Consts.INBOX_LOADED:
      newStore.listItems = action.payload;
      return newStore;
    default:
      return state;
  }
};


